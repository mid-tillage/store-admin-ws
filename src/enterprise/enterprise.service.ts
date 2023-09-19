import { Injectable, Logger } from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { DimEnterprise } from './entities/dim-enterprise.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnterpriseService {
  private readonly logger: Logger = new Logger(EnterpriseService.name);

  constructor(
    @InjectRepository(DimEnterprise)
    private enterpriseRepository: Repository<DimEnterprise>,
  ) { }

  create(createEnterpriseDto: CreateEnterpriseDto) {
    this.logger.log('This action adds a new enterprise');
    return this.enterpriseRepository.save(createEnterpriseDto);
  }

  findAll() {
    this.logger.log(`This action returns all enterprise`);
    return this.enterpriseRepository.find();
  }

  findOne(id: number) {
    this.logger.log(`This action returns a #${id} enterprise`);
    return this.enterpriseRepository.findOneBy({ idEnterprise: id });
  }

  update(id: number, updateEnterpriseDto: UpdateEnterpriseDto) {
    this.logger.log(`This action updates a #${id} enterprise`);
    return this.enterpriseRepository.update({ idEnterprise: id }, updateEnterpriseDto);
  }

  async remove(id: number) {
    this.logger.log(`This action removes a #${id} enterprise`);
    const enterprise = await this.enterpriseRepository.findBy({ idEnterprise: id });
    return this.enterpriseRepository.remove(enterprise);
  }
}
