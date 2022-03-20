import react  from "react"
import Recipe from "./Menu/Recipe"

export default function Menu({recipes}){
    return(
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes border">
                {recipes.map((recipe,i)=>(<Recipe key={i} {...recipe} />))}
            </div>
        </article>
    )
}