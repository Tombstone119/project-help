import { Schema, model } from "mongoose";

const AppointmentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date, 
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "prefer not to state"],
    },
    maritalState: {
      type: String,
      required: true,
      enum: ["married", "single", "widowed"],
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
    },
    alternativePhoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ["pay now", "pay later"],
    },
  },
  {
    timestamps: true,
    collection: "appointments"
  }
);

const AppointmentModel = model("appointment", AppointmentSchema);
export default AppointmentModel;