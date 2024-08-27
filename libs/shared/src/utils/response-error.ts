import {HttpException, HttpStatus} from "@nestjs/common";

export class ResponseError extends HttpException {

    constructor(status: HttpStatus, error?: unknown)
    {
        super(
            {
                message: HttpStatus[status],
                status: status,
                error: error,
                success: false
            },
            status
        );
    }

}