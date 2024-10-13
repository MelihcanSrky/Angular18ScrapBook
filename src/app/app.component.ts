import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    HeaderComponent,
    PostListComponent,
    CardComponent,
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
export class AppComponent implements AfterViewInit {
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
  // isLoggedIn: boolean = true;
  //
  // appPostTitle: string = 'Post 1';
  // appIsLogin: boolean = false;
  @ViewChild(PostListComponent) postList: any;
  message: string = '';
  messageFromChild: string = '';

  ngAfterViewInit(): void {
    console.log(this.postList);
    this.message = this.postList.childMessage;
  }

  receiveMessage(message: string) {
    console.log(message);
    this.messageFromChild = message;
  }
}
