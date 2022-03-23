import react  from "react"
import Paste from "./Fall/Paste"

export default function Fall({recipes}){
    return(
        <div className="recipes border">
            {recipes.map((recipe,i)=>(<Paste key={i} {...recipe} />))}
        </div>
    )
}