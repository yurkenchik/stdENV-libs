import {Field, InputType} from "@nestjs/graphql";
import {IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min} from "class-validator";

@InputType()
export class UpdateUserInput {

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly firstname?: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly lastname?: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    readonly username?: string;

    @IsNotEmpty()
    @IsInt()
    @Min(6)
    @Max(255)
    @Field()
    readonly age!: number;

    @Field()
    @IsOptional()
    readonly verificationCode?: string;

    @IsNotEmpty()
    @Field()
    @IsBoolean()
    readonly isAccountVerified?: boolean;

    @IsNotEmpty()
    @Field()
    @IsString()
    readonly certificateLink?: string;

}