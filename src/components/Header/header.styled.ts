"use client";
import { styled } from "@mui/material";

export const header = styled("header")({
  padding: "1.5rem 5rem",
  display: "flex",
  width: "100%",
  backgroundColor: "#FFFDFD",
  boxShadow: "0 3px 5px rgba(0,0,0,.3)",
  "@media (max-width: 600px)": {

  }
});

export const navbar = styled("nav")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  svg: {
    color: "#545454",
    fontSize: "3.6rem",
    cursor: "pointer"
  },
});

export const logo = styled('div')({
  width: "15rem",
  height: "auto",
  position: "relative",
  "@media (max-width: 600px)": {
    width: "10rem",
  },
  img: {
    width: "100%",
  }
});

interface IconeHamburguerProps {
  toggleMenu: boolean;
}

export const IconeHamburguer = styled('div')<IconeHamburguerProps>(({ toggleMenu }) => ({
  cursor: "pointer",
  position: "relative",
  height: "30px",
  width: "38px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: ".3s ease-in-out",

  "& > div": {
    position: 'relative',
    width: "100%",
    height: "4px",
    borderRadius: "2px",
    backgroundColor: "#545454",
    transition: ".3s ease-in-out",

    "&.metade": {
      width: toggleMenu ? "100%" : "70%",
      opacity: toggleMenu ? "0" : "1"
    }
  },

  "& > div:nth-of-type(1)": {
    transformOrigin: 'center',
    transform: toggleMenu ? 'rotate(45deg) translate(7px,7px)' : '',
  },

  "& > div:nth-of-type(3)": {
    transformOrigin: 'center',
    transform: toggleMenu ? 'rotate(-45deg) translate(7px,-7px)' : '',
  },
}));

