import { Button, Checkbox, FormControlLabel, IconButton, TableCell, TextField, styled } from "@mui/material";
import { theme } from "../../theme";

export const BuscarCarroContainer = styled("section")({
    width: "90%",
    margin: "2% 5%",
    
});

export const BuscarCarroGaleria = styled("div")(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(6),
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "80%",
    margin: "0 auto",
}))

export const TextFieldCarro = styled(TextField)(({ theme }) => ({
    width: "100%",
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
    "& .MuiOutlinedInput-input":{
        fontSize: theme.spacing(2),
    },
    "& .MuiInputLabel-formControl":{
        fontSize: theme.spacing(2),
        paddingRight: theme.spacing(1),
        backgroundColor: "#FBFBFF"
    }
}));

export const FormControlLabelCarro = styled(FormControlLabel)(({ theme }) => ({
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
    "& .MuiTypography-body1":{
        fontSize: theme.spacing(2),
    },
    "& .MuiInputLabel-formControl":{
        fontSize: theme.spacing(2),
        paddingRight: theme.spacing(1),
        backgroundColor: "#FBFBFF"
    }
}));

export const BtnCarro = styled(Button)(({ theme }) => ({
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(5),
    width: '100%',
    borderRadius: '20px',
    
    backgroundColor: '#4444E8',
    color: '#fff',
    
    "&:hover":{
        backgroundColor: theme.palette.primary.main,
    }
    
}));

export const ImagemCarro = styled("img")({
    height: "80%",
    borderRadius: '10px',
    width: "100%"
});

export const TableCellTitulo = styled(TableCell)(({ theme }) => ({
    fontSize: theme.spacing(2),
    fontWeight: '600'
}))

export const TableCellDado = styled(TableCell)(({ theme }) => ({
    fontSize: theme.spacing(2),
}))

export const textoMarca = styled("p")(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: '600',
    letterSpacing: '-0.2px'
}))

export const IconButtonEdit = styled(IconButton)({
    width: '100%',
    borderRadius: '20px',
    backgroundColor: '#4444E8',
    color: '#fff',
    marginTop: theme.spacing(4),
    "&:hover":{
        backgroundColor: '#B5B5B5',
    }
    
})

export const IconButtonDelete = styled(IconButton)({
    width: '100%',
    borderRadius: '20px',
    color: '#fff',
    backgroundColor: '#B5151C',
    marginTop: theme.spacing(2),
    "&:hover":{
        backgroundColor: '#B5B5B5',
    
        
    }
})