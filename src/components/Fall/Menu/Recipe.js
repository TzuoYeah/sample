import react  from "react"
import IngredientList from "./InstrutionsList"
import Instrutions from "./Instrutions"

export default function Recipe({name, ingredients, steps}){
    return(
        <section id="backed-salmon" className="border rounded-3 m-3 p-3">
            <h1>{name}</h1>
            <IngredientList list={ingredients}/>
            <Instrutions title="Cooking Instructions" steps={steps}/>
        </section>
    )
}
