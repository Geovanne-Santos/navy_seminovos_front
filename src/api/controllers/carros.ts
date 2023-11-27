import { useQuery } from 'react-query';
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
