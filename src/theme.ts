import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#084088',
        dark: '#89969F',
        contrastText: '#fff',
        light: '#A3A3A3'
      },
      secondary: {
        
        main: '#FB5B4D',
        dark: '#28C7FA',
        contrastText: '#818181',
        light: '#F0F6F8'
      },
    },
  });