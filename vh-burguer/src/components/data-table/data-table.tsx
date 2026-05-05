import { useEffect, useState } from "react"
import Listagem from "../listagem/listagem"
import styles from "./data-table.module.css"
import { erro } from "@/utils/toast";
import { listarPorIdDoProduto } from "@/pages/api/logProdutoService";
import { useParams } from "next/navigation";

type HistoricoAlteracao = {
    logId: number;
    dataAlteracao: string;
    nomeAnterior: string;
    precoAnterior: number;
}

const DataTable = () => {

    const [historico, setHistorico] = useState<HistoricoAlteracao[]>([]);

    const params = useParams();
    const id = params?.id;

    async function listarHistorico() {
        try {
            const lista = await listarPorIdDoProduto(Number(id));
            setHistorico(lista);
        } catch (error: any) {
            erro(error.message);
        }
    }

    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            listarHistorico();
        }, 1000);
    }, [id]);

    return (
        <>
            <table id={styles.tabela}>
                <tr>
                    <th>Data da alterção</th>
                    <th>Nome anterior</th>
                    <th>Preço Anterior</th>
                </tr>

                <tr>
                    <th><hr className={styles.tracado}></hr></th>
                    <th><hr className={styles.tracado}></hr></th>
                    <th><hr className={styles.tracado}></hr></th>
                </tr>

                {historico === null ? (<p>Carregando o histórico...</p>) : historico.length === 0 ?
                    (
                        <th><p>O produto não contém histórico de alterações</p></th>
                    ) :
                    historico.map((item) => (
                        <Listagem
                            key={item.logId}
                            dataAlteracao={item.dataAlteracao}
                            nomeAnterior={item.nomeAnterior}
                            precoAnterior={item.precoAnterior}
                        />
                    ))
                }
            </table>
        </>
    )
}


export default DataTable