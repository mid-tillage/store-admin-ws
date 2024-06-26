import { Module } from '@nestjs/common';
import { ProductOnSaleService } from './product-on-sale.service';
import { ProductOnSaleController } from './product-on-sale.controller';
import { FactProductOnSale } from './entities/fact-product-on-sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineService } from 'src/shared/engine/engine.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forFeature([FactProductOnSale]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })],
  controllers: [ProductOnSaleController],
  providers: [ProductOnSaleService, EngineService],
})
export class ProductOnSaleModule { }
