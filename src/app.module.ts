import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CatalogModule } from './catalog/catalog.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ProductOnSaleModule } from './product-on-sale/product-on-sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, CatalogModule, EnterpriseModule, ProductOnSaleModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'tienda-juegos-db',
    schema: 'commerce',
    synchronize: false,
    logging: true,
    autoLoadEntities: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
