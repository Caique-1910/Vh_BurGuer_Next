import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./categoria.module.css"
import React, { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";
import { ToastContainer, toast } from "react-toastify";
import { Fragment } from "react/jsx-runtime";
import { matchesGlob } from "path";

const Categoria = () => {

      const[categoria, setCategoria] = useState<string>("");

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await cadastrarCategoria(categoria);
            notificacao("Cadastro realizado com sucesso!");
        }catch(error: any){
            erro(error.message);
        }
    }


    return(
        <>
            <ToastContainer/>
            <SubHeader/>
            <main className={styles.cont_prin}>
                <h2>CRIAR CATEGORIA</h2>
                <form action="" className={styles.forms} onSubmit={cadastrar}>
                    <label htmlFor="" className={styles.label}>Nome categoria</label>
                    <input type="text" placeholder="Premium" className={styles.input} value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                <div className={styles.div_btns}>
                    <button className={styles.btn_sal} type="submit">Salvar</button>
                    <button className={styles.btn_canc} type="reset">Cancelar</button>
                </div>
                </form>

            </main>
            <Footer/>
        </>
    )
}

export default Categoria;