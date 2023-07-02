import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfileEnum } from '../enums/user-profile.enum';

@Injectable()
export class UserService {

  #isCustomerConnected = new BehaviorSubject(false);

  #isManagerConnected = new BehaviorSubject(false);

  constructor() {
    const connectedProfile = sessionStorage.getItem('profile');
    if (connectedProfile === UserProfileEnum.CLIENT) {
      this.#isCustomerConnected = new BehaviorSubject(true);
    } else if (connectedProfile === UserProfileEnum.OWNER) {
      this.#isManagerConnected = new BehaviorSubject(true);
    }
  }

  get isCustomerConnected$(): Observable<boolean> {
    return this.#isCustomerConnected.asObservable();
  }

  get isManagerConnected$(): Observable<boolean> {
    return this.#isManagerConnected.asObservable();
  }

  public connect(profile: string): void {
    sessionStorage.setItem('profile', profile);
    if (UserProfileEnum.CLIENT === profile) {
      this.#isCustomerConnected.next(true);
    }
    if (UserProfileEnum.OWNER === profile) {
      this.#isManagerConnected.next(true);
    }
  }

  public disconnect(): void {
    sessionStorage.removeItem('profile');
    this.#isCustomerConnected.next(false);
    this.#isManagerConnected.next(false);
  }
}
