import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./detalhe-produto.module.css"
import { useEffect, useState } from "react";
import { listarPorId } from "@/pages/api/produtoService";
import { useParams } from "next/navigation";
import { formatarPreco } from "@/utils/formatacao";

interface Produto {
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    categorias: string[]
}


const Detalhe = () => {

    const [produto, setProduto] = useState<Produto>();

    const params = useParams();

    const id = params?.id;

    async function listarProduto() {
        try {
            const response = await listarPorId(Number(id));
            console.log(produto?.categorias);
            setProduto(response);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            listarProduto();
        }, 1000);
    }, [id]);

    return (
        <>
            <SubHeader />
            <main id={styles.conteudoPrin}>
                {produto ? (
                    <>
                        <div id={styles.informacoes}>
                            <div id={styles.part_superior}>
                                <h3 className={styles.titulo}>Detalhes do {produto.nome}</h3>
                                <img id={styles.imagem} src={produto.imagemUrl} alt="" />
                            </div>

                            <div id={styles.part_inferior}>
                                <div className={styles.esquerda}>
                                    <div>
                                        <h3>Nome do produto</h3>
                                        <p>{produto.nome}</p>
                                    </div>

                                    <div>
                                        <h3>Descrição:</h3>
                                        <p>{produto.descricao}.</p>
                                    </div>
                                </div>

                                <div className={styles.direita}>
                                    <div>
                                        <h3>Preço (R$)</h3>
                                        <p>{formatarPreco(produto.preco)}</p>
                                    </div>

                                    <div>
                                        <h3>Categorias</h3>
                                        <ul className={styles.lista}>
                                            { produto.categorias.map((cat) => (
                                                <li key={cat}> {cat} </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (<p>Carregando produto...</p>)}
            </main>
            <Footer />
        </>
    )
}

export default Detalhe