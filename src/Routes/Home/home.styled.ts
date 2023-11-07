import { TextField, createTheme, styled } from "@mui/material";
import Fundo from "../../assets/fundoHome.png";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const secaoInicio = styled("section")({
  width: "100%",
  height: theme.spacing(90),
  display: "grid",
  placeItems: "center",
  padding: "5rem 0",
});

export const containerInicio = styled("div")({
  width: "90%",
  height: "100%",
  position: "relative",
  borderRadius: "5rem",
  borderTopLeftRadius: "20rem",
  borderBottomRightRadius: "20rem",
  backgroundColor: "#0400E0",
  ".card": {
    width: "30%",
    display: "grid",
    placeItems: "center",
    gap: theme.spacing(4),
    position: "absolute",
    top: "40%",
    left: "30%",
    transform: "translate(-30%, -40%)",
    "h2": {
      textAlign: "center",
      color: "white",
      "span": {
        color: "#45AFF1",
      },
    },
    ".secao-card": {
      display: "grid",
      placeItems: "center",
      borderRadius: theme.spacing(1.2),
      backgroundColor: "#FAFAFA",
      width: "100%",
      height: theme.spacing(30),
    }
  },
});

export const fundoCard = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(20),
  backgroundColor: "#01017D",
  position: "absolute",
  top: "50%",
  right: "-50%",
  transform: "translate(0%, -50%)",
  display: "grid",
  placeItems: "center",
  "> div": {
    width: "90%",
    height: "90%",
    backgroundImage: `url(${Fundo})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});


export const Label = styled(TextField)({
  "& label":{
    fontSize: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(10),
    "& .MuiInputLabel-root": {
      display: "flex",
      alignItems: "center",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  }
});