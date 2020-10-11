import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegistProductFormComponent } from './regist-product-form/regist-product-form.component';

@NgModule({
  declarations: [RegistProductFormComponent],
  exports: [RegistProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
