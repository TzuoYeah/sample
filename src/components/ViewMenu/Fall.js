import react  from "react"
import { useMode } from '../../Hook/Mode-hooks'
import Paste from "./Fall/Paste"
import List from "./Fall/BoardList"

export default function Fall({pastes}){
    const {viewMode} = useMode()
    if(viewMode==='posts')
    {
        return(
            <div>
                {pastes.map((paste,i)=>(<Paste key={i} {...paste} />))}
            </div>
        )
    }else if(viewMode==='board'){
        return(
            <div>
                <List />
            </div>
        )
    }else{
        return(
            <div>
            </div>
        )
    }
}