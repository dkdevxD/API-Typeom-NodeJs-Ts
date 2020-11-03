import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  constructor(name: string, email: string, password: string, created_At: Date) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_At = created_At;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_At: Date
}
