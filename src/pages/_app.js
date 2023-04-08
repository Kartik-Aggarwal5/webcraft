import "@/styles/globals.css";
import "@/assets/fonts/gilroy/stylesheet.css";
import "typeface-manrope";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "@/theme/theme";
import { AppProvider } from "@/context/app";
import Form from "@/components/form";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <Form />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </AppProvider>
  );
}
