import { Component, OnInit } from '@angular/core';
import { InstantMessagingService } from "app/instant-messaging.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  private username = '';
  private passWord = '';

  constructor(private service: InstantMessagingService) { }

  private send(): void {
    this.service.sendUsername(this.username);
    this.service.sendPassWord(this.passWord);
  }

}