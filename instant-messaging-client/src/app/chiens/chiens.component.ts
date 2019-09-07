import { Component, OnInit } from '@angular/core';
import { InstantMessage } from 'app/instant-message';
import { InstantMessagingService } from 'app/instant-messaging.service';
@Component({
  selector: 'app-chiens',
  templateUrl: './chiens.component.html',
  styleUrls: ['./chiens.component.css']
})
export class ChiensComponent implements OnInit {

  constructor(private service: InstantMessagingService) { }

  ngOnInit() {
  }

}
