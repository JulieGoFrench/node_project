import { Component, OnInit, Input } from '@angular/core';
import { InstantMessage } from 'app/instant-message';

@Component({
  selector: 'app-innstant-message-velo',
  templateUrl: './innstant-message-velo.component.html',
  styleUrls: ['./innstant-message-velo.component.css']
})
export class InnstantMessageVeloComponent implements OnInit {

  @Input()
  messageVelo: InstantMessage;

  ngOnInit() {
  }

}
