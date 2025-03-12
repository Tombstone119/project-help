import AppointmentModel from "@src/models/appointmentModel.ts";
import appointmentService from "../services/appointmentService.ts";
import createAppointmentByDoctor from "../services/appointmentService.ts";
import { Response, Request } from "express";
import HttpStatusCodes from "../util/statusCodes.ts";
import { handleError } from "../util/errorHandler.ts";

/******************************************************************************
                                Create
******************************************************************************/

export const createPatientAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //! Take patient Id from the session
    //const patientId = req.user.id;
    
    const newAppointment = await appointmentService.createAppointmentByPatient({
      patientId: "1234",
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      maritalState: req.body.maritalState,
      phoneNumber: req.body.phoneNumber,
      alternativePhoneNumber: req.body.alternativePhoneNumber,
      email: req.body.email,
      address: req.body.address,
      appointmentDate: req.body.appointmentDate,
      paymentStatus: req.body.paymentStatus,
    });
    
    res.status(HttpStatusCodes.CREATED).json({
      success: true,
      appointment: newAppointment,
    });
  } catch (error) {
    handleError(res, error);
  }
};


export const createDoctorAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newAppointment = await appointmentService.createAppointmentByDoctor({
      firstName: req.body.firstName,
      phoneNumber: req.body.phoneNumber,
      appointmentDate: req.body.appointmentDate,
    });
    
    res.status(HttpStatusCodes.CREATED).json({
      success: true,
      appointment: newAppointment,
    });
  } catch (error) {
    handleError(res, error);
  }
};