import { Component, OnInit } from '@angular/core';
import { InstantMessagingService } from 'app/instant-messaging.service';

@Component({
  selector: 'app-message-list-velo',
  templateUrl: './message-list-velo.component.html',
  styleUrls: ['./message-list-velo.component.css']
})
export class MessageListVeloComponent implements OnInit {

  constructor(private service: InstantMessagingService) { }

  ngOnInit() {
  }

}
