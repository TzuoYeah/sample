import react  from "react"

import Sidebar from './ActionMenu/Sidebar'
import MemberInfo from './ActionMenu/MemberInfo'
import OperationPanel from './ActionMenu/OperationPanel'
import sidebar from '../data/sidebar.json'


export default function ActionMenu(){
    return(
        <article className='sticky-top'>
          <MemberInfo {...{ name:"10《10》",introduction:"#0726",headshot:"http://fakeimg.pl/200x200"}}/>
          <OperationPanel />
          {/* <Sidebar itemList={sidebar}/> */}
        </article>
    )
}