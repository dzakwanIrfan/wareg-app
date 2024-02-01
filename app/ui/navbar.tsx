import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header
            className="bg-neutral-50 rounded-b-xl flex justify-between p-4 fixed right-0 top-0 w-full z-40 shadow md:rounded-b-3xl md:items-center md:px-36 md:py-4 md:h-20"
        >
            <Link
                href='/'
            >
                <Image 
                    src='/logo/text-logo.png'
                    alt="Wareg Logo"
                    width={201}
                    height={60}
                    className="w-24 md:w-36 hover:opacity-90"
                />
            </Link>

            <Link
                href='/discover'
                className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-20"
            >
                <Image 
                    src='/logo/icon-logo.png'
                    alt="Waren Logo"
                    width={500}
                    height={500}
                    className="transition-all hover:scale-150 hover:rotate-180 size-14"
                />
            </Link>

            <Link
                href='/'
            >
                <div id="sign-in" className="text-neutral-50 bg-orange-500 px-4 py-1 rounded-full hover:transition-all hover:outline hover:outline-orange-500 hover:bg-neutral-50 hover:text-neutral-800 font-bold">
                    Sign in
                </div>
            </Link>
        </header>
    );
}