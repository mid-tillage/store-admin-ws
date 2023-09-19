import { Injectable, Logger } from '@nestjs/common';
import { CreateProductOnSaleDto } from './dto/create-product-on-sale.dto';
import { UpdateProductOnSaleDto } from './dto/update-product-on-sale.dto';
import { FactProductOnSale } from './entities/fact-product-on-sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductOnSaleService {
  private readonly logger: Logger = new Logger(ProductOnSaleService.name);

  constructor(
    @InjectRepository(FactProductOnSale)
    private productOnSaleService: Repository<FactProductOnSale>,
  ) { }

  create(createProductOnSaleDto: CreateProductOnSaleDto) {
    this.logger.log('This action adds a new productOnSale');
    return this.productOnSaleService.save(createProductOnSaleDto);
  }

  findAll() {
    this.logger.log(`This action returns all productOnSale`);
    return this.productOnSaleService.find({
      relations: [ 'product' ]
    });
  }

  findOne(id: number) {
    this.logger.log(`This action returns a #${id} productOnSale`);
    return this.productOnSaleService.findOneBy({ idProductOnSale: id });
  }

  update(id: number, updateProductOnSaleDto: UpdateProductOnSaleDto) {
    this.logger.log(`This action updates a #${id} productOnSale`);
    return this.productOnSaleService.update({ idProductOnSale: id }, updateProductOnSaleDto);
  }

  async remove(id: number) {
    this.logger.log(`This action removes a #${id} productOnSale`);
    const productOnSale: FactProductOnSale = await this.productOnSaleService.findOneBy({ idProductOnSale: id });
    return this.productOnSaleService.remove(productOnSale);
  }
}
