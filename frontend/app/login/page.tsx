import { createTheme } from "@mui/material";
import { AppProvider, SignInPage } from "@toolpad/core";
import React from "react";

function Login() {
  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
    components: {
      ...inputsCustomizations,
    },
  });
  return (
    <div>
      <AppProvider theme={THEME}>
        <SignInPage
          signIn={signIn}
          providers={providers}
          slotProps={{ form: { noValidate: true } }}
          sx={{
            "& form > .MuiStack-root": {
              marginTop: "2rem",
              rowGap: "0.5rem",
            },
          }}
        />
      </AppProvider>
    </div>
  );
}

export default Login;
