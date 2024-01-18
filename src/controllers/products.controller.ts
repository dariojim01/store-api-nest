import { Controller, Param, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
    ){
    return `product limit is: ${limit} and offset is: ${offset} and brand is: ${brand}`;
  }


  @Get('filter')
  getProductFilter(){
    return `i am to filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string){
    return `product ${productId}`;
  }
}
