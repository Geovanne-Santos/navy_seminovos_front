import { OutlinedInput, createTheme, styled } from "@mui/material";

const theme = createTheme();

export const BarraPesquisa = styled("div")({
    width: "30%",
})

export const InputPesquisa = styled(OutlinedInput)({
    borderRadius: theme.spacing(9),
    border: "1px solid #A3A3A3",
    background: "#FFF",
    boxShadow: "-2px -2px 9px -1px rgba(0, 0, 0, 0.10) inset",
    fontSize: theme.spacing(2),
    width: "100%",
    "& .iconeBusca": {
        width: theme.spacing(5),
        cursor: "pointer"
    }
})