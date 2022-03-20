import react  from "react"

import TagList from './OtherInfo/TagList'
import Footer from './OtherInfo/Footer'

export default function OtherInfo(){
    return(
        <article className='col-lg-2 border border-warning bg-light d-none d-lg-block'>
          <div className='col bg-light sticky-top'>
            <TagList />
            <Footer />
          </div>
        </article>
    )
}