import {Field, ObjectType} from "@nestjs/graphql";
import {IsOptional} from "class-validator";

@ObjectType()
export class UploadCertificateOutput {

    @Field()
    readonly message?: string;

    @Field()
    readonly filename?: string;

}