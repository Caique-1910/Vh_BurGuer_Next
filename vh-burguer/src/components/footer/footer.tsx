import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div id={styles.nav_imgs}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer" id={styles.logo} />

                <nav id={styles.nav_footer}>
                    <img id={styles.icones} src="../imgs/tiktok.png" alt="" />
                    <img id={styles.icones} src="../imgs/face.png" alt="" />
                    <img id={styles.icones} src="../imgs/insta.png" alt="" />
                    <img id={styles.icones} src="../imgs/youtube.png" alt="" />
                </nav>
            </div>

            
            <hr></hr>
            

            <p>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer;