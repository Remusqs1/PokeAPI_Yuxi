import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { FormGroup } from '@angular/forms';
import { Profile } from '../../../../../Commons/Entities/profile';
import { ActionByProfile } from '../../../../../Commons/Entities/actionByProfile';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../../../../../Administration/Components/Profile/Services/profile.service';
import { Result } from '../../../../../Commons/Classes/result';
import { AssociatedFormsService } from '../../Services/associated.forms.service';
import { of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AssociatedService } from '../../Services/associated.service';
import { OTPForwardingIn } from '../../MethodParameters/oTPForwardingIn';
import { send } from 'process';
import { Router } from '@angular/router';


@Component({
  selector: 'app-associated',
  templateUrl: './associated.component.html',
  styleUrls: ['./associated.component.css']
})
export class AssociatedComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  OTPForm: FormGroup;

  profilesList: Array<Profile>;
  actionsByProfile: Array<ActionByProfile>;
  labelNoRecords: string;
  totalRecords = 0;

  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  createModalAceptText = 'associated.createAssociated.modalAceptButton';
  createModalCloseText = 'associated.createAssociated.modalCancelButton';
  createModalTitle = 'associated.createAssociated.modalTitle';
  editModalTitle = 'associated.editAssociated.modalTitle';
  editModalAceptText = 'associated.editAssociated.modalAceptButton';
  editModalCloseText = 'associated.editAssociated.modalCancelButton';

  settings: any;

  hasError = false;
  selectedAllActions = false;

  constructor(private associatedFormsService: AssociatedFormsService,
    private translateService: TranslateService,
    private profileService: ProfileService,
    private associatedService: AssociatedService,
    private router: Router) { }

  ngOnInit() {

    this.OTPForm = this.associatedFormsService.getOtpForwardingForm();

  }

  onForwardOtp() {
    this.hasError = false;
    if (this.OTPForm.valid) {

      const sendOTPIn = new OTPForwardingIn();
      let messageResult: string = "";
      sendOTPIn.Cellphone = this.OTPForm.value.create_fotp_Email;
      sendOTPIn.Email = this.OTPForm.value.create_fotp_Cellphone;
      sendOTPIn.IdentificationType = this.OTPForm.value.create_fotp_IdentificationType;
      sendOTPIn.Identification = this.OTPForm.value.create_ftop_Identification;

      this.associatedService.oTPForwarding(sendOTPIn).subscribe(response => {
        if (response.result === Result.Success) {
          console.log('Reenvio OTP', response);
          messageResult = 'Código OTP no enviado, ';
          switch (response.Code) {
            case "0900":
              messageResult = 'Código OTP enviado, ' + response.Message;
              this.messages.showMessages(messageResult, 'SUCCESS');
              setTimeout(() => {
                this.onClearForm();
              }, 5000);
              break;
            case "0901":
              messageResult = messageResult + response.Message;
              this.messages.showMessages(messageResult, 'ERROR');
              setTimeout(() => {
                this.onClearForm();
              }, 5000);
              break;
            case "0902":
              messageResult = messageResult + response.Message;
              this.messages.showMessages(messageResult, 'WARNING');
              setTimeout(() => {
                this.onClearForm();
              }, 5000);
              break;
            case "0903":
              messageResult = messageResult + response.Message;
              this.messages.showMessages(messageResult, 'WARNING');
              setTimeout(() => {
                this.onClearForm();
              }, 5000);
              break;
            case "0904":
              messageResult = messageResult + response.Message;
              this.messages.showMessages(messageResult, 'WARNING');
              setTimeout(() => {
                this.onClearForm();
              }, 5000);
              break;
          }

        } 
        else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        }else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        }else {
          this.messages.showMessages('Ocurrio un error al enviar el Código OTP', 'ERROR');
        }
      })
    }
  }

  onClearForm() {
    this.OTPForm = this.associatedFormsService.getOtpForwardingForm();
  }

  invalidSession() {
    this.messages.showMessages('Su sessión ha caducado, ingrese de nuevo al sistema', 'ERROR');
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
    
  }
  
}