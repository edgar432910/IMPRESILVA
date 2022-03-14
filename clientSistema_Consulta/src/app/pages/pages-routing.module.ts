import { Routes, RouterModule } from '@angular/router';
import { FamiliaComponent } from './familia/familia.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcavehiculoComponent } from './marcavehiculo/marcavehiculo.component';
import { UnidadComponent } from './unidad/unidad.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { ClaseComponent } from './clase/clase.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { GuardService } from '../_service/guard.service';
import { Not403Component } from './not403/not403.component';

export const routes: Routes = [
 
  {
    path: 'familia', component: FamiliaComponent, 
    canActivate:[GuardService]
  },{
    path: 'marca', component: MarcaComponent, 
    canActivate:[GuardService]
  },{
    path: 'marcavehiculo', component: MarcavehiculoComponent, 
    canActivate:[GuardService]
  },{
    path: 'unidad', component: UnidadComponent, 
    canActivate:[GuardService]
  },
  {
    path: 'proveedor', component: ProveedorComponent, 
    canActivate:[GuardService]
  },
  {
    path: 'producto', component: ProductoComponent, 
    canActivate:[GuardService]
  },
  { path: 'clase', component: ClaseComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'not-403', component: Not403Component },

]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule{}