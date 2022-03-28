import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FamiliaComponent } from './familia/familia.component';
import { TablejsComponent } from './tablejs/tablejs.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:{ titulo:'Dashboard'} },
      { path: 'familia', component: FamiliaComponent, data:{ titulo:'Familia'} },
      { path: 'table', component: TablejsComponent, data:{ titulo:'Table'} },
    ]
  },
]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [

  ]
})
export class PagesRoutingModule { }
