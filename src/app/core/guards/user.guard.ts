import { inject } from '@angular/core';
import { UserProfileEnum } from '../enums/user-profile.enum';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const galerieGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const isCustomerConnected = sessionStorage.getItem('profile') === UserProfileEnum.CLIENT;
  if (!isCustomerConnected) {
    const router = inject(Router);
    userService.disconnect();
    router.navigate(['home']);
  }
  return isCustomerConnected
}

export const managerGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const isCustomerConnected = sessionStorage.getItem('profile') === UserProfileEnum.OWNER;
  if (!isCustomerConnected) {
    const router = inject(Router);
    userService.disconnect();
    router.navigate(['home']);
  }
  return isCustomerConnected
}
