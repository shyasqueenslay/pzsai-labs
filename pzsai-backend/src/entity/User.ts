import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// const Entity = require("typeorm").Entity;
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}
