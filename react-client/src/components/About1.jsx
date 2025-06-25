import styles from "./About1.module.css"

const About1 = () => {
    return(
        <section>
            <div className={styles.pictureBackground}>
                <div className={styles.textContainer}>
                    <h2>APRENDIZAGEM CRIATIVA<br/>EM PORTO ALEGRE</h2>
                    <p>Conectando educadores, estudantes e iniciativas que transformam a educação através de criatividade, colaboração e mão na massa</p>
                </div>
            </div>
        </section>
    )
}

export default About1