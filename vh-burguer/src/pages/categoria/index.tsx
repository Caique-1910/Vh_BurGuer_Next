import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./categoria.module.css"
import Link from "next/link";

const Categoria = () => {
    return(
        <>
            <SubHeader/>
            <main className={styles.cont_prin}>
                <h2>CRIAR CATEGORIA</h2>
                <form action="" className={styles.forms}>
                    <label htmlFor="" className={styles.label}>Nome categoria</label>
                    <input type="text" placeholder="Premium" className={styles.input} />
                </form>

                <div className={styles.div_btns}>
                    <button className={styles.btn_sal}>Salvar</button>
                    <button className={styles.btn_canc}>Cancelar</button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Categoria;