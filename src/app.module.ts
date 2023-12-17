import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CatalogModule } from './catalog/catalog.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ProductOnSaleModule } from './product-on-sale/product-on-sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EngineService } from './shared/engine/engine.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    ProductModule, CatalogModule, EnterpriseModule, ProductOnSaleModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA,
      synchronize: false,
      logging: process.env.DB_LOGGING === 'true',
      autoLoadEntities: true,
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })],
  controllers: [AppController],
  providers: [AppService, EngineService],
})
export class AppModule { }
