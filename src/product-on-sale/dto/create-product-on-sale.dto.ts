import { PartialType } from "@nestjs/swagger";
import { FactProductOnSale } from "../entities/fact-product-on-sale.entity";

export class CreateProductOnSaleDto { 

    public idProductOnSale: number;
    public title: string;
    public product: {
        idProduct: number;
    };
    public catalog: {
        idProductCatalog: number;
    };
    public price: number;
    public saleStartDatetime: string;
    public saleEndDatetime: string;
}
