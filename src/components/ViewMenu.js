import react  from "react"
import { useMode } from '../Hook/Mode-hooks'
import Fall from './ViewMenu/Fall'
import pastes from '../data/pastes.json'

export default function ViewMenu(){
  const {viewMode} = useMode()
  const modeName ={
    posts:"貼文模式",
    board:"看板列表"
  }
  return(
        <article className='row row-cols-1'>
          <div className='col bg-white border-bottom sticky-top py-2 fs-5'>{modeName[viewMode]}</div>
          <Fall pastes={pastes}/>
        </article>
  )
}