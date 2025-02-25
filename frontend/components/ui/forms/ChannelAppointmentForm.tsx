"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";




const allowedDates = [
  new Date("2023-01-01"),
  new Date("2023-01-15"),
  new Date("2025-04-16"),
  new Date("2025-03-01"), 
  new Date("2025-03-10"), 
  new Date("2025-03-20"), 
  new Date("2025-04-01"), 
  new Date("2025-05-05"),
];


// Helper function to check if a date is allowed
const isDateAllowed = (date: Date) => {
  return allowedDates.some(
    (allowedDate) => allowedDate.toDateString() === date.toDateString()
  );
};





const isValidDate = (val: string) => !isNaN(Date.parse(val));

const formSchema = z

  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    dateOfBirth: z.string(),
    gender: z.enum(["male", "female", "prefer not to state"]),
    maritalState: z.enum(["married", "single", "widowed"]),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    alternativePhoneNumber: z.string().optional(),
    email: z.string().email("Invalid email format"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    appointmentDate: z.string(),
    appointmentTime: z.string(),
    paymentStatus: z.enum(["pay now", "pay later"]),
  })
  .refine((data) => isValidDate(data.dateOfBirth), {
    message: "Invalid date format",
    path: ["dateOfBirth"],
  })
  .refine((data) => isValidDate(data.appointmentDate), {
    message: "Invalid date-time format",
    path: ["appointmentDate"],
  });

export default function ChannelAppointmentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "prefer not to state",
      maritalState: "single",
      phoneNumber: "",
      alternativePhoneNumber: "",
      email: "",
      address: "",
      appointmentDate: "",
      appointmentTime: "",
      paymentStatus: "pay later",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  // const isAllowedDate = (date: Date): boolean => {
  //   return allowedDates.some((allowedDate) => {
  //     return (
  //       allowedDate.getFullYear() === date.getFullYear() &&
  //       allowedDate.getMonth() === date.getMonth() &&
  //       allowedDate.getDate() === date.getDate()
  //     );
  //   });
  // };

  const [date, setDate] = React.useState<Date>()
  // const [startDate, setStartDate] = useState<Date | null>(null); // ✅ Define state

  // const renderDayContents = (day: number, date: Date) => {
  //   return (
  //     <div className={isAllowedDate(date) ? "bg-blue-300 rounded-full" : ""}>
  //       {day}
  //     </div>
  //   );
  // };

  return (
    <div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      placeholder="eg. Sahan dulaj"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      placeholder="eg. Deshapriya"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      type="date"
                      min="1900-01-01" // Optional: Prevent unrealistic dates
                      max={new Date().toISOString().split("T")[0]} // Prevent future dates
                      aria-label="Date of Birth"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4" // Changed to row layout
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="prefer not to state" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Prefer not to state
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
            {/* ============Form Section============== */}
            <FormField
              control={form.control}
              name="maritalState"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Marital State</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4" // Changed to row layout
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="married" />
                        </FormControl>
                        <FormLabel className="font-normal">Married</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="single" />
                        </FormControl>
                        <FormLabel className="font-normal">Single</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="widowed" />
                        </FormControl>
                        <FormLabel className="font-normal">Widowed</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ======================================= */}
            {/* ============Form Section=============== */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      placeholder="e.g. 0XX XXX XXXX"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ======================================= */}
            {/* ============Form Section=============== */}
            <FormField
              control={form.control}
              name="alternativePhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alternative Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      placeholder="e.g. 0XX XXX XXXX"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ======================================= */}
            {/* ============Form Section=============== */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                      placeholder="e.g., example@domain.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ======================================= */}
            {/* ============Form Section================*/}
            {/* <FormField
                control={form.control}
                name="appointmentDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth </FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={startDate} // ✅ No more "cannot find name 'startDate'" error
                        onChange={(date) => {
                          if (date && isAllowedDate(date)) {
                            setStartDate(date);
                            field.onChange(date.toISOString()); // Convert date to string if needed
                          } else {
                            alert("Please select an allowed date.");
                          }
                        }}
                        filterDate={(date) => isAllowedDate(date)} // Allow selection only on valid dates
                        placeholderText="Select a date"
                        renderDayContents={renderDayContents} // Highlight allowed dates
                        aria-label="Appointment Date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="appointmentTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Type: </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
            {/* ============Form Section===============*/}
            <FormField
              control={form.control}
              name="appointmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available dates</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate: Date | undefined) => {
                            if (selectedDate && isDateAllowed(selectedDate)) {
                              setDate(selectedDate);
                              field.onChange(selectedDate); // Update the field value
                            }
                          }}
                          initialFocus
                          // Implement a prop that your library uses for disabling days
                          // For example, if your library supports a 'disabled' prop
                          disabled={day => !isDateAllowed(day as Date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* =======================================*/}
          </form>
        </Form>
      </div>
    </div>
  );
}
