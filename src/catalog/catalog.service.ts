import { Injectable, Logger } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DimProductCatalog } from './entities/dim-product-catalog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogService {
  private readonly logger = new Logger(CatalogService.name);

  constructor(
    @InjectRepository(DimProductCatalog)
    private catalogRepository: Repository<DimProductCatalog>,
  ) { }

  async create(createCatalogDto: CreateCatalogDto) {
    this.logger.log('This action adds a new catalog:');
    this.logger.log({ createCatalogDto });
    return await this.catalogRepository.save(createCatalogDto);
  }

  async findAll() {
    this.logger.log('This action returns all catalog');
    return await this.catalogRepository.find();
  }

  async findOne(id: number) {
    this.logger.log(`This action returns a #${id} catalog`);
    return await this.catalogRepository.findBy({ idProductCatalog: id });
  }

  async findOneByName(name: string) {
    this.logger.log(`This action returns a ${name} catalog`);
    return await this.catalogRepository.findOneBy({ name: name });
  }

  async update(id: number, updateCatalogDto: UpdateCatalogDto) {
    this.logger.log(`This action updates a #${id} catalog`);
    return await this.catalogRepository.update({ idProductCatalog: id }, updateCatalogDto);
  }

  async remove(id: number) {
    this.logger.log(`This action removes a #${id} catalog`);
    const productCatalog = await this.catalogRepository.findBy({ idProductCatalog: id });
    return await this.catalogRepository.remove(productCatalog);
  }
}
