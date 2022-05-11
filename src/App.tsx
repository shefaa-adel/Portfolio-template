import React from "react";
import './App.css';
import Home from './pages/Home'
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat','sans-serif'
    ].join(",")
  }
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Home/>
    
    </ThemeProvider>
    
    </>
  );
}

export default App;
