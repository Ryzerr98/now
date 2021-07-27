import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './items/beverages/beverages.component';
import { BurgersComponent } from './items/burgers/burgers.component';
import { DessertsComponent } from './items/desserts/desserts.component';
import { SaladsComponent } from './items/salads/salads.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: 'item',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'burgers', component: BurgersComponent
  },
  {
    path: 'salads', component: SaladsComponent
  },
  {
    path: 'desserts', component: DessertsComponent
  },
  {
    path: 'beverages', component: BeveragesComponent
  },
  {
    path: 'login', component: LoginComponent
  }
  // {
  //   path: 'burgers',
  //   loadChildren: './items/items.module'
  // },
  // {
  //   path: 'salads',
  //   loadChildren: './items/items.module'
  // },
  // {
  //   path: 'desserts',
  //   loadChildren: './items/items.module'
  // },
  // {
  //   path: 'beverages',
  //   loadChildren: './items/items.module'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
