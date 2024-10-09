import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {IsNotEmpty, IsString} from "class-validator";

@InputType()
export class SendVerificationCodeInput {

    @Field()
    @IsNotEmpty()
    @IsString()
    readonly recipient!: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    readonly verificationCode!: string;

}