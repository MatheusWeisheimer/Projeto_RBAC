import styles from "./Footer.module.css"

const Footer = ({ explainState, explainOptions }) => {
    return (
        <footer
            style={{background: explainOptions[explainState].color}}
            className={styles.footer}
        >
            <p>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul<br/>2025</p>
        </footer>
    )
}

export default Footer