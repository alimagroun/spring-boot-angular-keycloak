import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakService} from '../services/keycloak.service';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private keycloakService: KeycloakService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('hello');
    const token = this.keycloakService.keycloak.token;

    console.log('hello ALI', token);
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });

      // Log request information before sending
      console.log('Request URL:', authReq.url);
      console.log('Request Headers:', authReq.headers);


      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
