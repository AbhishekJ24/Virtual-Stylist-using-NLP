'use client'
import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className='teal-bg flex justify-between items-center p-6 border-b-teal-500 border-b-2 text-2xl'>
                <div>
                    <Link href='/'>
                        <img className='h-11' src='logo.png' alt='LOGO' />
                    </Link>
                </div>
                <div className='flex items-center gap-8 text-lg'>
                    <div>
                        <span className='font-semibold'>User: </span>
                        <button className='bg-teal-500 border-gray-600 border-2 rounded-lg pt-1 pb-1 pl-2 pr-2 ml-2 mr-2 hover:bg-teal-600'>Abhishek Joshi</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
