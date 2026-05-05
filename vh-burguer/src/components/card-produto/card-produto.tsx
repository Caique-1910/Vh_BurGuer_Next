import { formatarPreco } from "@/utils/formatacao";
import styles from "./card-produto.module.css"
import Link from "next/link";

interface Produto {
    titulo: string,
    descricao: string,
    preco: number,
    img: string,
    produtoID: number
}


const CardProduto = ({ titulo, descricao, preco, img, produtoID }: Produto) => {
    return (
        <article className={styles.card_produto}>
            <Link href={"/detalhe-produto/" + produtoID}>
                <img src={img} alt="Produto vendido pela loja." className={styles.img_produto} />
            </Link>

            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                <Link href={"/historico/" + produtoID}>
                    <button>
                        <img src="/imgs/info.png" alt="" />
                    </button>
                </Link>

                <button>
                    <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                </button>

                <button>
                    <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                </button>
                
            </div>
        </article>
    )
}

export default CardProduto;