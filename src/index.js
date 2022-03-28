import React from 'react'
import { render } from 'react-dom'
import WorkModeProvider from './Hook/Mode-hooks'

import ActionMenu from './components/ActionMenu'
import ViewMenu from './components/ViewMenu'
import OtherInfo from './components/OtherInfo'

render(
    <div className='container-xxl'>
      <div className='row'>
          <WorkModeProvider>
              <div className='col-lg-2 d-none d-lg-block '>
                <OtherInfo />
              </div>
              <div className='col'>
                <ViewMenu />
              </div>
              <div className='col-4 px-4'>
                <ActionMenu />
              </div>
          </WorkModeProvider>
      </div>
    </div>
  ,document.getElementById('root')
)
