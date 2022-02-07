import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './pages/clase/clase.component';
import { FamiliaComponent } from './pages/familia/familia.component';


const routes: Routes = [
  {
    path: 'pages/familia', component: FamiliaComponent
  },
  { path: 'pages/clase', component: ClaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
