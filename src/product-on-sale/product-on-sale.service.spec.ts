import { Test, TestingModule } from '@nestjs/testing';
import { ProductOnSaleService } from './product-on-sale.service';

describe('ProductOnSaleService', () => {
  let service: ProductOnSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductOnSaleService],
    }).compile();

    service = module.get<ProductOnSaleService>(ProductOnSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
