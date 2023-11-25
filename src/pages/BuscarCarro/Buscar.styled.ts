import { createTheme, styled } from "@mui/material";

const theme = createTheme({});

export const BuscarCarroContainer = styled("section")({
    width: "90%",
    margin: "2% 5%",
});

export const BuscarCarroGaleria = styled("div")({
    display: "grid",
    gap: theme.spacing(6),
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "80%",
    margin: "0 auto"
})

