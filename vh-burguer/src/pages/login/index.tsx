import { Fragment } from "react/jsx-runtime";
import styles from './login.module.css'
import { useState } from "react";
import { login } from "../api/authService";


//Estrutura padrao
const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try
        {
            login (email, senha);
            console.log("The Conquest");
        }
        catch(e:any){
            alert(e.message);
        }
    }

    return (
        <>
            <main id={styles.main}>
                <img src="../imgs/hamburguer-login.png" alt="Hámburguer flutuando com os ingredientes" />

                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario} onSubmit={autenticar}>

                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email@example.com" required  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        </div>

                        <a id={styles.esq_senha} href="">Esqueceu sua senha?</a>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                
            </main>
        </>
    )
}


export default Login;