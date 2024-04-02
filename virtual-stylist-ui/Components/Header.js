import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
     <div className='nav-bar flex justify-between items-center p-7'>
        <div>
             <Link href='/'>
                <img src='' alt='LOGO'/>
             </Link>
        </div>
        <div>
            <ul className='flex gap-14'>
                <li className='nav-links'> <Link href='/'> Home </Link></li>
                <li className='nav-links'> <Link href='/Chat'> Chat </Link></li>
                <li className='nav-links'> <Link href='/About'> About </Link> </li>
            </ul>
        </div>
    </div> 
    </>
  )
}

export default Header
