import { createTheme, styled } from "@mui/material";

const theme = createTheme();

export const header = styled("header")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99,
  padding: "1rem 5rem",
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
  width: "20rem",
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
  position: "relative",

  "& .iconeHamburguer": {
    cursor: "pointer",
    height: "30px",
    width: "35px",
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
    },
  
    "& > div:nth-of-type(1)": {
      width: toggleMenu ? "100%" : "70%",
      transform: toggleMenu ? 'rotate(45deg) translate(10px, 10px)' : '',
    },
  
    "& > div:nth-of-type(2)": {
      opacity: toggleMenu ? "0" : "1",
    },
  
    "& > div:nth-of-type(3)": {
      width: toggleMenu ? "100%" : "70%",
      transform: toggleMenu ? 'rotate(-45deg) translate(8px,-9px)' : '',
    },
  }
}));

export const MenuAberto = styled('div')({
  display: "grid",
  position: "absolute",
  top: "150%",
  right: "50%",
  zIndex: "99",
  backgroundColor: "#FFFDFD",
  boxShadow: "0px 0px 1.6rem rgba(0,0,0,.4)",
  borderRadius: theme.spacing(1.2),
  backdropFilter: "blur(1rem)",
  transition: "visibility .3s ease-in-out",
  visibility: "hidden",
  "&.aberto": {
    visibility: "visible",
  },
  "ul": {
    "& > li":{
      "&:first-of-type a:hover": {
        borderTopLeftRadius: theme.spacing(1.2),
        borderTopRightRadius: theme.spacing(1.2)
      },
      "&:last-of-type a:hover":{
        borderBottomLeftRadius: theme.spacing(1.2),
        borderBottomRightRadius: theme.spacing(1.2)
      },
      "& a": {
        color: "#545454",
        display: "grid",
        gridTemplateColumns: "20% 70%",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: theme.spacing(2.5),
        padding: theme.spacing(1, 5),
        transition: ".5s ease",
        "&:hover": {
          backgroundColor: "rgb(200, 200, 200)",
        },
        "& svg path, & svg g": {
          fontSize: theme.spacing(3),
        }
      },
    },
  },  
});