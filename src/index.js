import React from 'react'
import { render } from 'react-dom'

import InfoMenu from './components/InfoMenu'
import Fall from './components/Fall'
import OtherInfo from './components/OtherInfo'

let left_menu = {minWidth:"300px",maxWidth:"300px"}

render(
    <div className='container-xxl'>
      <div className='row bg-secondary'>
            <OtherInfo />
            <Fall />
          <InfoMenu />
      </div>
    </div>
  ,document.getElementById('root')
)
