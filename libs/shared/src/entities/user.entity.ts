import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import {Role} from "./role.entity";
import {UserStatusEnum} from "../utils/user-status.enum";

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
    @Column({ type: "boolean", default: false })
    isBanned?: boolean;

    @Field()
    @Column({ type: "varchar", default: null })
    banReason?: string;

    @Field()
    @Column({ type: "enum", default: UserStatusEnum.PENDING, enum: UserStatusEnum })
    status?: UserStatusEnum;

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn()
    role?: Role
    
}