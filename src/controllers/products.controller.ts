import { Controller,
  Param,
  Get,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode
 } from '@nestjs/common';
import { AnyARecord } from 'dns';
import { ProductsService } from 'src/services/products.service';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';


@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
    ){
    //return {
    //  message: `product limit is: ${limit} and offset is: ${offset} and brand is: ${brand}`,
    //};
    return this.productService.findAll();
  }


  @Get('filter')
  getProductFilter(){
    return `i am to filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string){
    //return {
     // message:`product ${productId}`,

    //};
    return this.productService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto){
    //return {
    //  message: 'action for create',
    //  payload,
    //};
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto){
    //return {
     // id,
     // payload
   // };

   return this.productService.update(+id, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string){
    return this.productService.delete(+productId);
  }
}
