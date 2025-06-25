import { useState } from "react"
import styles from "./About2.module.css"

const About2 = ({ explainState, setExplainState, explainOptions }) => {
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