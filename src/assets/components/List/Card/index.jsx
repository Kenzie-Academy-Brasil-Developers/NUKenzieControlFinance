import styles from "./style.module.scss"

export const Card = ({description, type, value, remove, id}) => {
    return (
        <li className={`${styles.card} ${type == "Entrada" ? styles.green_card : styles.grey_card}`}>
            <div className={styles.gap}> 
                <h3 className="title three">{description}</h3>
                <p className="body_text">{type}</p>
            </div>
            <div className={styles.gap}>
                <p className="body_text gray4">{value}</p>
                <button onClick={() => remove(id)} className="button grey2">Excluir</button>
            </div>
        </li>
    )
}