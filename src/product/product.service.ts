import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DimProduct } from './entities/dim-product.entity';

@Injectable()
export class ProductService {
  private readonly logger: Logger = new Logger(ProductService.name);

  constructor(
    @InjectRepository(DimProduct)
    private productRepository: Repository<DimProduct>,
  ) { }

  create(createProductDto: CreateProductDto) {
    this.logger.log('This action adds a new product');
    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    this.logger.log(`This action returns all product`);
    return await this.productRepository.find({ relations: ['enterprise'] });
  }

  findOne(id: number) {
    this.logger.log(`This action returns a #${id} product`);
    return this.productRepository.findOneBy({ idProduct: id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.logger.log(`This action updates a #${id} product`);
    return this.productRepository.update({ idProduct: id }, updateProductDto);
  }

  async remove(id: number) {
    this.logger.log(`This action removes a #${id} product`);
    const product = await this.productRepository.findOneBy({ idProduct: id });
    return this.productRepository.remove(product);
  }
}
