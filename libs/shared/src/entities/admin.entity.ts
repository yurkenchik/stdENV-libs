import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";
import {RoleEnum} from "../utils/role.enum";
import {User} from "./user.entity";

@Entity()
@ObjectType()
export class Admin {

    @PrimaryGeneratedColumn("uuid")
    @Field()
    id!: string;

    @Column({ type: "varchar" })
    @Field()
    role?: string = RoleEnum.ADMIN;

    @Column({ type: "integer", default: 0 })
    @Field()
    bannedUsersCounter?: number;

    @Column({ type: "integer", default: 0 })
    @Field()
    confirmedTeachersCounter?: number;

}