import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";
import {RoleEnum} from "../utils/role.enum";
import {User} from "./user.entity";

@Entity()
@ObjectType()
export class Role {

    @PrimaryGeneratedColumn("uuid")
    @Field()
    id!: string;

    @Column({
        type: "enum",
        enum: RoleEnum,
        default: RoleEnum.STUDENT,
        unique: true
    })
    @Field()
    role!: RoleEnum;

    @OneToMany(() => User, user => user.role)
    users?: User[];

}