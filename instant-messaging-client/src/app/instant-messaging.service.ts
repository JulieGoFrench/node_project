import { Injectable } from '@angular/core';
import { InstantMessage } from './instant-message';


@Injectable()
export class InstantMessagingService {
  private messages: InstantMessage[] = [];
  public lastt: InstantMessage;
  private userls: string[] = [];
  private passWordVelos : string;

  private menu : string[]; 
  private socket: WebSocket;
  private logged: boolean;
  private loggedVelos: boolean;
  private messagesVelos : InstantMessage[] = [];
  

  public onMenu(menu : string[]) {
    this.menu = menu;
  }

  public sendMenu (menu : string[]){    
    this.sendMessage('menu',menu );
  
   }

  private onInstantMessage(message: InstantMessage) {
       this.messages.push(message);      

  }

  public constructor() {
    this.logged = false;
    this.loggedVelos=false;
    this.socket = new WebSocket('ws:/localhost:4201');
    this.socket.onmessage =
      (event: MessageEvent) => this.onMessage(event.data);
  }
  private onLogin() {
    this.logged = true;
    
  }


  //public isLoggedVelo(): boolean {
    /**  if (passWordVelos == 'velo') 
      return true; 
   else return false; */
    //return this.logged;
  //}

  

  private onlist(userList: string[]){
    this.userls = userList;
  }
  
  private onMessage(data: string) {
    const message = JSON.parse(data);
    switch (message.type) {
      case 'instant_message': this.onInstantMessage(message.data); break;
      case 'login': this.onLogin(); break;  
      case 'list-user-v': this.onlist(message.data); break;   
     // case 'image_client': this.onImage(message.data); break;   
    }
  }

// images fonctions
public image : Blob; 
public sendImage (image : Blob){    
  this.sendMessage('image_client',image );

 }
 public onImage(image : Blob){
   this.image = image; 
 }

  //
  public isLogged(): boolean {
    return this.logged;
  }

  private chekcPassWordVelos () : boolean{
    if (this.passWordVelos == 'velo') 
    return true; 
    else return false; 
  }


  public isNotlogged(): boolean {
    return  this.logged = false;
  }

  public sendPassWord(passWord: string) {
  this.sendMessage('passWord', passWord);
  }


  public sendUsername(username: string) {
    this.sendMessage('username', username);
  }

  public  getMessages(): InstantMessage[] {
    return this.messages;
  }
  public  getMessagesVelos(): InstantMessage[] {
    return this.messagesVelos;
  }

  public  getUserls(): string[] {
   
    return this.userls;
  }

  public sendMessage(type: string, data: any) {
    const message = {type: type, data: data};
    this.socket.send(JSON.stringify(message));
  }

  public sendMessageVelos(type: string, data: InstantMessage) {
    const messageVelo= {type: type, data: data};
    this.socket.send(JSON.stringify(messageVelo));
  }

  public sendInstantMessage(content: string) {
    this.sendMessage('instant_message', content);
  }
}