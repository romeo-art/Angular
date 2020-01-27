import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css']
})
export class MotherComponent implements OnInit {
  public pdata: String;
  public tempdata: String;
  // public cdata: String;

  constructor() { }

  ngOnInit() {
  }

  sent(){
    this.pdata=this.tempdata;
  }

}
