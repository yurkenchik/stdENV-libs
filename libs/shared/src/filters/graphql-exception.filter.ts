import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus} from "@nestjs/common";
import {GqlArgumentsHost} from "@nestjs/graphql";

@Catch()
export class GraphqlExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost)
    {
        const gqlHost = GqlArgumentsHost.create(host);
        const context = gqlHost.getContext();
        const response = context.res;

        if (exception instanceof HttpException) {
            const status = exception.getStatus();
            const message = exception.getResponse();

            return {
                statusCode: status,
                message: message
            };
        } else {
            const status = HttpStatus.BAD_REQUEST;
            const message = exception.message || "An unknown error occurred";

            return {
                statusCode: status,
                message: message
            };
        }
    }

}