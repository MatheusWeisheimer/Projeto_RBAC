import styles from "./ProjetoCard.module.css"

const ProjetoCard = ({data}) => {
    return (
        <div className={styles.card}>
            <div 
                style={{backgroundImage: `url(/public/pictures/${data.picture})`}}
                className={styles.cardPicture}
            ></div>
            <div className={styles.textContainer}>
                <h3>{data.header}</h3>
                <p>{data.desc}</p>
                <a
                    href={data.url} 
                    target="blank"
                >Saiba mais</a>
            </div>
        </div>
    )
}

export default ProjetoCard