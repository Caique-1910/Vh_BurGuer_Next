import { Fragment } from "react/jsx-runtime";
import styles from './login.module.css'
import { useState } from "react";
import { login } from "../api/authService";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { matchesGlob } from "path";


//Estrutura padrao
const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const noticicacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            noticicacao("Login efetuado");

            setTimeout(() => {
                router.push("/home");
            }, 2000);
        }
        catch (error: any) {
            erro(error.message)
        }
    }

    return (
        <>
            <ToastContainer/>
            <main id={styles.main}>
                <img src="../imgs/hamburguer-login.png" alt="Hámburguer flutuando com os ingredientes" />

                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario} onSubmit={autenticar}>

                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required value={senha} onChange={(e) => setSenha(e.target.value)} />
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