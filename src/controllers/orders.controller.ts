import { Controller, Get, Param, Body, Post, Query} from '@nestjs/common';

@Controller('orders')
export class OrdersController {

  @Get()
  getOrders(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    ){
    return `order limit is: ${limit} and offset is: ${offset}`;
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string){
    return `order ${orderId}`;
  }


  @Post()
  createOrder(@Body() payload: any){
    return {
      message: 'action for create',
      payload,
    }
  }
}
