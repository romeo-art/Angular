import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParent: String;
  @Output() childEvent= new EventEmitter();
  public cdata: String;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: String){
    this.childEvent.emit(value);
  }

}
