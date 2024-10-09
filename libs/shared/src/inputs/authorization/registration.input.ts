import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {IsEmail, IsEnum, IsIn, IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min} from "class-validator";
import {RoleEnum} from "../../utils/role.enum";
import {Role} from "../../entities/role.entity";

@InputType()
export class RegistrationInput {
    
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
    @IsInt()
    @Min(6)
    @Max(255)
    @Field()
    readonly age!: number;
    
    @IsNotEmpty()
    @IsEnum(RoleEnum)
    @Field()
    readonly role!: RoleEnum;
    
}