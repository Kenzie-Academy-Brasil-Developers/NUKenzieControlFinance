import styles from "./style.module.scss"

export const Input = ({placeholder, type, id, value, setValue, required}) => {
    return (
        <div className={styles.input_default}>
            <input className="headline input_default" required={required} placeholder={placeholder} type={type} id={id} value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
        
    )
}