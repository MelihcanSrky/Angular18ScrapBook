import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, FormsModule, NgIf, NgFor, NgTemplateOutlet],
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

  users: Array<string> = ['John', 'Sam', 'Smith', 'Melih'];
  usersObj: Array<any> = [
    { id: 1, name: 'Melih' },
    { id: 2, name: 'Can' },
    { id: 3, name: 'Sari' },
    { id: 4, name: 'Kaya' },
  ];

  addNewUser() {
    let user = {
      id: 5,
      name: 'User 1'
    };
    this.usersObj.push(user);
  }

  onDelete(index: number) {
    this.usersObj.splice(index, 1);
  }
}
