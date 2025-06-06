"use client";
import { ShoppingCart } from "@mui/icons-material";
import { Button, ButtonProps, styled } from "@mui/material";
import { amber } from "@mui/material/colors";
function CusButton() {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[600],
    "&:hover": {
      backgroundColor: amber[700],
    },
  }));
  return (
    <ColorButton
      href="/bestsellingproduct"
      startIcon={<ShoppingCart />}
      className=" font-bold"
    >
      Buy More..
    </ColorButton>
  );
}

export default CusButton;
