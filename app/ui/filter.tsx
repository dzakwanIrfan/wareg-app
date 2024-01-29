import Link from "next/link";
import SearchBar from "./home/search-bar";
import { Sort } from "iconoir-react";
import Cards from "./cards";

export default function Filter() {
    const position = 'border-no-radius hover:shadow-md';
    const width = 'w-40rem';
    const placeholder = 'Cari Rumah Makan, Warung, Restoran, dll ...';
    return (
        <>
            <div className="filter flex justify-between items-center mt-4 mb-8">
                <SearchBar position={position} width={width} placeholder={placeholder}/>
                <Link
                    href='/'
                    className="block"
                >
                    <div className="sort flex items-center border-mini gap-4 px-4 py-2 hover:bg-neutral-50 hover:shadow-md">
                        <Sort />
                        <p>Sort by <span className="font-bold">Rating</span></p>
                    </div>
                </Link>
            </div>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </>
    );
}