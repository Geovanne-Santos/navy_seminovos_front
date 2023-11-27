import { useMutation, useQuery } from 'react-query';
import { api } from '../services/axios';
import { CustomError } from '../models/CustomError';
import { CarroDataType } from '../models/Carros';



export const UseGetPorModelo = (texto: string) => {
    return useQuery<string, CustomError, CarroDataType[]>(
        [texto, "carro-modelo"],
        async () => {
            const { data } = await api.get(texto == "" ? "/carros/" : `/carros/modelo/${texto}`);
            return data;
        }
    )
};

export const UseGetCarroPorId = (id: string) => {
    return useQuery<string, CustomError, CarroDataType>(
        [id, "carro"],
        async () => {
            const { data } = await api.get(`/carros/${id}`);
            return data;
        },{
            enabled: id != "" && id != undefined && id != null
        }
    )
};


export const UsePutCarro = () => {
    return useMutation<void, CustomError, CarroDataType>(
        async (dt) => {
            const { data } = await api.put(`/carros/editar`,{data: dt});
            return data;
        }
    )
};

export const UseDeleteCarro = () => {
    return useMutation<void, CustomError, string>(
        async (id) => {
            const { data } = await api.delete(`/carros/deletar/${id}`);
            return data;
        }
    )
};