import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
    selector: 'component-messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {

    @ViewChild('buttonMessage', { static: false }) buttonMessage: ElementRef;
    visibleMessage: boolean = false;
    message: string;
    type: string;

    constructor() {

    }

    showMessages(message: string, type: string, permanent?: boolean) {
        this.message = message;
        this.type = type;
        this.visibleMessage = true;
        if (!permanent || permanent == null) {
            setTimeout(() => {
                this.buttonMessage.nativeElement.focus();
            }, 0)
            setTimeout(() => {
                this.closeMessage();
            }, 5000)
        } else {
            setTimeout(() => {
                this.buttonMessage.nativeElement.focus();
            }, 0)
        }

    }



    closeMessage() {
        this.visibleMessage = false;
    }

}



