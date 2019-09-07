import { Component, OnInit } from '@angular/core';
import { InstantMessage } from 'app/instant-message';
import { InstantMessagingService } from 'app/instant-messaging.service';

@Component({
  selector: 'app-velos',
  templateUrl: './velos.component.html',
  styleUrls: ['./velos.component.css']
})
export class VelosComponent {
  private passWordVelos = '';

  constructor(private service: InstantMessagingService) { }
 
}
