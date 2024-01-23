import { Controller, Get, Param, Body, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string){
    return `product ${productId} and ${id}`;
  }

  @Post()
  createCategory(@Body() payload: any){
    return {
      message: 'action for create',
      payload,
    }
  }

}
