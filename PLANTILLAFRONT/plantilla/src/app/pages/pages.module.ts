import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FamiliaComponent } from './familia/familia.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { TablejsComponent } from './tablejs/tablejs.component';
import { MaterialModule } from '../shared/Material/material.module';
import { ClaseComponent } from './clase/clase.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FamiliaComponent,
    PagesComponent,
    TablejsComponent,
    ClaseComponent,
    UsuarioComponent
  ],
  exports:[
    DashboardComponent,
    FamiliaComponent,
    PagesComponent,
    TablejsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
