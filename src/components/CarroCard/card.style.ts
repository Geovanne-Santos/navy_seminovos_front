import { IconButton, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const CarroCard = styled('div')({
    padding: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: theme.spacing(4.5),
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
    "& img": {
        width: "100%",
        borderRadius: theme.spacing(4.5)
    },
    "& .informacaoCard": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
        "& h1": {
            fontSize: theme.spacing(3),
            color: "#4444E8"
        },
        "& h2": {
            fontSize: theme.spacing(2.5)
        },
        "& > div": {
            display: "flex",
            gap: theme.spacing(2),
            "& span:nth-of-type(2)": {
                borderLeft: "2px solid #B6B6B6",
                borderRight: "2px solid #B6B6B6",
                padding: theme.spacing(0, 2)
            }
        },
        "& span": {
            display: "flex",
            gap: "4px",
            alignItems: "center",
        },
        "& .preco": {
            fontWeight: "bold",
            fontSize: theme.spacing(3.5),
            textAlign: "center"
        }
    }
})

export const IconButtonEdit = styled(IconButton)({
    width: '100%',
    borderRadius: '20px',
    color: '#fff',
    backgroundColor: '#4444E8',
    
    "&:hover":{
        backgroundColor: '#F5F5F5',
        color: '#757575',
    }
    
})

export const IconButtonDelete = styled(IconButton)({
    width: '100%',
    borderRadius: '20px',
    backgroundColor: '#F5F5F5',
    color: '#757575',
    
    "&:hover":{
        color: '#fff',
        backgroundColor: '#B5151C'
    }
})