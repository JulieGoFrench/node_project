import {connection as WebSocketConnection} from 'websocket';
import { Server } from "./server";


export class Client {

    private usernameRegex = /^[a-zA-Z0-9]*$/;
    private passWordRegex = /^[a-z]*$/;
    public username: string = null;
    public passWord: string = null;
    public salon: string;
   
    
    public getPassword(){
        return this.passWord; 
    }

       public constructor(private server: Server, private connection: WebSocketConnection) {
        connection.on('message', (message)=>this.onMessage(message.utf8Data));
        connection.on('close', ()=>server.removeClient(this));
    }    

    public sendMessage(type: string, data: any): void {
         const message = {type: type, data: data};
        this.connection.send(JSON.stringify(message));
    
    }

    public sendInstantMessage(content: string, author: string, date: Date) {
        const instantMessage = { content: content, author: author, date: date };
        this.sendMessage('instant_message', instantMessage);
    }
    private onInstantMessage(content): void {
        if (!(typeof 'content' === 'string')) return;
        if (this.username==null) return;
        this.server.broadcastInstantMessage(content, this.username);
        this.server.senduserlist();
    }



    private onPassWord  (passWord){        
        const testPW : string ='cci';    
        if (!(passWord === testPW)) return;     
        this.passWord = passWord;
        this.sendMessage('login','ok'); 
        }

    private onSalon(salon){      
        this.salon = salon;
        this.sendMessage('salon : ',salon); 
        
    }



    private onUsername(username) {      
        if (!(typeof 'username' === 'string')) return;       
        if (!this.usernameRegex.test(username)) return;     
        this.username = username;      
        
    }
    
    public image : Blob;

       
    private onImage(content): void {
        this.sendMessage('image',Image); 
    }
    private onMessage(utf8Data: string): void {
        const message = JSON.parse(utf8Data);
        switch (message.type) {
            case 'instant_message': this.onInstantMessage(message.data); break;
            case 'username': this.onUsername(message.data); break;
             case 'passWord': this.onPassWord(message.data); break;
            case 'image' : this.onImage(message.data); break;
            }
        }
    

}