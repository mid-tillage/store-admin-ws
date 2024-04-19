import { Injectable, Logger } from '@nestjs/common';
import { CreateProductOnSaleDto } from './dto/create-product-on-sale.dto';
import { UpdateProductOnSaleDto } from './dto/update-product-on-sale.dto';
import { FactProductOnSale } from './entities/fact-product-on-sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EngineService } from 'src/shared/engine/engine.service';

@Injectable()
export class ProductOnSaleService {
  private readonly logger: Logger = new Logger(ProductOnSaleService.name);

  constructor(
    @InjectRepository(FactProductOnSale)
    private productOnSaleRepository: Repository<FactProductOnSale>,
    private readonly engineService: EngineService
  ) { }

  create(createProductOnSaleDto: CreateProductOnSaleDto) {
    this.logger.log(`This action adds a new productOnSale:  ${JSON.stringify(createProductOnSaleDto)}`);
    this.engineService.sendProductOnSale(createProductOnSaleDto).subscribe({
      next: this.logger.log,
      error: this.logger.error,
      complete: () => this.logger.debug('sendProductOnSale to engine complete.')
    });
    // return this.productOnSaleService.save(createProductOnSaleDto);
  }

  findAll() {
    this.logger.log(`This action returns all productOnSale`);
    return this.productOnSaleRepository.find({
      relations: ['product']
    });
  }

  findOne(id: number) {
    this.logger.log(`This action returns a #${id} productOnSale`);
    return this.productOnSaleRepository.findOne({
      where: { idProductOnSale: id },
      relations: ['product', 'catalog']
    });
  }

  update(id: number, updateProductOnSaleDto: UpdateProductOnSaleDto) {
    this.logger.log(`This action updates a #${id} productOnSale`);
    return this.productOnSaleRepository.update({ idProductOnSale: id }, updateProductOnSaleDto);
  }

  async remove(id: number) {
    this.logger.log(`This action removes a #${id} productOnSale`);
    const productOnSale: FactProductOnSale = await this.productOnSaleRepository.findOneBy({ idProductOnSale: id });
    return this.productOnSaleRepository.remove(productOnSale);
  }
}
