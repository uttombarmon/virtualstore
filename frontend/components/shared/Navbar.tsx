"use client";
import logo from "@/public/logo.png";
import { Search } from "@mui/icons-material";
import { alpha, AppBar, Box, InputBase, styled, Toolbar } from "@mui/material";
import Image from "next/image";
import MenuButton from "./Navbar/MenuButton";
import MenuLink from "./Navbar/MenuLink";
const SearchC = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
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
    <Box sx={{ flexGrow: 1 }} className="">
      <AppBar className=" bg-amber-200">
        <Toolbar
          sx={{ color: "inherit" }}
          className="  flex justify-between text-black"
        >
          <div>
            <Image
              src={logo}
              alt="Virtual Store Logo"
              className=" font-[family-name:var(--font-open-sans)] font-bold text-lg h-12 w-24 bg-cover"
            />
          </div>
          <MenuLink />
          <SearchC>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchC>
          <MenuButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
