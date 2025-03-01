import HttpStatusCodes from "@src/common/HttpStatusCodes";

import userService from "@src/services/UserService";
import { Request, Response } from "express";

const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allProducts = userService.getAll();
    res.status(HttpStatusCodes.OK).json({
      success: true,
      products: allProducts,
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export default {
  getAllUsers,
} as const;
