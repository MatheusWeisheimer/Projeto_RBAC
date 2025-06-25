import styles from "./Iniciativas.module.css"
import data from "../assets/data/iniciativas.json"
import ProjetoCard from "./ProjetoCard"

const Iniciativas = () => {
    const cardsJsx = data.map(iniciativa => (
        <ProjetoCard key={iniciativa.desc} data={iniciativa}/>
    ))

    return (
        <section className={styles.iniciativas}>
            <h2>Conheca nossos projetos e iniciativas</h2>
            <div className={styles.cardsContainer}>
                { cardsJsx }
            </div>
        </section>
    )
}

export default Iniciativas