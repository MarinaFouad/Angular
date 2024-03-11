import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';

export const gurdsGuard: CanActivateFn = (route, state) => {
  let service = inject(AccountService);
  if (service.isLoged()) return service.isLoged();
  else {
    let router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
