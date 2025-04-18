import ImageCarousel from '@/components/carousel'
import React from 'react'

const images = [
    "/1.png",
    "/2.png",
    "/2.png",
];

function Hero() {
    return (
        <div className=''>
            <div className='relative flex'>
                <ImageCarousel images={images} />
            </div>
            <div className='obsolute inset-0'>
                <div className='w-[566] h-[165] bg-[#131318]'>
                    <div>
                        <h1 className='font-extrabold text-2xl text-white'>Meet all the heroes from the field</h1>
                        <p className='font-medium text-lg text-white opacity-60'>Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin. </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Hero
