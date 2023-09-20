import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DimProduct } from "../../product/entities/dim-product.entity";
import { DimProductCatalog } from "../../catalog/entities/dim-product-catalog.entity";

@Index("fact_product_on_sale_pk", ["idProductOnSale"], { unique: true })
@Entity("fact_product_on_sale", { schema: "commerce" })
export class FactProductOnSale {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_product_on_sale" })
  idProductOnSale: number;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("integer", { name: "price" })
  price: number;

  @Column("timestamp without time zone", {
    name: "creation_datetime",
    default: () => "now()",
  })
  creationDatetime: Date;

  @Column("timestamp without time zone", {
    name: "sale_start_datetime",
    default: () => "now()",
  })
  saleStartDatetime: Date;

  @Column("timestamp without time zone", {
    name: "sale_end_datetime",
    default: () => "now()",
  })
  saleEndDatetime: Date;

  @ManyToOne(() => DimProduct, (dimProduct) => dimProduct.factProductOnSales)
  @JoinColumn([{ name: "id_product", referencedColumnName: "idProduct" }])
  product: DimProduct;

  @ManyToOne(
    () => DimProductCatalog,
    (dimProductCatalog) => dimProductCatalog.factProductOnSales
  )
  @JoinColumn([
    { name: "id_product_catalog", referencedColumnName: "idProductCatalog" },
  ])
  catalog: DimProductCatalog;
}
