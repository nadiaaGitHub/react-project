import { createTheme } from "@mui/system";
import React from "react";
import { ThemeProvider } from "@mui/styles";
import "./App.css";
import Home from "./container/home";


const theme = createTheme({
  typography: {
    fontFamily: [
      "Lato",
      "sans-serif",
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
  },
  button: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

const MyResume = () => {
  return (
   
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
   

  
  )
};

export default MyResume;
