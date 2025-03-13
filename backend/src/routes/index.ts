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
  getAllByPatientId,
  getAllByDate,
  getAllAppointments,
  findByRefNo,
  getPatientIdByRefNo,
  rescheduleAppointmentByRefNo,
  deleteAppointmentByRefNo,
  deleteAllAppointmentsByDate,
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
  .post(createDoctorAppointment)
  // Example: POST /api/appointments/doctorAppointments

  .get(getAllAppointments);
// Example: GET /api/appointments/doctorAppointments

router.route("/patientAppointments").post(createPatientAppointment);
// Example: POST /api/appointments/patientAppointments

// api/appointments/:id

router.route("/appointments/patient/:patientId").get(getAllByPatientId);
// Example: GET /api/appointments/patient/5678

router
  .route("/appointments/date/:date")
  .get(getAllByDate)
  .delete(deleteAllAppointmentsByDate);
// Example: GET /api/appointments/date/2023-12-25

router
  .route("/appointments/refNo/:refNo")
  .get(findByRefNo)
  .delete(deleteAppointmentByRefNo)
  .put(rescheduleAppointmentByRefNo);
// Example: GET /api/appointments/refNo/1504250001

router.route("/appointments/patientIdByRefNo/:refNo").get(getPatientIdByRefNo);
// Example: GET /api/appointments/patientIdByRefNo/1504250001

/******************************************************************************
                                Export default
******************************************************************************/

export default router;
