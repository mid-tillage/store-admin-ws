import { PartialType } from '@nestjs/swagger';
import { CreateProductOnSaleDto } from './create-product-on-sale.dto';

export class UpdateProductOnSaleDto extends PartialType(CreateProductOnSaleDto) {}
