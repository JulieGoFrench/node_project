import { Component } from '@angular/core';
import { InstantMessage } from './instant-message';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private messages: InstantMessage[] = [];


  private sendMessage(content: string) {
    const message = new InstantMessage(content, 'Bob', new Date());
    this.messages.push(message);
  }
  lienImage: string = '../assets/header.jpg';
  


}