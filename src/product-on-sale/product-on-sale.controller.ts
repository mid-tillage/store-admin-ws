import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductOnSaleService } from './product-on-sale.service';
import { CreateProductOnSaleDto } from './dto/create-product-on-sale.dto';
import { UpdateProductOnSaleDto } from './dto/update-product-on-sale.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('product-on-sale')
export class ProductOnSaleController {
  constructor(private readonly productOnSaleService: ProductOnSaleService) { }

  @Post()
  @ApiBody({ type: [CreateProductOnSaleDto] })
  create(@Body() createProductOnSaleDto: CreateProductOnSaleDto) {
    return this.productOnSaleService.create(createProductOnSaleDto);
  }

  @Get()
  findAll() {
    return this.productOnSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productOnSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductOnSaleDto: UpdateProductOnSaleDto) {
    return this.productOnSaleService.update(+id, updateProductOnSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productOnSaleService.remove(+id);
  }
}
