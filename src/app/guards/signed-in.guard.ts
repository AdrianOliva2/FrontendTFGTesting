import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const signedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
    return true;
  } else {
    router.navigate(['/signin']);
    return false;
  }
};
