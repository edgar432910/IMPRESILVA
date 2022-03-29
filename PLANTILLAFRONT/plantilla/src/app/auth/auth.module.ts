import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/Material/material.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
        
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
        
    LoginComponent,
    RegisterComponent,
  
    MaterialModule,
    PagesRoutingModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ]
})
export class AuthModule { }
