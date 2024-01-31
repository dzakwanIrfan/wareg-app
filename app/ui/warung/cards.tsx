import { Star } from "iconoir-react/solid";
import { StarSolid } from "iconoir-react";
import Link from "next/link";
import Image from "next/image";

export function RatingCard() {
    return (
        <div className="bg-orange-500 border-mini flex flex-col justify-center text-center py-8 item-shadow h-40">
            <div className="text-neutral-50 flex justify-center items-center gap-2" id="rating">
                <span className="text-7xl font-bold">4.8</span>
                <Star 
                    className="text-4xl"
                />
            </div>
            <p className="text-neutral-50 text-xs">
                Dari <span>23</span> Pengulas
            </p>
        </div>
    );
}

export function DetailRatingCard() {
    const ar = [ {bintang: 5, jumlah: '100%'}, {bintang: 4, jumlah: '30%'}, {bintang: 3, jumlah: '65%'}, {bintang: 2, jumlah: '25%'}, {bintang: 1, jumlah: '15%'}, ];
    return (
        <div className="bg-neutral-50 border-mini flex flex-col justify-center item-shadow px-8 h-40">
            {
                ar.map((index) => (
                    <div key={index.bintang} className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <StarSolid 
                                className="text-xxs text-orange-500"
                            />
                            <span className="text-lg font-bold w-4">{index.bintang}</span>
                        </div>
                        <div className="bg-orange-500 h-4" style={{ width: index.jumlah }}></div>
                    </div>
                ))
            }
        </div>
    );
}

export function GaleryCard() {
    return (
        <Link
            href='/'
        >
            <div className="border-mini justify-center item-shadow h-40 overflow-hidden relative">
                <div className="absolute w-full h-40 z-10 flex justify-center items-center">
                    <p className="absolute text-white text-3xl z-20">14 Foto</p>
                    <div className="bg-neutral-800 opacity-50 w-full h-full hover:opacity-40 transition-all"></div>
                </div>
                <Image 
                    src='/img/hero2.jpg'
                    alt="galeri"
                    width={500}
                    height={500}
                    className="object-cover w-full h-40 blur-sm"
                />
            </div>
        </Link>
    );
}