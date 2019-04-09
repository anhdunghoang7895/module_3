import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { LoginComponent } from './login/login.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
     AppComponent,
     TemplateDrivenFormComponent,
     RegisterComponent,
     TodoAppComponent,
     LoginComponent,
     ViewDetailComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
      RouterModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }