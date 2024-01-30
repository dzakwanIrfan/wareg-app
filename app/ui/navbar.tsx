import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header
            className="bg-neutral-50 rounded-b-3xl justify-between px-36 py-4 flex items-center fixed right-0 top-0 w-full z-40 shadow"
        >
            <Link
                href='/'
            >
                <Image 
                    src='/logo/text-logo.png'
                    alt="Wareg Logo"
                    width={201}
                    height={60}
                    className="w-36 hover:opacity-90"
                />
            </Link>

            <Link
                href='/discover'
                className="absolute right-1/2 top-12"
            >
                <Image 
                    src='/logo/icon-logo.png'
                    alt="Waren Logo"
                    width={50}
                    height={50}
                    className="transition-all hover:scale-150 hover:rotate-180"
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