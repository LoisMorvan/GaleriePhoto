import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  #isCustomerConnected$!: Observable<boolean>;
  #isManagerConnected$!: Observable<boolean>;
  #isUserConnected$!: Observable<boolean>;

  constructor(private userService: UserService, private router: Router) { }

  get isCustomerConnected$(): Observable<boolean> {
    return this.#isCustomerConnected$;
  }

  get isManagerConnected$(): Observable<boolean> {
    return this.#isManagerConnected$;
  }

  get isUserConnected$(): Observable<boolean> {
    return this.#isUserConnected$;
  }

  ngOnInit(): void {
    this.#isCustomerConnected$ = this.userService.isCustomerConnected$;
    this.#isManagerConnected$ = this.userService.isManagerConnected$;
    this.#isUserConnected$ = combineLatest([this.#isCustomerConnected$, this.#isManagerConnected$]).pipe(
      map(([isCustomerConnected, isManagerConnected]) => isCustomerConnected || isManagerConnected)
    );
  }

  public onDisconnectButtonClick(): void {
    this.userService.disconnect();
    this.router.navigate(['home']);
  }

  public onCreateButtonClick(): void {
    this.router.navigate(['manager/add']);
  }
}
