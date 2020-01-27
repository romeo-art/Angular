import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.css']
})
export class FormDataDrivenComponent implements OnInit {
  myData : String;
  
  reactiveForm = this.data.group({
    myFname: ['', [Validators.required, Validators.minLength(4)]],
    myLname: ['', Validators.required],
    myEmail: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    myStreet: ['', Validators.required],
    myCity: ['', Validators.required],
    myState: ['', Validators.required],
    myZipCode: ['', Validators.required],
  })
  constructor(private data: FormBuilder) { 
  
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Ok")
    this.myData = (JSON.stringify(this.reactiveForm.value));
  }

}
