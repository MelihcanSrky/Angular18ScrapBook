import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {

  constructor() {
    console.log('Constructor methos is called');
    console.log(this.pUsername);
  }

  ngOnInit() {
    console.log("OnInit Hook triggired");
    console.log(this.pUsername);
  }

  ngOnChanges() {
    console.log("OnChanges triggired");
  }

  ngDoCheck() {
    console.log("DoCheck triggired");
  }

  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  @Input() pUsername: string = '';
}

// OnChanges calls after input variable reference changes.
// but DoCheck calls after every change detection happened.
