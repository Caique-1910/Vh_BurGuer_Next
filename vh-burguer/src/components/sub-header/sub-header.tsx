import Link from "next/link";
import styles from "./sub-header.module.css";

const SubHeader = () => {
    return (
        <header id={styles.subheader}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer" id={styles.logo}/>
                <Link className={styles.link_voltar} href="./home#cardapio">Voltar</Link>
        </header>
    )
}

export default SubHeader;