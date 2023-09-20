import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateProductOnSaleDto } from 'src/product-on-sale/dto/create-product-on-sale.dto';

@Injectable()
export class EngineService {
    constructor(private readonly httpService: HttpService) { }

    sendProductOnSale(createProductOnSaleDto: CreateProductOnSaleDto) {
        return this.httpService.post('http://localhost:2500/product', { sale: createProductOnSaleDto });
    }
}
