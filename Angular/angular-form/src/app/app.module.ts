import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
     AppComponent,
     TemplateDrivenFormComponent,
     RegisterComponent,
     TodoAppComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }