import React from 'react'
import TopBar from '@components/layout/TopBar'
import RightSideBar from './RightSideBar'

const MainContainer = ({children}) => {
  return (
    <div className='flex justify-center p-20 bg-zinc-800 h-full w-full'>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainContainer