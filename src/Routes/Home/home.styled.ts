import { createTheme, styled } from "@mui/material";

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
    borderTopLeftRadius: "15rem",
    borderBottomRightRadius: "15rem",
    div: {
        position: "absolute",
        top: "50%",
        left: "20%",
        transform: "translate(-20%, -50%)",
        padding: "5rem",
        backgroundColor: "rgba(253, 253, 253, 0.8)"
    }
})
