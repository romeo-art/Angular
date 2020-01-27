import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<h1>This is a beautiful island of Cebu..<br>Go and Enjoy!!!!</h1>
  <p>This isa fksadfjsda;lfjka</p>`,
  styles: ['h1{color:blue; text-align:center; background-color:yellowgreen}']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
