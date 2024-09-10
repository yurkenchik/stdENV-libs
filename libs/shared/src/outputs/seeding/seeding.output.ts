import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SeedingOutput {

    @Field(() => String)
    readonly message!: string;

}