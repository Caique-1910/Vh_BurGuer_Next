import { Fragment } from "react/jsx-runtime";
import styles from './login.module.css'


//Estrutura padrao
const Login = () => {
    return (
        <>
            <main id={styles.main}>
                <img src="../imgs/hamburguer-login.png" alt="Hámburguer flutuando com os ingredientes" />

                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario}>

                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email@example.com" required />
                        </div>

                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required />
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