import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api";

export class NotFoundError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    // this.statusCode = StatusCodes.BAD_REQUEST;
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

