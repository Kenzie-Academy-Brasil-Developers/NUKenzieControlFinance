import styles from "./style.module.scss"

export const TotalMoney = ({finalValue}) => {
    return (
        <div className={styles.total_box}>
            <div>
                <h3 className="title three">Valor Total</h3>
                <p className="title three_primary">{finalValue}</p>
            </div>
            <p className="body_text gray4">O valor se refere ao saldo</p>
        </div>
    )
}