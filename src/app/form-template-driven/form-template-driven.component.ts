import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { InfoData } from '../applicantInfo';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
  public fullname: string;
  public inputEmail: string;
  public tempGender: string;
  submitted: boolean;
  public templatedatainfo: InfoData;

  // Data: any[]=[];
  // reactiveForm = this.fb.group({
  //   firstname: ['', Validators.required],
  // });

  // constructor(private fb: FormBuilder) { }
  constructor() {
    this.templatedatainfo = new InfoData;
   }

  ngOnInit() {
  }

  // onSubmit(){
  //    this.templatedatainfo.name = this.fullname;
  //    this.templatedatainfo.email = this.inputEmail;
  //    this.templatedatainfo.gender = this.tempGender;
  //   //  this.Data.push(this.templatedatainfo);
  //    this.bool = true;
  //   console.log(this.templatedatainfo.name,this.templatedatainfo.email,this.templatedatainfo.gender);
  // }
}
