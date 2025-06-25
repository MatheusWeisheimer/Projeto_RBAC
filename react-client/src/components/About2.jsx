import { useState } from "react"
import styles from "./About2.module.css"

const About2 = () => {
    const [explainState, setExplainState] = useState(0)
    
    const explainOptions = [
        {
            text: "Menos teoria, mais ação. É hora de modelar, construir, programar e testar pra valer. Seus projetos, suas regras.",
            color: "rgba(255, 208, 33, 0.35)"
        },
        {
            text: "Suas paixões, suas histórias e até suas ideias mais malucas são bem-vindas. Use a criatividade para deixar sua marca no mundo.",
            color: "rgba(60, 152, 244, 0.35)"
        },
        {
            text: "Troque ideias, encontre parceiros, junte seu talento ao de outros e descubra o poder de criar em equipe.",
            color: "rgba(54, 202, 86, 0.35)"
        },
        {
            text: "Desmonte, investigue e teste os limites. Aqui, sua curiosidade é o ponto de partida para as maiores descobertas.",
            color: "rgba(251, 90, 74, 0.35)"
        },
    ]
    
    const explainDynStyles = {
        backgroundColor: explainOptions[explainState].color
    }

    return (
        <section className={styles.about}>
            <h2>O que é Aprendizagem Criativa?</h2>
            <div className={styles.iconsContainer}>
                <div 
                    className={styles.iconGroup}
                    onClick={() => setExplainState(0)}
                    ><img className={styles.icon} src="/svgs/FERRAMENTAS.svg"/>
                    <p>Colocar a mão na massa</p>
                    {explainState === 0 && <img className={styles.arrow} src={`/svgs/arrow${explainState}.svg`}/>}
                </div>
                <div 
                    className={styles.iconGroup}
                    onClick={() => setExplainState(1)}
                    ><img className={styles.icon} src="/svgs/SMILE.svg"/>
                    <p>Deixar a sua marca</p>
                    {explainState === 1 && <img className={styles.arrow} src={`/svgs/arrow${explainState}.svg`}/>}
                </div>
                <div 
                    className={styles.iconGroup}
                    onClick={() => setExplainState(2)}
                    ><img className={styles.icon} src="/svgs/PEOPLE.svg"/>
                    <p>Colaborar para inovar</p>
                    {explainState === 2 && <img className={styles.arrow} src={`/svgs/arrow${explainState}.svg`}/>}
                </div>
                <div 
                    className={styles.iconGroup}
                    onClick={() => setExplainState(3)}                
                    ><img className={styles.icon} src="/svgs/LUPA.svg"/>
                    <p>Explorar o desconhecido</p>
                    {explainState === 3 && <img className={styles.arrow} src={`/svgs/arrow${explainState}.svg`}/>}
                </div>
            </div>
            <p 
                className={styles.explain}
                style={explainDynStyles} 
            >{explainOptions[explainState].text}</p>
        </section>
    )
}

export default About2