export const Label = ({labelFor, name}) => {

    return (
        <label className="body_text gray4" htmlFor={labelFor}>{name}</label>
    )
}

