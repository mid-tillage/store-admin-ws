import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { CreateProductOnSaleDto } from 'src/product-on-sale/dto/create-product-on-sale.dto';
import { ConfigService } from '@nestjs/config';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class EngineService {
    private readonly logger: Logger = new Logger(EngineService.name);

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) { }

    sendProductOnSale(createProductOnSaleDto: CreateProductOnSaleDto) {
        const orchestratorUrl = `http://${this.configService.get<string>('STORE_ENGINE_ORCHESTRATOR_IP')}:${this.configService.get<number>('STORE_ENGINE_ORCHESTRATOR_PORT')}`;
        return this.httpService
        .post(orchestratorUrl + '/product',
            { sale: createProductOnSaleDto },
            { timeout: 5000 }
        )
        .pipe(
            catchError(error => {
                this.logger.error('Error occurred at sendProductOnSale:', {error});
                return throwError(error);
            })
        );
    }
}
