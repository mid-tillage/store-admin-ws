import { Module } from '@nestjs/common';
import { ProductOnSaleService } from './product-on-sale.service';
import { ProductOnSaleController } from './product-on-sale.controller';
import { FactProductOnSale } from 'src/product-on-sale/entities/fact-product-on-sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FactProductOnSale])],
  controllers: [ProductOnSaleController],
  providers: [ProductOnSaleService],
})
export class ProductOnSaleModule {}
