import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./produto.module.css"
import Link from "next/link";

const Produto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.conteudoPrin}>
                <h2>CRIAR PRODUTO</h2>

                <form action="" className={styles.forms}>

                    <div className={styles.camp_nome}>
                        <label htmlFor="" className={styles.label}>Nome do produto</label>
                        <input type="text" placeholder="BBQ Especial" className={styles.input} />
                    </div>

                    <div className={styles.camp_descri}>
                        <label htmlFor="" className={styles.label}>Descrição</label>
                        <textarea name="" id="" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada" className={styles.caixaTexto}>
                        </textarea>
                    </div>

                    <div className={styles.camp_prec}>
                        <label htmlFor="" className={styles.label}>Preço(R$)</label>
                        <input type="text" placeholder="40,00" className={styles.input}/>
                    </div>

                    <div className={styles.camp_cat}>
                        <label htmlFor="" className={styles.label}>Categoria</label>
                        <input type="text" placeholder="Selecione a categoria" className={styles.input} />
                        <div className={styles.div_link}>
                        <Link href="./categoria" className={styles.link}>Adicionar categoria</Link>
                        </div>
                    </div>

                    <div className={styles.camp_img}>
                        <label htmlFor="" className={styles.label}>URL da imagem</label>
                        <input type="text" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-"  className={styles.input}/>
                    </div>
                </form>

                <div className={styles.div_btns}>
                    
                    <button className={styles.btn_sal}>Salvar</button>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Produto