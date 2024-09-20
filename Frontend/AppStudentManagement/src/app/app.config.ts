import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { authInterceptorInterceptor } from './Services/auth-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(withInterceptors([authInterceptorInterceptor])), provideAnimationsAsync(),MatDatepickerModule,
   

  ]
};
