import { formatarPreco } from "@/utils/formatacao";
import styles from "./listagem.module.css"

type dados = {
    dataAlteracao:string;
    nomeAnterior: string;
    precoAnterior:number;
}

const Listagem = ({dataAlteracao, nomeAnterior, precoAnterior} : dados) => {
    return(
        <>
           <tr className={styles.linhas}>
            <td>{dataAlteracao}</td>
            <td>{nomeAnterior}</td>
            <td>{formatarPreco(precoAnterior)}</td>
            </tr>
        </>
    )
}


export default Listagem