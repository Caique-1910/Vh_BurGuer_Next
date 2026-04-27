import DataTable from "@/components/data-table/data-table"
import Footer from "@/components/footer/footer"
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./historico.module.css"


const Historico = () =>{
    return(
        <>
            <SubHeader/>
            <main id={styles.contPrin}>
            <h3>Histórico de alterações: Monstro</h3>
            <DataTable/>
            </main>
            <Footer/>
        </>
    )
}


export default Historico