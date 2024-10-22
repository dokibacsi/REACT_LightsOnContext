import Lampa from "./Lampa"

export default function Jatekter(props){
    return(
        <>
            {
                props.lista.map((element, index) => {
                    return(<Lampa lampa = {element} key = {index} index = {index}/>)
                })
            }
        </>
    )
}
    