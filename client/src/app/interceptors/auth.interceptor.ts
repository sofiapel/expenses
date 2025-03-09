import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  let authToken = '';
  if (typeof localStorage !== 'undefined') {
    authToken = localStorage.getItem('token') || '';
  }
  const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + authToken),
  });
  return next(newReq);
}