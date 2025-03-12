import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController.ts";
import { getAllUsers } from "../controllers/userController.ts";

import {
  createDoctorAppointment,
  createPatientAppointment,
} from "../controllers/appointmentController.ts";

const router = Router();

/******************************************************************************
                                User Routes
******************************************************************************/

// api/users/
router.route("/users").get(getAllUsers);

/******************************************************************************
                                Product Routes
******************************************************************************/

// api/products/
router.route("/products").get(getAllProducts).post(createProduct);

// api/products/:id
router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

/******************************************************************************
                                Appointment Routes
******************************************************************************/

// api/appointments/
router
  .route("/doctorAppointments")
  .post(createDoctorAppointment);
  
router
  .route("/patientAppointments")
  .post(createPatientAppointment);

/******************************************************************************
                                Export default
******************************************************************************/

export default router;
