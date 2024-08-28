import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { ResponseError } from "../utils/response-error";
import { ZodError } from "zod";
import { throwError } from "rxjs";

@Catch()
export class MSRpcExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost)
    {
        if (
            exception.constructor.name === "BadRequestException" ||
            exception.constructor.name === "NotFoundException" ||
            exception.constructor.name === "ForbiddenException" ||
            exception.constructor.name === "UnauthorizedException"
        ) {
            console.log("RPC EXCEPTION: ", exception);
            return throwError(() => exception.getResponse());
        }

        if (exception.constructor.name === "ZodError") {
            throw new HttpException(exception.message, 422)
        }

        return throwError(() => exception);
    }

}
