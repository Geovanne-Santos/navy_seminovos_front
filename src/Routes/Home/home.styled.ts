import { createTheme, styled } from "@mui/material";
import Fundo from '../../assets/fundoHome.png';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    }
});

export const secaoInicio = styled("section")({
    width: "100%",
    height: theme.spacing(90),
    display: "grid",
    placeItems: "center",
    padding: "5rem 0"
})

export const containerInicio = styled("div")({
    width: "90%",
    position: "relative",
    height: "100%",
    backgroundColor: "#FB5B4D",
    borderRadius: "5rem",
    borderTopLeftRadius: "20rem",
    borderBottomRightRadius: "20rem",
    ".card": {
        width: "40%",
        height: theme.spacing(20),
        display: "grid",
        placeItems: "center",
        position: "absolute",
        top: "50%",
        left: "15%",
        transform: "translate(-15%, -50%)",
        backgroundColor: "#FAFAFA",
        borderRadius: theme.spacing(1.2),
    }
})

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
    }
})