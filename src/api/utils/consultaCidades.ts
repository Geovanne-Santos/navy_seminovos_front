import axios from "axios";

export const ufUrl = async () => {
    try {
        const response = await axios.get(
            "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
        );
        return response.data;
    } catch (err) {
        console.error(err.message);
    }
}

export const cidadeUrl = async (ufSelecionada: number) => {
    try {
        const response = await axios.get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios`
        );
        return response.data;
    } catch (err) {
        console.error(err.message)
    }
}




