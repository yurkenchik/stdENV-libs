import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class MessageOutput {

    @Field()
    readonly message!: string;

}