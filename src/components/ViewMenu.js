import react  from "react"

import Fall from './ViewMenu/Fall'
import recipes from '../data/recipes.json'

export default function ViewMenu(){
    return(
        <article className='col border bg-light border-warning'>
          <div className='row border'>
            <div className='col bg-light border sticky-top'>閱覽模式</div>
            <Fall recipes={recipes}/>
          </div>
        </article>
    )
}