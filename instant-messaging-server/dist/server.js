"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = require("websocket");
const http = require("http");
const client_1 = require("./client");
class Server {
    constructor(port) {
        this.clients = [];
        const server = this.createAndRunHttpServer(port);
        this.addWebSocketServer(server);
    }
    createAndRunHttpServer(port) {
        const server = http.createServer(function (request, response) {
            response.writeHead(404);
            response.end();
        });
        server.listen(port, function () {
            console.log((new Date()) + ' Server is listening on port ' + port);
        });
        return server;
    }
    addWebSocketServer(httpServer) {
        const webSocketServer = new websocket_1.server({
            httpServer: httpServer,
            autoAcceptConnections: false
        });
        webSocketServer.on('request', request => this.onWebSocketRequest(request));
    }
    onWebSocketRequest(request) {
        const connection = request.accept(null, request.origin);
        const client = new client_1.Client(this, connection);
        this.clients.push(client);
        /* ou this.clients.push(new Client(this, connection)); */
    }
    broadcastInstantMessage(content, author) {
        const date = new Date();
        for (const client of this.clients) {
            client.sendInstantMessage(content, author, date);
        }
    }
    removeClient(client) {
        this.clients.splice(this.clients.indexOf(client), 1);
    }
    userList() {
        const users = [];
        for (const client of this.clients) {
            if (client.username != null) {
                users.push(client.username);
            }
        }
        return users;
    }
    senduserlist() {
        for (const client of this.clients) {
            client.sendMessage('list-user-v', this.userList());
        }
    }
}
exports.Server = Server;
