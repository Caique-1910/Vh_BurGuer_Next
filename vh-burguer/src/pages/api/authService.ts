import { api } from "./api";

export async function login(email: string, senha:string){
    try{
        const response = await api.post("Autenticacao/login", {email, senha});
        console.log("receba seu doce")
        console.log(response)
    }
    catch(error : any){
        throw new Error("Email ou senha inválidos");
    }
}