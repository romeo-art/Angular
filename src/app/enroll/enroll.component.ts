import { Component, OnInit } from '@angular/core';
import {ApplicantInfo} from '../applicantInfo';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  public tempName: string;
  public tempEnrolled: boolean=false;
  public tempGender: string;
  public applicantInfo: ApplicantInfo;

  name: string;
  enroll: boolean;
  gender: string;
  

  students: any[] = [
  {
    'name':'Romeo Lenizo',
  },
  {
    'name':'Joseph Candido',
  },
  ];

  constructor() {
    this.applicantInfo=new ApplicantInfo();
  }

  ngOnInit() {
  }

  addToForm(){
    this.applicantInfo = {
      name:this.tempName,
      gender:this.tempGender,
      enrolled:this.tempEnrolled ? 'Yes' : 'No',

    }
   
  }

  checked(){
    this.tempEnrolled=!this.tempEnrolled;
  }

}
