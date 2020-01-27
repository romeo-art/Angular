import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { HistoryComponent } from './History/history';
import { CliBindingComponent } from './cli-binding/cli-binding.component';
import { MotherComponent } from './mother/mother.component';
import { ChildComponent } from './child/child.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ResultComponent } from './result/result.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormDataDrivenComponent } from './form-data-driven/form-data-driven.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    HistoryComponent,
    CliBindingComponent,
    MotherComponent,
    ChildComponent,
    EnrollComponent,
    ResultComponent,
    FormTemplateDrivenComponent,
    FormDataDrivenComponent,
    RegisterationFormComponent,
    EditFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
