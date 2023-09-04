import { Test, TestingModule } from '@nestjs/testing';
import { ProductOnSaleController } from './product-on-sale.controller';
import { ProductOnSaleService } from './product-on-sale.service';

describe('ProductOnSaleController', () => {
  let controller: ProductOnSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductOnSaleController],
      providers: [ProductOnSaleService],
    }).compile();

    controller = module.get<ProductOnSaleController>(ProductOnSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
