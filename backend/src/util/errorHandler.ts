import { Response, Request } from "express";
import HttpStatusCodes from "./httpStatusCodes.ts";

export const handleError = (res: Response, error: any) => {
  console.error(error);
  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal Server Error...",
  });
};
