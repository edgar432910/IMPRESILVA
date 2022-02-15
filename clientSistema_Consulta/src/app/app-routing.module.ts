import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseEdicionComponent } from './pages/clase/clase-edicion/clase-edicion.component';
import { ClaseComponent } from './pages/clase/clase.component';
// import { FamiliaEdicionComponent } from './pages/familia/familia-edicion/familia-edicion.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { MarcavehiculoComponent } from './pages/marcavehiculo/marcavehiculo.component';
import { UnidadComponent } from './pages/unidad/unidad.component';


const routes: Routes = [
  {
    path: 'pages/familia', component: FamiliaComponent, 
    // children:[
    //   // {path:'nuevo', component:FamiliaEdicionComponent },
    //   // {path:'edicion/:id', component:FamiliaEdicionComponent }

    // ]
  },{
    path: 'pages/marca', component: MarcaComponent, 
    // children:[
    //   // {path:'nuevo', component:FamiliaEdicionComponent },
    //   // {path:'edicion/:id', component:FamiliaEdicionComponent }

    // ]
  },{
    path: 'pages/marcaVehiculo', component: MarcavehiculoComponent, 
    // children:[
    //   // {path:'nuevo', component:FamiliaEdicionComponent },
    //   // {path:'edicion/:id', component:FamiliaEdicionComponent }

    // ]
  },{
    path: 'pages/unidad', component: UnidadComponent, 
    // children:[
    //   // {path:'nuevo', component:FamiliaEdicionComponent },
    //   // {path:'edicion/:id', component:FamiliaEdicionComponent }

    // ]
  },
  { path: 'pages/clase', component: ClaseComponent,children:[
    {path:'nuevo', component:ClaseEdicionComponent },
    {path:'edicion/:id', component:ClaseEdicionComponent }

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
