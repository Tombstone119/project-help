export interface IAppointment {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: "male" | "female" | "prefer not to state";
  maritalState: "married" | "single" | "widowed";
  phoneNumber: string;
  alternativePhoneNumber?: string;
  email: string;
  address: string;
  appointmentDate: string;
  appointmentTime: string;
  paymentStatus: "pay now" | "pay later";
}