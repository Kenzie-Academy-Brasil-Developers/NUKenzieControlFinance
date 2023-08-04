import { TemplatePage } from "../TemplatePage"
import { Form } from "../Form/index"
import { List } from "../List/index"
import { TotalMoney } from "../TotalMoney/index"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./style.module.scss"

export const MainPage = () => {
    const [noteList, setNoteList] = useState([])

    const addCard = (formData) => {
        const newNote = {...formData, id: uuidv4()}
        setNoteList([...noteList, newNote])
    }

    const removeCard = (removeId) => {
        const newNoteList = noteList.filter(note => note.id !== removeId )
        setNoteList(newNoteList)
    }

    const totalValue = noteList.reduce((prevValue, note) => {
        if (note.type == "Entrada") {
            return prevValue + Number(note.value)
        } else {
            return prevValue - Number(note.value)
        }
    }, 0)

    return (
        <>  

            <TemplatePage>
                    <section className="container">
                        <div className={styles.flex_box}>
                            <div>
                                <Form addCard={addCard}/>
                                <TotalMoney noteList={noteList} finalValue={"R$ " + (totalValue.toFixed(2))}/>
                            </div>
                            <div>
                                <List remove={removeCard} noteList={noteList}/>
                            </div>
                        </div>
                </section>
            </TemplatePage>
        </>
    )
}