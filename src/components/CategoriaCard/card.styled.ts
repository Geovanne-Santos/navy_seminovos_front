import { createTheme, styled } from "@mui/material";

const theme = createTheme();

export const Card = styled("div")({
    width: "100%",
    borderRadius: theme.spacing(2),
    backgroundColor: "#F9F9F9",
    boxShadow: "6px 7px 13px 0px rgba(0, 0, 0, 0.25), -2px -4px 5px 1px rgba(0, 0, 0, 0.05) inset",
    transition: "transform .3s ease-in-out, box-shadow .3s ease-in-out",
    transform: "translateY(0)",
    "&:hover": {
        transform: "translateY(-6px) scale(1.01)",
        boxShadow: "7px 8px 14px 0px rgba(0, 0, 0, 0.25)"
    },
    "& img": {
        width: "100%",
        height: theme.spacing(40),
        objectFit: "cover",
    },
    "& div": {
        padding: theme.spacing(2),
        textAlign: "right",
        "& h2": {
            color: "#89969F"
        }
    }
});