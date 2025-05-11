"use client";
import logo from "@/public/logo.png";
import { Search } from "@mui/icons-material";
import { alpha, AppBar, Box, InputBase, styled, Toolbar } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
const SearchC = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className=" bg-amber-200">
          <Toolbar className="bg-blue-300/40 flex justify-between">
            <div>
              <Image
                src={logo}
                alt="Virtual Store Logo"
                className=" font-[family-name:var(--font-open-sans)] font-bold text-lg h-10 w-20"
              />
            </div>
            <ul>
              <Link href={"/"} className=" px-4 py-2 ">
                Categories
              </Link>
              <Link href={"/"} className=" px-4 py-2 ">
                Fashion
              </Link>
              <Link href={"/"} className=" px-4 py-2 ">
                Gloserice
              </Link>
              <Link href={"/"} className=" px-4 py-2 ">
                Electronics
              </Link>
            </ul>
            <SearchC>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchC>
          </Toolbar>
        </AppBar>
      </Box>
    </motion.div>
  );
}
