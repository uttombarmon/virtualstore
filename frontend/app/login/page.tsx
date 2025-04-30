"use client";
import facebooklogo from "@/public/facebook.svg";
import logo from "@/public/favicon.png";
import googlelogo from "@/public/google.svg";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Image from "next/image";
function Login() {
  const loginUser = (): void => {
    alert("Log In");
  };
  return (
    <div className=" w-[500px] bg-white/80 py-8 px-16 flex flex-wrap justify-center items-center rounded-lg">
      <Box
        className="w-full flex flex-wrap justify-center"
        component="form"
        onSubmit={loginUser}
      >
        {/* form head section */}
        <div className="w-full mb-4">
          <Image
            src={logo}
            className=" w-10 h-10 mx-auto"
            alt="Virtual Logo Icon"
          />
          <h1 className=" w-fit mx-auto font-bold text-3xl font-playfair font-serif]">
            Sign In
          </h1>
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
        <div className=" w-full flex flex-wrap py-2">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
        </div>
        <div className=" w-full flex flex-wrap py-2">
          <Button type="submit" variant="outlined" className="w-full">
            Sign In
          </Button>
        </div>
      </Box>
      <div className=" w-full flex justify-around items-center py-3">
        <p className=" w-2/5 h-0.5 bg-slate-500"></p>
        <p>Or</p>
        <p className=" w-2/5 h-0.5 bg-slate-500"></p>
      </div>
      <Box>
        <Button sx={{ mb: 3 }} variant="outlined" fullWidth>
          <Image
            className=" mr-3"
            src={googlelogo}
            width={20}
            height={20}
            alt="Gooele Logo"
          />
          Sign In With Google
        </Button>
        <Button variant="outlined" fullWidth>
          <Image
            className=" mr-3"
            src={facebooklogo}
            width={20}
            height={20}
            alt="Facebook Logo"
          />
          Sign In With Facebook
        </Button>
      </Box>
    </div>
  );
}

export default Login;
