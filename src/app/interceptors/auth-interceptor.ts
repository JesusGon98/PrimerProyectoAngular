import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private pathRequiredAutentication(url: string): boolean {
    const unautenticatedpaths = ['/login', '/not-found'];
    if (unautenticatedpaths.some((path) => url.includes(path))) return false;
    return true;
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token: string = sessionStorage.getItem('token') || '';
    const requiredAuth: boolean = this.pathRequiredAutentication(req.url);

    req = req.clone({
      setHeaders: {
        'x-api-key': environment.apiKey,
      },
      setParams: {
        project_id: environment.apiId.toString(),
      },
    });
    
    if (token && requiredAuth) {
      req = this.addToken(req, token);
    }

    return next.handle(req);
  }

  
}