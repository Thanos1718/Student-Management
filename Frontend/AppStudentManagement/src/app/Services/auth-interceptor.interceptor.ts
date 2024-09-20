import { HttpInterceptorFn } from '@angular/common/http';
import { UserloginService } from './userlogin.service';
import { RegisterService } from './register.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (request, next) => {

  
 
  const token = UserloginService.getToken();
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(request);
}

