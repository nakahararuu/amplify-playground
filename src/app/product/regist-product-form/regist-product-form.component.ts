import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-regist-product-form',
  templateUrl: './regist-product-form.component.html',
  styleUrls: ['./regist-product-form.component.scss']
})
export class RegistProductFormComponent implements OnInit {

  productName = new FormControl('');

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    ProductService.listProductsWithImages();
  }

  handleFileInput(files: FileList): void {
    const fileToUpload = files.item(0);
    ProductService.createProduct(this.productName.value, fileToUpload);
  }

}
