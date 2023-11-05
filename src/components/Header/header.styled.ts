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
  height: "25px",
  width: "35px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: ".3s ease-in-out",
  zIndex: "99",

  "& > div": {
    position: 'relative',
    width: "100%",
    height: "4px",
    borderRadius: "2px",
    backgroundColor: "#545454",
    transition: ".3s ease-in-out",
  },

  "& > div:nth-of-type(1)": {
    width: toggleMenu ? "100%" : "70%",
    transform: toggleMenu ? 'rotate(45deg) translate(8.5px, 7px)' : '',
  },

  "& > div:nth-of-type(2)": {
    opacity: toggleMenu ? "0" : "1",
  },

  "& > div:nth-of-type(3)": {
    width: toggleMenu ? "100%" : "70%",
    transform: toggleMenu ? 'rotate(-45deg) translate(8.5px,-7px)' : '',
  },
}));

export const MenuAberto = styled('div')({
  display: "grid",
  placeItems: "center",
  position: "fixed",
  top: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(187, 184, 184, 0.6%)",
  backdropFilter: "blur(1rem)",
  transition: "visibility .3s ease-in-out",
  visibility: "0",
  "&.aberto": {
    visibility: "1",
  },
  "ul": {
    textAlign: "center"
  }
});