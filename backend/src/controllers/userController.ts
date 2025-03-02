import HttpStatusCodes from "../util/httpStatusCodes.ts";

import userService from "../services/UserService.ts";
import { Request, Response } from "express";
import { handleError } from "../util/errorHandler.ts";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await userService.getAll();
    res.status(HttpStatusCodes.OK).json({
      success: true,
      users: allUsers,
    });
  } catch (error) {
    handleError(res, error);
  }
};
