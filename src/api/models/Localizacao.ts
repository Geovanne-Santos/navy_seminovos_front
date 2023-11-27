export type responseLocalizacaoTexto = {
    formatted_address: string;
    place_id: string;
    geometry: {
        location:{
            lat: number;
            lng: number;
        }
    }
}