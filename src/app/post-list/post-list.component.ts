import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  // @Input() postListTitle: string = '';
  // @Input() postIsLogin: boolean = false;
  childMessage: string = 'This is a child message';
  postCount: number = 0;

  parentMessage: string = 'Message from the child using click event';

  // EventEmitter: data binding. When the event triggered, the receiver function
  // is called.
  @Output() MessageEvent = new EventEmitter();

  sendMessage() {
    console.log('button clicked');
    this.MessageEvent.emit(this.parentMessage);
  }
}
