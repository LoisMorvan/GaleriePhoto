import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileEnum } from 'src/app/core/enums/user-profile.enum';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private userService: UserService) { }

  public onChoose(choice: string): void {
    let choiceEnum;
    let route;
    if (choice === UserProfileEnum.CLIENT.toString()) {
      choiceEnum = UserProfileEnum.CLIENT;
      route = 'galerie';
    }
    if (choice === UserProfileEnum.OWNER.toString()) {
      choiceEnum = UserProfileEnum.OWNER;
      route = 'manager';
    }
    if (choiceEnum && route) {
      this.userService.connect(choiceEnum);
      this.router.navigate([route]);
    } else {
      console.error('Une erreur est survenue');
    }
  }
}
