import styles from "./About3.module.css"

const About3 = ({ explainState, explainOptions }) => {
    return (
        <section style={{backgroundColor: explainOptions[explainState].color}}>
            <div className={styles.about}>
                <div className={styles.textContainer}>
                    <h2>CBAC</h2>
                    <p>A CBAC (Conferência Brasileira de Aprendizagem Criativa) é um evento que reúne educadores, estudantes e pesquisadores para promover uma educação mais criativa, inclusiva e mão na massa. Sua última edição ocorreu em 2024 no IFRS – Campus Porto Alegre, com apoio da Rede Brasileira de Aprendizagem Criativa, Instituto Catalisador, MIT Media Lab, entre outras instituições parceiras.</p>
                </div>
                <iframe
                    className={styles.youtubeVideo} 
                    src="https://www.youtube.com/embed/5MiEXvAYoiA?si=ka072lcLFy5N0Wkc" 
                    title="YouTube video player"   
                    allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default About3