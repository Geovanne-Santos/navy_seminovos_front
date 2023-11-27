import * as Style from "./DetalheCarro.styled";
import { UseGetCarroPorId, UsePutCarro } from "../../api/controllers/carros";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Divider, FormControlLabel, Grid, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { formatarNumero } from "../../components/CarroCard";
import { theme } from "../../theme";
import { MdDelete, MdEdit } from "react-icons/md";

function createData(
    name: string,
    value: number | string
) {
    return { name, value };
}

export const DetalheCarro = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = UseGetCarroPorId(id || "");

    const [disponivel, setDisponivel] = useState(true);
    const [ano, setAno] = useState(0);
    const [preco, setPreco] = useState(0);
    const [combustivelCarro, setCombustivelCarro] = useState(0);
    const [ipvaPago, setIpvaPago] = useState(true);
    const [modeloCarro, setModeloCarro] = useState("");
    const [marcaCarro, setMarcaCarro] = useState("");
    const [grupo, setGrupo] = useState("");
    const [placaCarro, setPlacaCarro] = useState("");
    const [assentos, setAssentos] = useState(0);
    const [potencia, setPotencia] = useState("");
    const [km, setKm] = useState(0);
    const [cambioCarro, setCambioCarro] = useState("");

    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (data) {
            setDisponivel(data.disponivel)
            setAno(data.ano)
            setPreco(data.preco)
            setCombustivelCarro(data.combustivelCarro)
            setIpvaPago(data.ipvaPago)
            setModeloCarro(data.modeloCarro)
            setMarcaCarro(data.marcaCarro)
            setGrupo(data.grupo)
            setPlacaCarro(data.placaCarro)
            setAssentos(data.assentos)
            setPotencia(data.potencia)
            setKm(data.km)
            setCambioCarro(data.cambioCarro)
        }
    }, [data])

    const {mutate} = UsePutCarro();
    const navigate = useNavigate();

    const salvar = () => {
        mutate({
            id: data.id,
            disponivel,
            ano,
            preco,
            combustivelCarro,
            ipvaPago,
            modeloCarro,
            marcaCarro,
            grupo,
            placaCarro,
            assentos,
            potencia,
            km,
            cambioCarro
        })
        navigate(0)
    }

    const rows = [
        createData('Disponível', data?.disponivel ? "Disponível" : "Indisponível"),
        createData('Ano', data?.ano),
        createData('Preço', data?.preco),
        createData('Combustível', data?.combustivelCarro),
        createData('IPVA', data?.ipvaPago ? "Pago" : "Não pago"),
        createData('Modelo', data?.modeloCarro),
        createData('Marca', data?.marcaCarro),
        createData('Grupo', data?.grupo),
        createData('Placa', data?.placaCarro),
        createData('Assentos', data?.assentos),
        createData('Cambio', data?.cambioCarro),
        createData('Potência', data?.potencia),
        createData('Kilometragem', data?.km),
    ];
    return (
        <>
            {data && <Style.BuscarCarroContainer>
                <Style.BuscarCarroGaleria>
                    <Grid container>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ width: '60%' }}><Style.ImagemCarro src={data.imagem} /></div>

                            <div style={{

                                backgroundColor: '#B6B6B6',
                                height: '80%',
                                width: '2px'
                            }} />
                            <div style={{ width: '30%' }}>
                                <Style.textoMarca>{data.modeloCarro}</Style.textoMarca>
                                <h1>{data.marcaCarro}</h1>

                                <h2>R$ {formatarNumero(data.preco)}</h2>

                               
                                  <Style.IconButtonEdit onClick={() => setEdit(true)}><MdEdit /></Style.IconButtonEdit>
                                  <Style.IconButtonDelete><MdDelete /></Style.IconButtonDelete>
                            

                            </div>
                        </div>
                        <h2 style={{ textAlign: 'center', width: '100%', marginBottom: '1.8em' }}>Ficha Técnica</h2>
                        {!edit ? <TableContainer component={Paper} sx={{ marginBottom: 10 }}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <Style.TableCellTitulo component="th" scope="row">
                                                {row.name}
                                            </Style.TableCellTitulo>
                                            <Style.TableCellDado align="right">{row.value}</Style.TableCellDado>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <div>
                            <Style.FormControlLabelCarro control={<Checkbox style={{
                                transform: "scale(1.5)",
                                marginLeft: "8px",
                            }} />} label="Disponível" checked={disponivel} onClick={(a) => setDisponivel(!disponivel)} />
                            <Style.TextFieldCarro size="small" label="Ano" value={ano} type="number" onChange={(a) => setAno(parseInt(a.target.value))} />
                            <Style.TextFieldCarro size="small" label="Preço" value={preco} type="number" onChange={(a) => setPreco(parseInt(a.target.value))} />
                            <Style.TextFieldCarro size="small" label="Combustível" value={combustivelCarro} onChange={(a) => setCombustivelCarro(parseInt(a.target.value))} />
                            <Style.FormControlLabelCarro control={<Checkbox style={{
                                transform: "scale(1.5)",
                                marginLeft: "8px",
                            }} />} label="IPVA" checked={ipvaPago} onClick={(a) => setIpvaPago(!ipvaPago)} />
                            <Style.TextFieldCarro size="small" label="Marca" value={marcaCarro} onChange={(a) => setMarcaCarro(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Modelo" value={modeloCarro} onChange={(a) => setModeloCarro(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Grupo" value={grupo} onChange={(a) => setGrupo(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Placa" value={placaCarro} onChange={(a) => setPlacaCarro(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Cambio" value={cambioCarro} onChange={(a) => setCambioCarro(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Assentos" value={assentos} type="number" onChange={(a) => setAssentos(parseInt(a.target.value))} />
                            <Style.TextFieldCarro size="small" label="Potência" value={potencia} type="number" onChange={(a) => setPotencia(a.target.value)} />
                            <Style.TextFieldCarro size="small" label="Kilometragem" value={km} type="number" onChange={(a) => setKm(parseInt(a.target.value))} />
                            <Style.BtnCarro onClick={() => salvar()} >Salvar</Style.BtnCarro>
                        </div>}

                    </Grid>
                </Style.BuscarCarroGaleria>
            </Style.BuscarCarroContainer>}
        </>
    );
}