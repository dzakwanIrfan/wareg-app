'use client'

import Image from "next/image";
import React from "react";

export default function Slider() {
    const images = [
        {src:'/img/hero1.jpg', alt:'hero1'},
        {src:'/img/hero2.jpg', alt:'hero2'},
        {src:'/img/hero3.jpg', alt:'hero3'},
    ]

    const [pict, setPict] = React.useState(0);

    function next() {
        setPict((pict + 1) % images.length);
    }

    function prev() {
        setPict((pict - 1 + images.length) % images.length);
    }

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="mt-20 relative" id="slide">
            <button
                className="text-5xl text-orange-500 bg-neutral-50 px-2 py-0 border-mini absolute left-12 opacity-50 shadow hover:opacity-100 transition-all bottom-1/2 item-shadow"
                onClick={prev}
            >
                &#8249;
            </button>
            <button
                className="text-5xl text-orange-500 bg-neutral-50 px-2 py-0 border-mini absolute right-12 opacity-50 shadow hover:opacity-100 transition-all bottom-1/2 item-shadow"
                onClick={next}
            >
                &#8250;
            </button>
            {images[pict] && (
                <Image
                    src={images[pict].src}
                    alt={images[pict].alt}
                    width={1500}
                    height={1500}
                    className="w-full h-30rem object-cover"
                />
            )}
        </div>
    );
}