import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FactProductOnSale } from "../../product-on-sale/entities/fact-product-on-sale.entity";
import { ApiHideProperty } from "@nestjs/swagger";

@Index("dim_product_catalog_pk", ["idProductCatalog"], { unique: true })
@Entity("dim_product_catalog", { schema: "commerce" })
export class DimProductCatalog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_product_catalog" })
  idProductCatalog: number;

  @Column("character varying", { name: "name" })
  name: string;

  @ApiHideProperty()
  @OneToMany(
    () => FactProductOnSale,
    (factProductOnSale) => factProductOnSale.catalog
  )
  factProductOnSales: FactProductOnSale[];
}
