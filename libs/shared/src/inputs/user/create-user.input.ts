import {Field, InputType} from "@nestjs/graphql";
import {IsEmail, IsEnum, IsNotEmpty, IsString, Length} from "class-validator";
import {RoleEnum} from "../../utils/role.enum";
import {Role} from "../../entities/role.entity";

@InputType()
export class CreateUserInput {

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly firstname!: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly lastname!: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly username?: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Field()
    readonly email!: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 125)
    @Field()
    readonly password!: string;

    @IsNotEmpty()
    @IsString()
    @Length(6, 125)
    @Field()
    readonly age!: number;

    @IsNotEmpty()
    readonly role?: Role;

}