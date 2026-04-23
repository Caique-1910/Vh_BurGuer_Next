import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./detalhe-produto.module.css"

const Detalhe = () => {
    return (
        <>
            <SubHeader/>
            <main id={styles.conteudoPrin}>
                <div id={styles.informacoes}>
                <div id={styles.part_superior}>
                    <h3 className={styles.titulo}>Detalhes do X-Bacon</h3>
                    <img id={styles.imagem} src="./imgs/HamburguerAlcatraComBacon_1-scaled 1.png" alt="" />
                </div>

                <div id={styles.part_inferior}>
                    <div className={styles.esquerda}>
                        <div>
                        <h3>Nome do produto</h3>
                        <p>Monstro</p>
                        </div>

                        <div>
                            <h3>Descrição:</h3>
                            <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                        </div>
                    </div>

                    <div className={styles.direita}>
                        <div>
                            <h3>Preço (R$)</h3>
                            <p>R$45,00</p>
                        </div>

                        <div>
                            <h3>Categoria</h3>
                            <ul>
                                <li>Premium</li>
                                <li>Artesenal</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Detalhe