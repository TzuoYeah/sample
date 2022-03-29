import react  from "react"
import { useMode } from '../../Hook/Mode-hooks'
import Paste from "./Fall/Paste"
import List from "./Fall/BoardList"

export default function Fall({pastes}){
    const {viewMode} = useMode()
    if(viewMode==0)
    {
        return(
            <div>
                {pastes.map((paste,i)=>(<Paste key={i} {...paste} />))}
            </div>
        )
    }else{
        return(
            <div>
                <List />
            </div>
        )
    }
}