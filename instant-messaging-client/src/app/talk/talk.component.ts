import { Component, OnInit } from '@angular/core';
import { InstantMessage } from '../instant-message';
import { InstantMessagingService } from 'app/instant-messaging.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  constructor(private service: InstantMessagingService) { }

  private messages: InstantMessage[] = [];

  private sendMessage(content: string) {
    const message = new InstantMessage(content, 'Bob', new Date());
    this.messages.push(message);
  }

  ngOnInit() {
  }

}
