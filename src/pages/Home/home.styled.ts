import { TextField, createTheme, styled, Button } from "@mui/material";
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
  height: theme.spacing(80),
  display: "grid",
  placeItems: "center",
  margin: "5rem 0",
  position: "relative",

});

export const containerInicio = styled("div")({
  backgroundColor: "#0400E0",
  backgroundImage: `url(${Fundo})`,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "50% 100%",
  width: "90%",
  height: "100%",
  position: "absolute",
  borderRadius: "5rem",
  borderTopLeftRadius: "20rem",
  borderBottomRightRadius: "20rem",
  ".card": {
    width: "30%",
    display: "grid",
    placeItems: "center",
    gap: theme.spacing(4),
    position: "absolute",
    top: "40%",
    left: "15%",
    transform: "translate(-15%, -40%)",
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
      gap: theme.spacing(2),
      borderRadius: theme.spacing(1.2),
      backgroundColor: "#FAFAFA",
      width: "100%",
      padding: theme.spacing(5,10),
      "& > div": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(2)
      }
    }
  },
});

export const Input = styled(TextField)({
  width: theme.spacing(20),
  "& label, & input":{
    fontSize: theme.spacing(1.7),
  },
});

export const Btn = styled(Button)({
  padding: theme.spacing(1,4),
  fontSize: theme.spacing(1.6),
  backgroundColor: "#FA2F1D"
})


export const secaoCategorias = styled("section")({
  "& h1": {
    marginLeft: "5%"
  },
  "& .galeriaCategorias": {
    backgroundColor: "#F67878",
    padding: `${theme.spacing(5)} 5%`,
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20%",
    placeContent: "space-between"
  }
});