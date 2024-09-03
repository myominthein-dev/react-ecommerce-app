import React from 'react'
import Container from './Container'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='dark:bg-gray-800 bg-gray-100 border-slate-400 border-t mt-auto py-3'>
        <Container>
            <div>
                <p className='dark:text-white text-sm px-5   text-center'>Front-end functional website with <p className='inline-flex text-blue-600 font-semibold'>React, Tailwind css and other styling libraries</p></p>
            </div>
        </Container>
    </div>
  )
}

export default Footer