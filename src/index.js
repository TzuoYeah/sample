import React from 'react'
import { render } from 'react-dom'

import InfoMenu from './components/ActionMenu'
import ViewMenu from './components/ViewMenu'
import OtherInfo from './components/OtherInfo'

render(
    <div className='container-xxl'>
      <div className='row bg-secondary'>
        <OtherInfo />
        <ViewMenu />
        <InfoMenu />
      </div>
    </div>
  ,document.getElementById('root')
)
