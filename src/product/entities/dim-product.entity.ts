import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DimEnterprise } from "../../enterprise/entities/dim-enterprise.entity";
import { FactProductOnSale } from "../../product-on-sale/entities/fact-product-on-sale.entity";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

@Index("dim_product_pk", ["idProduct"], { unique: true })
@Entity("dim_product", { schema: "commerce" })
export class DimProduct {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_product" })
  idProduct: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description" })
  description: string;

  @Column("timestamp without time zone", {
    name: "creation_datetime",
    default: () => "now()",
  })
  creationDatetime: Date;

  @ManyToOne(() => DimEnterprise, (dimEnterprise) => dimEnterprise.dimProducts)
  @JoinColumn([{ name: "id_enterprise", referencedColumnName: "idEnterprise" }])
  idEnterprise: DimEnterprise;

  @ApiHideProperty()
  @OneToMany(
    () => FactProductOnSale,
    (factProductOnSale) => factProductOnSale.idProduct
  )
  factProductOnSales: FactProductOnSale[];
}
