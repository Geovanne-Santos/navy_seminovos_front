import axios from "axios";
import { useQuery, useMutation, QueryClient } from "react-query";
import React, { useState } from "react";




const ufUrl = async () => {
    const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    );
    return response.data;
}


console.log(ufUrl)




