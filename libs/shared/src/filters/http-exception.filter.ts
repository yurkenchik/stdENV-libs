import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();

        if (exception?.status && typeof exception?.status === "number") {
            response.status(exception.status).send(exception);
        } else {
            response.status(400).send(exception);
        }
    }

}