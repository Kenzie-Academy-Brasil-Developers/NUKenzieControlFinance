import { useState } from "react"
import { Select } from "./Select/index"
import { Button } from "./Button/index"
import { Label } from "./Label"
import { Input } from "./Input"
import styles from "./style.module.scss"


export const Form = ({addCard}) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    const submit = (event) =>{
        event.preventDefault()
        addCard({description, value, type})
        setDescription("")
        setValue("")
        setType("Entrada")
    }


    return (
        <div className={styles.form_box}>
            <form onSubmit={submit}>
                <Label labelFor={"description"} name={"Descrição"}/>
                <Input placeholder="Digita aqui sua descrição..." type="text" id="description" value={description} setValue={setDescription} required={true} />
                <p className="body_text">Ex: Compra de roupas</p>
                <Label labelFor={"valueNumber"} name={"Valor (R$)"}/>
                <Input placeholder="1" type="number" id="valueNumber" value={value} setValue={setValue} required={true} />
                <Select id="typeValue" labelName="Tipo de Valor"
                setValue={setType}>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </Select>
                <Button text="Inserir Valor"/>
            </form>
        </div>
    )
}