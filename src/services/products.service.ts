import { Injectable, NotFoundException } from '@nestjs/common';
import {Product} from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product []= [{
    id: 1,
    name: 'Product 1',
    description: 'Description product',
    price: 200,
    image: '',
    stock: 12,
  }];

  findAll(){
    return this.products;
  }

  findOne(id: number){
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  create(payload: any){
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    return this.products.push(newProduct);
  }

  update(id: number, payload: any) {
    const productFound = this.findOne(id);

    if (productFound) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...productFound,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {

    const index = this.products.findIndex((item) => item.id === id);
    if(index === -1){
      throw new NotFoundException('Product not found');
    }
    this.products.splice(index, 1);
    return true;

  }
}
