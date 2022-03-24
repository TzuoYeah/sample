import react  from "react"
import Paste from "./Fall/Paste"


export default function Fall({pastes}){
    return(
        <div className="recipes">
            {pastes.map((paste,i)=>(<Paste key={i} {...paste} />))}
        </div>
    )
}