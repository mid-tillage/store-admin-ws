import { PartialType } from "@nestjs/swagger";
import { FactProductOnSale } from "../entities/fact-product-on-sale.entity";

export class CreateProductOnSaleDto { 

    public idProductOnSale: number;
    public title: string;
    public product: {
        idProduct: number;
        name: string;
        description: string;
    };
    public catalog: {
        idProductCatalog: number;
        name: string;
    };
    public price: number;
    public saleStartDatetime: string;
    public saleEndDatetime: string;
}
