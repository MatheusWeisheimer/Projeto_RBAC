import styles from "./Header.module.css"

const Header = () => {
    const handleClick = () => {
        window.location.href = 'https://aprendizagemcriativa.org/user/register?destination=/';
    };

    return (
        <header>
            <div className={styles.header}>
                <img className={styles.rbacLogo} src="/svgs/RBAC_HORIZONTAL.svg"/>
                <button 
                    onClick={handleClick}
                    className={styles.btn}
                >Faça parte da nossa rede</button>
            </div>
        </header>
    )
}

export default Header