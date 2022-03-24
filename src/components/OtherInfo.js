import react  from "react"

import TagList from './OtherInfo/TagList'
import Footer from './OtherInfo/Footer'

export default function OtherInfo(){
    return(
          <article className='col sticky-top'>
            <TagList />
            <Footer />
          </article>
    )
}