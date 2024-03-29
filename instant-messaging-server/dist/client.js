"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(server, connection) {
        this.server = server;
        this.connection = connection;
        this.usernameRegex = /^[a-zA-Z0-9]*$/;
        this.passWordRegex = /^[a-z]*$/;
        this.username = null;
        this.passWord = null;
        connection.on('message', (message) => this.onMessage(message.utf8Data));
        connection.on('close', () => server.removeClient(this));
    }
    getPassword() {
        return this.passWord;
    }
    sendMessage(type, data) {
        const message = { type: type, data: data };
        this.connection.send(JSON.stringify(message));
    }
    sendInstantMessage(content, author, date) {
        const instantMessage = { content: content, author: author, date: date };
        this.sendMessage('instant_message', instantMessage);
    }
    onInstantMessage(content) {
        if (!(typeof 'content' === 'string'))
            return;
        if (this.username == null)
            return;
        this.server.broadcastInstantMessage(content, this.username);
        this.server.senduserlist();
    }
    onPassWord(passWord) {
        const testPW = 'cci';
        if (!(passWord === testPW))
            return;
        this.passWord = passWord;
        this.sendMessage('login', 'ok');
    }
    onSalon(salon) {
        this.salon = salon;
        this.sendMessage('salon : ', salon);
    }
    onUsername(username) {
        if (!(typeof 'username' === 'string'))
            return;
        if (!this.usernameRegex.test(username))
            return;
        this.username = username;
    }
    onImage(content) {
        this.sendMessage('image', Image);
    }
    onMessage(utf8Data) {
        const message = JSON.parse(utf8Data);
        switch (message.type) {
            case 'instant_message':
                this.onInstantMessage(message.data);
                break;
            case 'username':
                this.onUsername(message.data);
                break;
            case 'passWord':
                this.onPassWord(message.data);
                break;
            case 'image':
                this.onImage(message.data);
                break;
        }
    }
}
exports.Client = Client;
