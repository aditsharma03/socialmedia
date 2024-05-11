import React from 'react'
import TopBar from '@components/layout/TopBar'
import RightSideBar from './RightSideBar'

const MainContainer = ({children}) => {
  return (
    <div className='flex bg-zinc-800 h-full w-full'>
    <section >
      {/* <RightSideBar /> */}
    </section>
    {children}
    </div>
  )
}

export default MainContainer