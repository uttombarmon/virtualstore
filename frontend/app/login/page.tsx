"use client";
import { createTheme } from "@mui/material";
import {
  AppProvider,
  AuthProvider,
  AuthResponse,
  SignInPage,
} from "@toolpad/core";

// Example brandingDesignTokens definition (replace with actual values or import)
const brandingDesignTokens = {
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
};

function Login() {
  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: "dark", // Replace "light" with the desired mode, e.g., "dark"
    },
    components: {
      // Define or replace with actual customizations
    },
  });
  const providers = [
    { id: "credentials", name: "Email and Password" },
    { id: "github", name: "GitHub" },
    { id: "google", name: "Google" },
  ];
  const signIn: (
    provider: AuthProvider,
    formData?: FormData
  ) => Promise<AuthResponse> | void = async (provider, formData) => {
    const promise = new Promise<AuthResponse>((resolve) => {
      setTimeout(() => {
        const email = formData?.get("email");
        const password = formData?.get("password");
        alert(
          `Signing in with "${provider.name}" and credentials: ${email}, ${password}`
        );
        // preview-start
        resolve({
          type: "CredentialsSignin",
          error: "Invalid credentials.",
        });
        // preview-end
      }, 300);
    });
    return promise;
  };
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
