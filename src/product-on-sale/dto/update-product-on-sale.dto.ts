import { PartialType } from '@nestjs/mapped-types';
import { CreateProductOnSaleDto } from './create-product-on-sale.dto';

export class UpdateProductOnSaleDto extends PartialType(CreateProductOnSaleDto) {}
