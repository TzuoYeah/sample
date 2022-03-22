import react  from "react"
import Tile from "./Menu/Tile"

export default function Fall({recipes}){
    return(
        <div className="recipes border">
            {recipes.map((recipe,i)=>(<Tile key={i} {...recipe} />))}
        </div>
    )
}