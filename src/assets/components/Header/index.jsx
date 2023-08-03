import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container header">
                <div className={styles.flexBox}>
                    <h1 className="title"><span className="title logo">Nu</span> Kenzie</h1>
                </div>
            </div>
        </header>
    )
}