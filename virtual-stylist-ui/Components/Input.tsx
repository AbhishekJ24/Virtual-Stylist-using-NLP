import React from 'react'
import { Button } from 'react-bootstrap'

const Input = () => {
    return (
        <>
            <div className='teal-bg text-white  border-t-teal-500 border-t-2 flex justify-between items-center p-5'>
                <input className='bg-transparent w-4/5 p-2 text-wrap focus:outline-none focus:border-none' type="text" name="chat-input" id="chat-input" placeholder='Enter your text' />
                <Button id='submit-btn'><img className='invert h-8' src="submit.gif" alt="SUBMIT" /></Button>
            </div>
        </>
    )
}

export default Input
