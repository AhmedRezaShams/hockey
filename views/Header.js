import Button from '@/components/button'
import React from 'react'

function Header() {
    return (
        <div className='flex justify-between'>
            <div>
               <h1 className='font-extrabold text-4xl text-black'>Hockey<span className='font-extrabold text-4xl text-orange-600'>'</span>s</h1> 
            </div>
            <div className='w-[407] h-[42] flex justify-between'>
                <h1 className='text-lg font-bold text-[#424247] hover:text-[#FF4240]'>Home</h1>
                <h1 className='text-lg font-bold text-[#424247] hover:text-[#FF4240]'>About</h1>
                <h1 className='text-lg font-bold text-[#424247] hover:text-[#FF4240]'>Pages</h1>
                <h1 className='text-lg font-bold text-[#424247] hover:text-[#FF4240]'>Blog</h1>
                <h1 className='text-lg font-bold text-[#424247] hover:text-[#FF4240]'>Contect</h1>

            </div>
            <div className='w-[196] h-[57] flex'>
                <search></search>
                <Button size='lg'/>
            </div>
        </div>
    )
}

export default Header
