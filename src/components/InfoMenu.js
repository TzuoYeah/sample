import react  from "react"

import Sidebar from './InfoMenu/Sidebar'
import MemberInfo from './InfoMenu/MemberInfo'
import sidebar from '../data/sidebar.json'

let style = {resize: "none",backgroundColor:"#333",color:"white"}

export default function InfoMenu(){
    return(
      <article className='col-4 bg-light border border-warning'>
        <div className='sticky-top'>
          <MemberInfo {...{ name:"@使用者",introduction:"自介自介自介自介自介自介自介自介(32/140)",headshot:"http://fakeimg.pl/200x200"}}/>
          <Sidebar itemList={sidebar}/>

          <div className="row p-3">
            <textarea style={style}></textarea>
          </div>

        </div>
      </article>
    )
}