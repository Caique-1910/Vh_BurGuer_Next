import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./home.module.css"
import ListaProduto from "@/components/lista-produto/lista-produto";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section id={styles.banner}>

                    <div id={styles.superior_banner}>
                        <h1 >BEM-VINDO AO VH BURGUER</h1>
                        <img src="./imgs/foto_de_hamburgueres.png" alt="" />
                    </div>

                    <div id={styles.div_botoes}>
                        <button id={styles.btn_chamar}>Chamar atendente</button>
                        <button id={styles.btn_ver}> Ver cardápio</button>
                    </div>
                </section>

                <section id={styles.destaques}>

                    <div id={styles.cards_destaques}>
                        <div id={styles.div_maispedidos}>
                            <p>Os queridinhos da galera</p>
                            <h2> MAIS PEDIDOS</h2>
                        </div>

                        <div id={styles.div_bacon_combos}>

                            <div id={styles.div_bacon}>
                                <p>Lanches com</p>
                                <h2>MUITO BACON</h2>
                            </div>

                            <div id={styles.div_combos}>
                                <p>Se tiver muita fome</p>
                                <h2>SUPER COMBOS</h2>
                            </div>

                        </div>
                    </div>
                </section>

                 <section id={styles.cardapio}>
                    <div className={`${styles.container_cardapio} layout_guide`}>
                        <h2>Cardápio</h2>
                        {/* chamar componente da lista */}
                        <ListaProduto/>
                    </div>
                </section>

                <section id={styles.unidade}>

                    <div id={styles.unidade_img_list}>

                        <img src="./imgs/unidade.jpeg" alt="" />

                        <div id={styles.unidades_textos}>
                            <h2>NOSSAS UNIDADES</h2>
                            <ul>
                                <li>Centro – Av. Aurora, 742</li>
                                <li>Jardim – Av. das Palmeiras, 1280</li>
                                <li>Norte – Av. Horizonte, 305</li>
                                <li>Sul – Av. Nova Esperança, 910</li>
                            </ul>
                        </div>


                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;