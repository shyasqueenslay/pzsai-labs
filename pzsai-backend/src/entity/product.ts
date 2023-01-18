import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  price!: number;

  @Column()
  description!: string;

  @Column()
  imgUrl!: string;

  @Column()
  code!: string;

  @Column()
  brand!: string;

  @Column()
  inventoryCount!: number;

  @Column()
  inStock!: boolean;
}

export default Product;
