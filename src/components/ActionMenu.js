import react  from "react"

import Sidebar from './ActionMenu/Sidebar'
import MemberInfo from './ActionMenu/MemberInfo'
import WorkPanel from './ActionMenu/WorkPanel'
import ToggleProvider from '../Hook/Toggle-hooks'
import sidebarData from '../data/sidebar.json'


export default function ActionMenu(){
    return(
        <article className='sticky-top'>
          <MemberInfo {...{ name:"10《10》",introduction:"#0726",headshot:"http://fakeimg.pl/200x200"}}/>
          <ToggleProvider>
            <WorkPanel />
          </ToggleProvider>
          {/* <Sidebar itemList={sidebar}/> */}
        </article>
    )
}