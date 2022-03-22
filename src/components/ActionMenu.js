import react  from "react"

import Sidebar from './ActionMenu/Sidebar'
import MemberInfo from './ActionMenu/MemberInfo'
import OperationPanel from './ActionMenu/OperationPanel'
import sidebar from '../data/sidebar.json'


export default function InfoMenu(){
    return(
      <article className='col-4 bg-light border border-warning'>
        <div className='sticky-top'>
          <MemberInfo {...{ name:"@使用者",introduction:"自介自介自介自介自介自介自介自介(32/140)",headshot:"http://fakeimg.pl/200x200"}}/>
          <OperationPanel />
          <Sidebar itemList={sidebar}/>
        </div>
      </article>
    )
}