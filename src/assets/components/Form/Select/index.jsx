import styles from "./style.module.scss"

export const Select = ({children, id, labelName, setValue}) => {

    
    return (
        <div className={styles.select_default}>
            <label className="body_text gray4"  htmlFor={id}>{labelName}</label>
            <select onChange={(event) => setValue(event.target.value)} className="body_text gray4"  id={id}>
                {children}
            </select>
        </div>
        
    )
}