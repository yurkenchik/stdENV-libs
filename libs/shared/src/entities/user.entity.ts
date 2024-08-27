import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import {RoleEnum} from "../utils/role.enum";

@ObjectType()
@Entity()
export class User {

    @Field(() => String)
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Field()
    @Column({ type: "varchar" })
    firstname!: string;

    @Field()
    @Column({ type: "varchar" })
    lastname?: string;

    @Field()
    @Column({ type: "varchar" })
    username?: string;
    
    @Field()
    @Column({ type: "varchar" })
    email!: string;
    
    @Field()
    @Column({ type: "varchar" })
    password!: string;
    
    @Field()
    @Column({ type: "integer" })
    age!: number;
    
    @Field()
    @Column({ type: "enum", enum: RoleEnum, default: RoleEnum.STUDENT })
    role!: RoleEnum;
    
}