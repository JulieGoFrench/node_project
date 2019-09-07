import { Component, OnInit } from '@angular/core';
import { SalonComponent } from 'app/salon/salon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-salons',
  templateUrl: './list-salons.component.html',
  styleUrls: ['./list-salons.component.css']
})
export class ListSalonsComponent implements OnInit {
  //, new SalonComponent("salon2")
  public salons : SalonComponent[]=[]; 
  public name : string;
  
  constructor() {
    this.salons.push(new SalonComponent("chatroom")); 
    this.salons.push(new SalonComponent("velo")); 
    this.salons.push(new SalonComponent("chiens")); 
  
  }


  ngOnInit() {
  }

}
