import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    FormsModule,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    NgSwitch,
    NgSwitchCase,
    NgStyle,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // isLoggedIn: boolean = false;
  // username: string = 'John Doe';
  //
  // isAdmin: boolean = false;
  // isMember: boolean = false;
  // isGuest: boolean = true;
  //
  // loginCount: number = 0;
  //
  // countLoginAttempts() {
  //   this.loginCount++;
  //   console.log(this.loginCount);
  // }

  // users: Array<string> = ['John', 'Sam', 'Smith', 'Melih'];
  // usersObj: Array<any> = [];
  //
  // constructor() {
  //   console.log(this.usersObj.length);
  // }
  //
  // addNewUser() {
  //   let user = {
  //     id: 5,
  //     name: 'User 1'
  //   };
  //   this.usersObj.push(user);
  // }
  //
  // onDelete(index: number) {
  //   this.usersObj.splice(index, 1);
  // }
  //
  // usersRole: string = 'Admin';
  isLoggedIn: boolean = true;
}
