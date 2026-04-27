import Listagem from "../listagem/listagem"
import styles from "./data-table.module.css"


const DataTable = () => {
    return(
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

            <Listagem/>
            <Listagem/>
            <Listagem/>
            <Listagem/>
            <Listagem/>
            <Listagem/>
        </table>
        </>
    )
}


export default DataTable