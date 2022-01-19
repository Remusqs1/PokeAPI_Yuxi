import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../Shared/Services/spinner.service';
import { finalize } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SpinnerServiceInterceptor implements HttpInterceptor {
    constructor(public spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        request = request.clone({

            setHeaders: { }
        });
        return next.handle(request).pipe(finalize(() => this.spinnerService.hide()));
    }
}