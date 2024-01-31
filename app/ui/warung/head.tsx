import Link from "next/link";
import Title from "../title";
import { PlusCircleSolid } from "iconoir-react";
import { Heart } from "iconoir-react/solid";

export default function HeadWarung() {
    return (
        <div className="flex justify-between items-start w-full mt-8" id="head">
            <div className="identity text-right">
                <Title text="Angkringan Mbah Surip" />
                <div className="place text-xs mt-2">
                    <span className="opacity-75">Ulujami, Pemalang |</span>&nbsp;
                    <Link
                        href='/'
                        className="text-orange-500 font-bold"
                    >
                        Detail Lokasi
                    </Link>
                </div>
            </div>
            <div id="warungAction" className="flex gap-8 transition-all">
                <div className="p-2 border-mini bg-neutral-50 hover:shadow-md hover:bg-orange-500 cursor-pointer transition-all">
                    <Heart 
                        className="text-neutral-800"
                    />
                </div>
                <Link
                    href='/'
                >
                    <div className="sort flex items-center border-mini gap-2 px-4 py-2 hover:bg-neutral-50 hover:shadow-md transition-all">
                        <PlusCircleSolid 
                            className="text-neutral-800 text-xs"
                        />
                        <p className="text-neutral-800">Beri ulasan tempat ini</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}