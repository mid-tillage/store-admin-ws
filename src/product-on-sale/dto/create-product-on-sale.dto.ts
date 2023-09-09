import { PartialType } from "@nestjs/swagger";
import { FactProductOnSale } from "../entities/fact-product-on-sale.entity";

export class CreateProductOnSaleDto extends PartialType(FactProductOnSale) { }
