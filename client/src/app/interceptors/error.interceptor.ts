import { HttpHandlerFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['/login']); 
      }
      
      return throwError(() => error);
    })
  );
}