import react  from "react"

import Fall from './ViewMenu/Fall'
import pastes from '../data/pastes.json'

export default function ViewMenu(){
    return(
          <article className='row row-cols-1'>
            <div className='col bg-white border-bottom sticky-top py-2'>閱覽模式</div>
            <Fall pastes={pastes}/>
          </article>
    )
}