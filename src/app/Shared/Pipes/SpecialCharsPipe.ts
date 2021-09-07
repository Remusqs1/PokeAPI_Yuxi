import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'specialChars_Pipe',
    pure: false
})

export class SpecialCharsPipe implements PipeTransform {

    constructor() { }

    transform(inputString: string): string {

        let outputString = inputString.toUpperCase();

        outputString = outputString.split('Ñ').join('N');
        outputString = outputString.split('&').join('Y');
        outputString = outputString.split('Á').join('A');
        outputString = outputString.split('À').join('A');
        outputString = outputString.split('Â').join('A');
        outputString = outputString.split('Ä').join('A');
        outputString = outputString.split('É').join('E');
        outputString = outputString.split('È').join('E');
        outputString = outputString.split('Ê').join('E');
        outputString = outputString.split('Ë').join('E');
        outputString = outputString.split('Í').join('I');
        outputString = outputString.split('Ì').join('I');
        outputString = outputString.split('Î').join('I');
        outputString = outputString.split('Ï').join('I');
        outputString = outputString.split('Ó').join('O');
        outputString = outputString.split('Ò').join('O');
        outputString = outputString.split('Ö').join('O');
        outputString = outputString.split('Ô').join('O');
        outputString = outputString.split('Ú').join('U');
        outputString = outputString.split('Ù').join('U');
        outputString = outputString.split('Û').join('U');
        outputString = outputString.split('Ü').join('U');


        outputString = outputString.replace(/[^A-Z ]/g, "");

        return outputString;

    }

}
