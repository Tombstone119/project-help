import express from "express";
const router = express.Router();

import { getAllUsers } from "../controllers/userController.ts";

router.route("/users").get(getAllUsers);

export default router;
