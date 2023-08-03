import { Header } from "../Header/index"

export const TemplatePage = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}