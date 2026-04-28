import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./categoria.module.css"
import Link from "next/link";
import React, { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";

const Categoria = () => {

    const [categoria,setCategoria] = useState<string>("");

    function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault;
        cadastrarCategoria(categoria);
    }


    return(
        <>
            <SubHeader/>
            <main className={styles.cont_prin}>
                <h2>CRIAR CATEGORIA</h2>
                <form action="" className={styles.forms} onSubmit={cadastrar}>
                    <label htmlFor="" className={styles.label}>Nome categoria</label>
                    <input type="text" placeholder="Premium" className={styles.input} value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                <div className={styles.div_btns}>
                    <button className={styles.btn_sal} type="submit">Salvar</button>
                    <button className={styles.btn_canc}>Cancelar</button>
                </div>
                </form>

            </main>
            <Footer/>
        </>
    )
}

export default Categoria;