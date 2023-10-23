"use client";
import { styled } from "@mui/material";

export const header = styled("header")({
  padding: "1.5rem 5rem",
  display: "flex",
  width: "100%",
  backgroundColor: "#FFFDFD",
  boxShadow: "0 3px 5px rgba(0,0,0,.3)"
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
