import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  name: string;
  public link : RouterLink; 
  constructor(name:string) {this.name=name;}

  ngOnInit() {
  }

}
