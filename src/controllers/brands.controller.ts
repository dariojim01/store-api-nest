import { Controller } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

  @Get()
  getBrands(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    ){
    return `brand limit is: ${limit} and offset is: ${offset}`;
  }

  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string){
    return `Brand ${brandId}`;
  }
}
