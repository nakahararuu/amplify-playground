import { Injectable } from '@angular/core';

import { Storage, API } from 'aws-amplify';
import { createProduct } from '../../graphql/mutations';
import { listProducts } from '../../graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  static async createProduct(productName: string, fileToUpload: File): Promise<void> {
    const fileName = 'product-image-1';
    await Storage.put(fileName, fileToUpload);
    const product = { name: 'Product 1', description: 'Black dress', price: 200, image: fileName };
    await API.graphql({ query: createProduct, variables: { input: product }});
  }

  static async listProductsWithImages(): Promise<void> {
    const productData = await API.graphql({ query: listProducts });
    // const products = await Promise.all(productData.data.listProducts.items.map(async product => {
    //   const image = await Storage.get(product.image);
    //   product.s3Image = image;
    //   return product;
    // }));
    console.log('products: ', productData);
  }

}
