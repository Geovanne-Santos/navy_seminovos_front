import { createTheme, styled } from "@mui/material";

const theme = createTheme();

export const Card = styled("div")({
    width: theme.spacing(40),
    borderRadius: theme.spacing(2),
    backgroundColor: "#F9F9F9",
    boxShadow: "6px 7px 13px 0px rgba(0, 0, 0, 0.25), -2px -4px 5px 1px rgba(0, 0, 0, 0.05) inset",
    "& img": {
        width: "100%",
        height: theme.spacing(40),
        objectFit: "cover"
    },
    "& div": {
        padding: theme.spacing(2),
        textAlign: "right",
        "h2": {color: "#89969F"}
    }
});