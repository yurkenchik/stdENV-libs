import {ArgumentsHost, Catch, ExceptionFilter, Logger} from "@nestjs/common";
import {RpcException} from "@nestjs/microservices";
import {ResponseError} from "../utils/response-error";
import {ZodError} from "zod";
import {throwError} from "rxjs";

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {

    private readonly logger = new Logger(RpcException.name);

    catch(exception: any, host: ArgumentsHost)
    {
        this.logger.error(`Exception caught: ${exception.message}`, exception.stack);

        if (exception instanceof ResponseError) {
            return throwError(() => new RpcException(exception.getResponse()));
        }

        if (exception instanceof ZodError) {
            const responseError = new ResponseError(422, exception.errors);
            return throwError(() => new RpcException(responseError.getResponse()));
        }

        return throwError(() => new RpcException(exception.message));
    }

}
