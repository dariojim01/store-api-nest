import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

  @Get()
  getCustomers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    ){
    return `customer limit is: ${limit} and offset is: ${offset}`;
  }

  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string){
    return `customer ${customerId}`;
  }

}
