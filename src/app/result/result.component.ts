import { Component, OnInit, Input, Output, EventEmitter, ApplicationInitStatus } from '@angular/core';
import { ApplicantInfo } from '../applicantInfo';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() applicantInfo: ApplicantInfo; //name, gender, enrolled
  @Output() childEvent = new EventEmitter();
  @Output() declinedEvent = new EventEmitter();

  approved = 'Application was approved!';
  declined = 'Application was declined!';

  applicant: any[]=[];
  toDeclined: any[]=[];

  constructor() {
  }
  ngOnInit() {
  }

  onApproved(value: string) {
    this.childEvent.emit(value);
    this.applicant.push(this.applicantInfo);
    
  }

  onDeclined(value: string) {
    this.childEvent.emit(value);
    this.toDeclined.push(this.applicantInfo);
    this.declinedEvent.emit(this.toDeclined);
  }
}

