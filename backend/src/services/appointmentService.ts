//! TODO: generate referance number
//! TODO: make createAppointmentByPatient function for the appointment booking page {this function used by patient to book}
//! TODO: make createAppointmentByAdmin function for appointment management page {this function used by admin to book}
// TODO: make getAllByPatientId for the appointment view page {it returns all appointments for a particular patient to the patient}
// TODO: make getAllByDate returns all appointments for the particular date for the queue management panel
// TODO: make getAll returns all the appointments may be for the
// TODO: make findByRefNo function for the view my queue no page, may be for the admin
// TODO: make getPatientIdByRefNo to get the patient id through ref no to give access to the vitals
// TODO: make update/reschedule for view appoinment page
// TODO: make delete for view appoinment page and appointment management page
// TODO: make deleteAllByDate delete all appointment after a day

import {
  IPatientAppointment,
  IDoctorAppointment,
} from "@src/types/appointment.ts";
import AppointmentModel from "../models/appointmentModel.ts";

/******************************************************************************
                                Functions
******************************************************************************/

/**
 ** generate a custom appointment id. eg. 1203250001
 **/
const generateSequentialReference = async (
  appointmentDate: Date
): Promise<string> => {
  const day = String(appointmentDate.getDate()).padStart(2, "0");
  const month = String(appointmentDate.getMonth() + 1).padStart(2, "0");
  const year = String(appointmentDate.getFullYear()).slice(-2);

  // Note: fetch number of the records in the current date and increment it by one
  const count = await AppointmentModel.countDocuments({ appointmentDate });
  const sequentialNumber = String(count + 1).padStart(4, "0");

  return `${day}${month}${year}${sequentialNumber}`;
};

/**
 ** create appointment by patient.
 *! login is required
 **/
async function createAppointmentByPatient(appointment: IPatientAppointment) {
  try {
    // Note: reference number generation
    const appointmentDate = new Date(appointment.appointmentDate);
    const referenceNumber = await generateSequentialReference(appointmentDate);

    const newPatientAppointment = new AppointmentModel({
      referenceNumber,
      patientId: appointment.patientId,
      firstName: appointment.firstName,
      lastName: appointment.lastName,
      dateOfBirth: new Date(appointment.dateOfBirth),
      gender: appointment.gender,
      maritalState: appointment.maritalState,
      phoneNumber: appointment.phoneNumber,
      alternativePhoneNumber: appointment.alternativePhoneNumber,
      email: appointment.email,
      address: appointment.address,
      appointmentDate: appointmentDate,
      paymentStatus: appointment.paymentStatus,
    });

    await newPatientAppointment.save();
    return newPatientAppointment;
  } catch (error) {
    console.error("Error in createAppointmentByPatient:", error);
    throw error;
  }
}

/**
 ** create appointment by admin.
 *! login is not required
 *! these records do not give the access to the vitals for the doctor
 **/
async function createAppointmentByDoctor(appointment: IDoctorAppointment) {
  try {
    // Note: reference number generation
    const appointmentDate = new Date(appointment.appointmentDate);
    const referenceNumber = await generateSequentialReference(appointmentDate);

    const newDoctorAppointment = new AppointmentModel({
      referenceNumber,
      firstName: appointment.firstName,
      phoneNumber: appointment.phoneNumber,
      appointmentDate: appointmentDate,
    });

    await newDoctorAppointment.save();
    return newDoctorAppointment;
  } catch (error) {
    console.error("Error in createAppointmentByDoctor:", error);
    throw error;
  }
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  generateSequentialReference,
  createAppointmentByPatient,
  createAppointmentByDoctor,
};
