import { Box } from "@mui/material";
import Link from "next/link";

function BottomText() {
  return (
    <Box>
      <p>
        Already Have a account?{" "}
        <Link
          href={"/auth/login"}
          className=" text-blue-600 underline font-medium"
        >
          Log In
        </Link>
      </p>
    </Box>
  );
}

export default BottomText;
