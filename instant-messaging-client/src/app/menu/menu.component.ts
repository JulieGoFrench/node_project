import { Component, OnInit } from '@angular/core';
import { InstantMessagingService } from 'app/instant-messaging.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: InstantMessagingService) { }

  ngOnInit() {
  }

}
