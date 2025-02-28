// "use client";

// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import * as React from "react";

// const formSchema = z

//   .object({
//     firstName: z.string().min(1, "First name is required"),
//     lastName: z.string().min(1, "Last name is required"),
//     dateOfBirth: z.string(),
//     gender: z.enum(["male", "female", "prefer not to state"]),
//     maritalState: z.enum(["married", "single", "widowed"]),
//     phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
//     alternativePhoneNumber: z.string().optional(),
//     email: z.string().email("Invalid email format"),
//     address: z.string().min(5, "Address must be at least 5 characters"),
//     appointmentDate: z.string(),
//     appointmentTime: z.string(),
//     paymentStatus: z.enum(["pay now", "pay later"]),
//   });

// export default function ChannelAppointmentForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       dateOfBirth: "",
//       gender: "prefer not to state",
//       maritalState: "single",
//       phoneNumber: "",
//       alternativePhoneNumber: "",
//       email: "",
//       address: "",
//       appointmentDate: "",
//       appointmentTime: "",
//       paymentStatus: "pay later",
//     },
//   });

//   const handleSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log({ values });
//   };



//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(handleSubmit)}
//             className="grid grid-cols-1 gap-4"
//           >
//             {/* =======================================*/}
//             {/* ============Form Section===============*/}
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
//                       placeholder="eg. Sahan dulaj"
//                       type="text"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             {/* =======================================*/}
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }
