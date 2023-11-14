import { createTheme, styled } from "@mui/material";

const theme = createTheme({});

export const BuscarCarroContainer = styled("section")({
    width: "90%",
    backgroundColor: "gray",
    margin: "0 5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
});

export const BuscarCarroGaleria = styled("div")({
    display: "grid",
    gap: theme.spacing(1.2),
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    justifyContent: "space-around",
    width: "100%"
})

