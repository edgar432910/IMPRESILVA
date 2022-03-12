import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProveedorComponent } from './proveedor/proveedor.component';
import { FamiliaComponent } from './familia/familia.component';
import { ClaseComponent } from './clase/clase.component';
import { MarcaComponent } from './marca/marca.component';
import { InicioComponent } from './inicio/inicio.component';
import { UnidadComponent } from './unidad/unidad.component';
import { MarcavehiculoComponent } from './marcavehiculo/marcavehiculo.component';
import { ProductoComponent } from './producto/producto.component';
import { ClaseEdicionComponent } from './clase/clase-edicion/clase-edicion.component';
import { FamiliaDialogoComponent } from './familia/familia-dialogo/familia-dialogo.component';
import { ClaseDialogoComponent } from './clase/clase-dialogo/clase-dialogo.component';
import { MarcaDialogoComponent } from './marca/marca-dialogo/marca-dialogo.component';
import { UnidadDialogoComponent } from './unidad/unidad-dialogo/unidad-dialogo.component';
import { MarcavehiculoDialogoComponent } from './marcavehiculo/marcavehiculo-dialogo/marcavehiculo-dialogo.component';
import { ProveedorDialogoComponent } from './proveedor/proveedor-dialogo/proveedor-dialogo.component';
import { ProductoDialogoComponent } from './producto/producto-dialogo/producto-dialogo.component';
import { SearchComponent } from './producto/search/search.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProveedorComponent,
    FamiliaComponent,
    ClaseComponent,
    MarcaComponent,
    UnidadComponent,
    MarcavehiculoComponent,
    ProductoComponent,
    ClaseEdicionComponent,
    FamiliaDialogoComponent,
    ClaseDialogoComponent,
    MarcaDialogoComponent,
    UnidadDialogoComponent,
    MarcavehiculoDialogoComponent,
    ProveedorDialogoComponent,
    ProductoDialogoComponent,
    SearchComponent,
    InicioComponent,
    LayoutComponent
    
    
  ],
  imports: [
        
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    
  
  ],
  providers: [],
  bootstrap: [],
  exports:[],
})
export class PagesModule { }
