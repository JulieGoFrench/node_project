import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { InstantMessageComponent } from './instant-message/instant-message.component';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { InstantMessagingService } from './instant-messaging.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { AutoScrollDirective } from './auto-scroll.directive';
import { ListUserComponent } from './list-user/list-user.component';
import { TalkComponent } from './talk/talk.component';
import { VelosComponent } from './velos/velos.component';
import { ListSalonsComponent } from './list-salons/list-salons.component';
import { SalonComponent } from './salon/salon.component';
import { CanardComponent } from './canard/canard.component';
import { ChiensComponent } from './chiens/chiens.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageListVelosComponent } from './message-list-velos/message-list-velos.component';

import { MessageListVeloComponent } from './message-list-velo/message-list-velo.component';


const appRoutes: Routes = [

  { path: 'talk1', component: TalkComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: DashboardComponent }, 
  { path: 'velos', component: VelosComponent }, 
  { path: 'list-salons', component: ListSalonsComponent }, 
  { path: 'chiens', component: ChiensComponent }, 
  { path: 'salon', component: SalonComponent }, 
  
];


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    InstantMessageComponent,
    NewMessageFormComponent,
    LoginFormComponent,
    AutoScrollDirective,
    ListUserComponent,
    TalkComponent,
     VelosComponent,
    ListSalonsComponent,
    SalonComponent,
    CanardComponent,
    ChiensComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    MessageListVelosComponent,
     MessageListVeloComponent,
    
           
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InstantMessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
