import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListedProductComponent } from './components/listed-product/listed-product.component';

const routes: Routes = [
  { path: '', component: ListedProductComponent },
  { path: 'create-product', component: CreateProductComponent},
  { path: 'edit-product/:id', component: CreateProductComponent},
  { path: '**', redirectTo: '',  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
