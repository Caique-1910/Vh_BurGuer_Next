import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./produto.module.css"
import Link from "next/link";

const Produto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.conteudoPrin}>
                <h2>Editar/Adicionar produto</h2>

                <form action="">

                    <div className={styles.camp_nome}>
                        <label htmlFor="">Nome do produto</label>
                        <input type="text" placeholder="BBQ Especial" />
                    </div>

                    <div className={styles.camp_descri}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="" id="" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada">
                        </textarea>
                    </div>

                    <div className={styles.camp_prec}>
                        <label htmlFor="">Preço(R$)</label>
                        <input type="text" placeholder="40,00" />
                    </div>

                    <div className={styles.camp_cat}>
                        <label htmlFor="">Categoria</label>
                        <input type="text" placeholder="Selecione a categoria" />
                        <Link href="">Adicionar categoria</Link>
                    </div>

                    <div className={styles.camp_img}>
                        <label htmlFor="">URL da imagem</label>
                        <input type="text" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-" />
                    </div>
                </form>

                <div className={styles.div_btns}>
                    <button className={styles.btn}>Adicionar Promoção</button>
                    <button className={styles.btn}>Salvar</button>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Produto