import Image from "next/image";
import { Star } from "iconoir-react/solid";
import Link from "next/link";
import { HeartSolid } from "iconoir-react";

export default function Card() {
    const button = '';
    return (
        <div className="relative bg-neutral-50 border-neutral-800 border-mini pb-2 cursor-pointer item-shadow transition-all" id="card">
                <div className="wishlist absolute right-8 bg-orange-500 w-7 h-7 rounded-b-lg flex justify-center items-center">
                    <button
                        type="submit"
                    >
                        <HeartSolid 
                            className="text-neutral-50 rounded-b-lg text-xs hover:text-red-500 transition-all"
                        />
                        {button}
                    </button>
                </div>
                <Link
                    href='/warung/1/'
                >
                    <Image 
                        src='/img/hero2.jpg'
                        alt="foto1"
                        width={110}
                        height={160}
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h3 className="px-4 pt-2 pb-8 text-neutral-800 text-sm hover:underline">
                        Angkringan Mbah Surip
                    </h3>
                    <div className="info flex justify-between items-center px-4">
                        <div className="rating flex bg-orange-500 text-neutral-50 rounded-md px-2 py-1 items-center gap-1">
                            <span className="text-xs">4.8</span> <Star className="w-3 h-3" />
                        </div>
                        <div className="place text-xs opacity-75">
                            Ulujami, Pemalang
                        </div>
                    </div>
                </Link> 
            </div>
    );
}