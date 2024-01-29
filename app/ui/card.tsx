import Image from "next/image";
import { Star } from "iconoir-react/solid";
import Link from "next/link";

export default function Card() {
    return (
        <Link
            href='/'
        >
            <div className="bg-neutral-50 border-neutral-800 border-mini pb-2 cursor-pointer item-shadow" id="card">
                <Image 
                    src='/img/hero2.jpg'
                    alt="foto1"
                    width={110}
                    height={160}
                    className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="px-4 pt-2 pb-8 text-neutral-800 text-sm">
                    Angkringan Mbah Surip
                </h3>
                <div className="info flex justify-between px-4">
                    <div className="rating flex bg-orange-500 text-neutral-50 rounded-md px-2 py-1 items-center gap-1">
                        <span className="text-xs">4.8</span> <Star className="w-3 h-3" />
                    </div>
                    <div className="place text-xs opacity-75">
                        Ulujami, Pemalang
                    </div>
                </div>
            </div>
        </Link>
    );
}