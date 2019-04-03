import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
declarations: [
AppComponent,
CalculatorComponent,
ProfileComponent,
FontSizeComponent,
PetInfoComponent,
ColorPickerComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
