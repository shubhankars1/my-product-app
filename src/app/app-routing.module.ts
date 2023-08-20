import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {
    path:'',
    component:DefaultComponent
  },
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path:'home',
    loadChildren: () => import ('./home/home.module').then (m => m.HomeModule)
  },
  {
    path:'product',
    loadChildren: () => import ('./product/product.module').then (m => m.ProductModule)
  },
  {
    path:'**',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
