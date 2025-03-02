import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

// Error handling middleware
export const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};
