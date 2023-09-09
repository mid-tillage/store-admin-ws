import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimProduct } from './entities/dim-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DimProduct])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
