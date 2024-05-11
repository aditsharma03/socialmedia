import React from 'react'
import Menu from '@components/layout/Menu'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const LeftSideBar = () => {
  return (
    <div className='h-full w-1/4 left-0 top-0 overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden bg-zinc-950'>
      
      <h1 className=' text-2xl font-mono'>
        Minimal Social Media Application
      </h1>
    
    
    
      <div className=' px-5'><hr/></div>
    
      <Menu /> 

      <div className=' px-5'><hr/></div>
    
    

      <div className='h-full flex flex-col justify-end items-end '>
        <SignedIn>
          <button className=' p-2 w-2/3 hover:bg-zinc-900 rounded-md'>
            {/* <UserButton showName /> */}
            <SignOutButton />
          </button>
        </SignedIn>
        <SignedOut>
          <button className=' p-2 w-2/3 hover:bg-zinc-900 rounded-md'>
            <SignInButton />
          </button>
        </SignedOut>
      </div>
    
    

    </div>
  )
}

export default LeftSideBar