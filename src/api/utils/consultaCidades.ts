import axios from "axios";

export const ufUrl = async () => {
    const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    );
    return response.data;
}

export const cidadeUrl = async (ufSelecionada: number) => {
    const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios`
    );
    return response.data;
}




