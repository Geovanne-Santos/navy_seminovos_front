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


export const IconeHamburguer = styled('div')(( toggleMenu: boolean ) => ({
  cursor: "pointer",
  position: "relative",
  height: "30px",
  width: "38px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: ".3s ease-in-out",
  "& > div": {
    width: "100%",
    height: "4px",
    borderRadius: "2px",
    backgroundColor: "#545454",
    transition: ".3s ease-in-out",
    "&.metade": {
      width: "70%"
    }
  },
  "& > div:nth-of-type(1)": {
    transform: toggleMenu ? 'rotate(45deg)' : 'rotate(0deg)',
    top: toggleMenu ? '10px' : '0',
  },
  "& > div:nth-of-type(2)": {
    opacity: toggleMenu ? '0' : '1',
  },
  "& > div:nth-of-type(3)": {
    transform: toggleMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
    top: toggleMenu ? '-10px' : '0',
  },
  "& > div:nth-of-type(4)": {
    transform: toggleMenu ? 'rotate(0deg)' : 'rotate(0deg)',
  }
}))