import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistProductFormComponent } from './product/regist-product-form/regist-product-form.component';

const routes: Routes = [
  {path: '**', component: RegistProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
