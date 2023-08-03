import { Card } from "./Card"

export const List = ({noteList, remove}) => {

    return (
        <div>
            <h2 className="title three">Resumo financeiro</h2>
            {noteList.length > 0 ? (<ul>
                {noteList.map((note) => (
                    <Card remove={remove} key={note.id} id={note.id} description={note.description} value={"R$ " + (Number(note.value)).toFixed(2)} type={note.type}/>
                ))}
            </ul>) : <p className="title two">Você ainda não possui nenhum lançamento</p>}
        </div>
    )
}