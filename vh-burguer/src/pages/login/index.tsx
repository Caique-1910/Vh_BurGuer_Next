import { Fragment } from "react/jsx-runtime";

//Estrutura padrao
const Login = () => {
    return (
        <>
            <main>
                <img src="" alt="" />
                <aside>
                    <h1>Login</h1>
                    <form action="">

                        <div className="camp_form">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email@example.com" required />
                        </div>

                        <div className="camp_form">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********" required />
                        </div>

                        <a href="">Esqueceu sua senha?</a>
                        <button type="submit">Entrar</button>
                    </form>
                </aside>
            </main>
        </>
    )
}


export default Login;