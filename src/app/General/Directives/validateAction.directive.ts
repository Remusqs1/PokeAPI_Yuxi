import { Directive, EventEmitter, Output, ElementRef, OnInit, Input } from '@angular/core';
import { Profile } from '../../Commons/Entities/profile';


@Directive({
  selector: '[validate]',
})

export class ValidateActionDirective implements OnInit {
  constructor(private element: ElementRef) { }

  @Input() actions: Array<number>;
  @Input() hidden = true;

  ngOnInit() {
    // const profile: Profile = Object.assign(new Profile(), JSON.parse(localStorage.getItem('profile')));
    // this.element.nativeElement.disabled = true;
    // this.element.nativeElement.hidden = this.hidden;
    // profile.actionsByProfile.forEach(abp => {
    //   if (this.actions.find(x => x === abp.action.actID)) {
    //     if (abp.abp_status === 'V') {
    //       this.element.nativeElement.disabled = false;
    //       this.element.nativeElement.hidden = false;
    //     }
    //   }
    // });

  }

}
