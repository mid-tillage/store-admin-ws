import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimProductCatalog } from './entities/dim-product-catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DimProductCatalog])],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule { }
