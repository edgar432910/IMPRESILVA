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

export const routes: Routes = [
 
  {
    path: 'familia', component: FamiliaComponent, 
  
  },{
    path: 'marca', component: MarcaComponent, 
   
  },{
    path: 'marcavehiculo', component: MarcavehiculoComponent, 
  
  },{
    path: 'unidad', component: UnidadComponent, 
  
  },
  {
    path: 'proveedor', component: ProveedorComponent, 
  
  },
  {
    path: 'producto', component: ProductoComponent, 
    
  },
  { path: 'clase', component: ClaseComponent },
  { path: 'inicio', component: InicioComponent },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule{}