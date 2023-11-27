import { createContext, useState, useContext, useEffect } from "react";

interface CarrosContextValue {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const CarrosContext = createContext<CarrosContextValue
    | undefined>(undefined);

export const useCarrosContext = () => {
    const carrosContext = useContext(CarrosContext);
    if (carrosContext === undefined) {
        throw new Error('useCarrosContext deve estar dentro da tag CarrosProvider');
    }
    return carrosContext;
};
type Props = {
    children?: React.ReactNode
};
export const CarrosProvider: React.FC<Props> = ({ children }) => {
    const [filtro, setFiltro] = useState("");
    return (
        <CarrosContext.Provider value={{ filtro, setFiltro }}>
            {children}
        </CarrosContext.Provider>
    );
};