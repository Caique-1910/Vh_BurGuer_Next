import secureLocalStorage from "react-secure-storage";

export function verificarAutenticacao(){
    const token = secureLocalStorage.getItem("token");
    
    return !!token;
}