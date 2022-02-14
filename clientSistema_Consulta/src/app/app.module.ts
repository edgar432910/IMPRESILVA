import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { UnidadComponent } from './pages/unidad/unidad.component';
import { MarcavehiculoComponent } from './pages/marcavehiculo/marcavehiculo.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { ClaseEdicionComponent } from './pages/clase/clase-edicion/clase-edicion.component';
import { FamiliaDialogoComponent } from './pages/familia/familia-dialogo/familia-dialogo.component';
import { ClaseDialogoComponent } from './pages/clase/clase-dialogo/clase-dialogo.component';
import { MarcaDialogoComponent } from './pages/marca/marca-dialogo/marca-dialogo.component';
import { UnidadDialogoComponent } from './pages/unidad/unidad-dialogo/unidad-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
