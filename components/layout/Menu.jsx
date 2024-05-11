import Link from 'next/link';
import React from 'react'

const MenuItems = [
    {
        label: "Home",
        route: "/home",
    },
    {
        label: "Explore",
        route: "/explore"
    },
    {
        label: "Profile",
        route: "/profile"
    },
];

const Menu = () => {
  return (
    <div className=' flex flex-col gap-4 my-10 py-10 text-center'>
        {
            MenuItems.map( (element, index) => {
                return <Link href={element.route} key={index}>
                    <button className=' font-mono h-8 w-3/6  text-center rounded-md hover:bg-zinc-900 '>
                        {element.label}
                    </button>
                </Link>
            })
        }
    </div>
  )
}

export default Menu