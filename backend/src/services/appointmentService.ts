import { IAppointment } from "@src/types/appointment.ts";
import AppointmentModel from "@src/models/appointmentModel.ts";


const generateSequentialReference = async (appointmentDate: Date): Promise<string> => {
  const day = String(appointmentDate.getDate()).padStart(2, "0");
  const month = String(appointmentDate.getMonth() + 1).padStart(2, "0");
  const year = String(appointmentDate.getFullYear()).slice(-2);
  
  // Note: fetch number of the records in the current date
  const count = await AppointmentModel.countDocuments({ appointmentDate });

  const sequentialNumber = String(count + 1).padStart(4, "0"); 

  return `${day}${month}${year}${sequentialNumber}`;
};



// export default {
//   getAll,
//   findById,
//   create,
//   update,
//   findAndDelete,
// };
