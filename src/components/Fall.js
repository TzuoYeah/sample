import react  from "react"

import Menu from './Fall/Menu'
import recipes from '../data/recipes.json'


export default function Fall(){
    return(
        <article className='col border bg-light border-warning'>
          <div className='row border'>
            <div className='col bg-light border sticky-top'>Page Name</div>
            <Menu recipes={recipes}/>
          </div>
        </article>
    )
}