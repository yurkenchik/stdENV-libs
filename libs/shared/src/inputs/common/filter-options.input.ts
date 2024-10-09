import {Field, InputType} from "@nestjs/graphql";
import {IsOptional} from "class-validator";

@InputType()
export class FilterOptionsInput {

    @Field({ nullable: true })
    @IsOptional()
    readonly pageSize?: number;

    @Field({ nullable: true })
    @IsOptional()
    readonly skip?: number;

}