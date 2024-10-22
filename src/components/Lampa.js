import { useContext } from "react"
import { KapcsolContext } from "../contexts/KapcsolContext"

export default function Lampa(props){
    const{katt} = useContext(KapcsolContext)
    function kattintas(){
        katt(props.index)
    }
    
    return(
        <div className= {`lampa_${props.lampa ? "fel" : "le"}`} onClick = {kattintas}/>
    )
}