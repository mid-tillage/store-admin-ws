import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DimProduct } from "../../product/entities/dim-product.entity";

@Index("dim_enterprise_pk", ["idEnterprise"], { unique: true })
@Entity("dim_enterprise", { schema: "commerce" })
export class DimEnterprise {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_enterprise" })
  idEnterprise: number;

  @Column("character varying", { name: "name" })
  name: string;

  @OneToMany(() => DimProduct, (dimProduct) => dimProduct.idEnterprise)
  dimProducts: DimProduct[];
}
