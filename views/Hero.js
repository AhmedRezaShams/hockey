import ImageCarousel from '@/components/carousel'
import React from 'react'

const images = [
    "/1.png",
    "/2.png",
    "/2.png",
];

function Hero() {
    return (
        <div className="py-4">
            <div className="relative flex">
                {/* Carousel with relative wrapper */}
                <ImageCarousel images={images} />

                {/* Overlay inside the same relative wrapper */}
                <div className="absolute inset-0 flex items-end justify-end z-10 bg-black/50 px-3 py">
                    <div className="w-[566px] h-[165px] bg-[#131318] rounded-2xl p-6 text-center">
                        <h1 className="font-extrabold text-2xl text-white mb-2">
                            Meet all the heroes from the field
                        </h1>
                        <p className="font-medium text-lg text-white opacity-60">
                            Dit amet consectetur. Condimentum dignissim adipiscing aliquam
                            turpis placerat dolor. Purus urna in sit nullam proin.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero
