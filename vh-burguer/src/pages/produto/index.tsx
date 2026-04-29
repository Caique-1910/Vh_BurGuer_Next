import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./produto.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";

interface Categoria {
    categoriaID: number,
    nome: string
}


const Produto = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);
    


    async function listarCategoriaEmProduto() {
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function Cadastrar(e: React.FormEvent.<HTMLFormElement>) {
        e.preventDefault;
        try{
            const dados ={
                nome,
                descricao,
                preco,
                imagem,
                categoriasIds: categoriasSelecionadas
            }

            cadastrarProduto(dados);
        } 
        catch(error:any){
            console.log(error.message)
        }
    }

    useEffect(() => {
        listarCategoriaEmProduto();
    }, [])



    return (
        <>
            <SubHeader />
            <main className={styles.conteudoPrin}>
                <h2>CRIAR PRODUTO</h2>

                <form action="" className={styles.forms}>

                    <div className={styles.camp_nome}>
                        <label htmlFor="" className={styles.label}>Nome do produto</label>
                        <input type="text" placeholder="BBQ Especial" className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className={styles.camp_descri}>
                        <label htmlFor="" className={styles.label}>Descrição</label>
                        <textarea name="" id="" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada" className={styles.caixaTexto} value={descricao} onChange={(e) => setDescricao(e.target.value)} >
                        </textarea>
                </div>

                <div className={styles.camp_prec}>
                    <label htmlFor="" className={styles.label}>Preço(R$)</label>
                    <input type="text" placeholder="40,00" className={styles.input} value={preco} onChange={(e) => setPreco(e.target.value)}/>
                </div>

                <div className={styles.camp_cat}>
                    <label htmlFor="" className={styles.label}>Categoria</label>
                    <select className={styles.input} multiple onChange={(e)=> setCategoriasSelecionadas(
                        Array.from(e.target.selectedOptions).map((option)=>Number(option.value))
                    )}>
                        {categorias.map((item) => (
                            <option value={item.categoriaID} key={item.categoriaID}>
                                {item.nome}
                            </option>))}
                    </select>
                    <div className={styles.div_link}>
                        <Link href="./categoria" className={styles.link}>Adicionar categoria</Link>
                    </div>
                </div>

                <div className={styles.camp_img}>
                    <label htmlFor="" className={styles.label}>URL da imagem</label>
                    <input type="file" className={styles.input_file} onChange={(e) => {
                        if(e.target.files && e.target.files[0])
                        {
                            setImagem(e.target.files[0])
                        }
                    }}/>
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