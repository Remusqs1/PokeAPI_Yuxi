import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogAuditByDateIn } from '../MethoParameters/getLogAuditByDateIn';
import { LogAuditByDateOut } from '../MethoParameters/getLogAuditByDateOut';


@Injectable({
    providedIn: 'root'
})
export class AuditService {
    constructor(
        private proxy: Proxy
    ) { }
    getLogAuditByDate(input: LogAuditByDateIn): Observable<LogAuditByDateOut> {
        const response = this.proxy.executePost('GetLogAuditByDate', input, null).pipe(
            map((resp) => this.mapGetLogAuditByDate(resp)));
        return response;
    }

    mapGetLogAuditByDate(info: any): LogAuditByDateOut {
        const result = <LogAuditByDateOut>info;
        return result;
    }
    convertToCSV(input: string) {
        const array = typeof input != "object" ? JSON.parse(input) : input;
        let str = "";
        for (let i = 0; i < array.length; i++) {
            let line = "";
            for (let index in array[i]) {
                if (line != "") line += ",";
                line += array[i][index];
            }
            str += line + "\r\n";
        } 
        return str;
    }

    exportCSVFile(headers, items: any[], fileName: string) {
        if (headers) {
            items.unshift(headers);
        }
        const jsonObject = JSON.stringify(items);
        const csv = this.convertToCSV(jsonObject);
        const exportName = fileName + ".csv" || "export.csv";
        const blob = new Blob([csv], { type: "text/csv;charset=UTF-8;" });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, exportName);
        } else {
            const link = document.createElement("a");
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportName);
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
}