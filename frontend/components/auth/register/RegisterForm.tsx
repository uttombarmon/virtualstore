"use client";
import logo from "@/public/favicon.png";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Image from "next/image";
// import { useState } from "react";

function RegisterForm() {
  // const [date, setDate] = useState(Number);
  const registerUser = (): void => {};
  return (
    <Box
      className="w-full flex flex-wrap justify-center"
      component="form"
      onSubmit={registerUser}
    >
      {/* form head section */}
      <div className="w-full mb-4">
        <Image
          src={logo}
          className=" w-10 h-10 mx-auto"
          alt="Virtual Logo Icon"
        />
        <h1 className=" w-fit mx-auto font-bold text-3xl font-playfair font-serif]">
          Create a account
        </h1>
      </div>
      {/* name input field  */}
      <div className=" w-full flex flex-wrap py-2">
        <TextField
          id="outlined-name-input"
          label="Name"
          type="text"
          autoComplete="current-email"
          className="w-full"
        />
      </div>
      {/* Birthday  */}
      <div className=" w-full flex flex-wrap py-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" className=" w-full" />
          </DemoContainer>
        </LocalizationProvider>
        {/* <p>gfdf</p>
        <CustomDatePicker dateText="Birthday" /> */}
      </div>
      {/* email input field  */}
      <div className=" w-full flex flex-wrap py-2">
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          className="w-full"
        />
      </div>
      {/* password input field  */}
      <div className=" w-full flex flex-wrap py-2">
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className=" w-full"
        />
      </div>
      {/* confirm password input field  */}
      <div className=" w-full flex flex-wrap py-2">
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          className=" w-full"
        />
      </div>
      <div className=" w-full flex flex-wrap py-2">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Accept terms and conditions"
        />
      </div>
      <div className=" w-full flex flex-wrap py-2">
        <Button type="submit" variant="outlined" className="w-full">
          Sign In
        </Button>
      </div>
    </Box>
  );
}

export default RegisterForm;
