import { FacebookTag, Instagram, Tiktok } from "iconoir-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-orange-500 text-neutral-50 text-center z-50 py-8 mt-12">
            <div className="copyright mb-2 text-sm">© 2024 Warég, Inc.</div>
            <div className="socmeds flex justify-center items-center text-3xl gap-8">
                <Link
                    href='/'
                    className="hover:shadow hover:scale-105"
                >
                    <Instagram />
                </Link>
                
                <Link
                    href='/'
                    className="hover:shadow hover:scale-105"
                >
                    <FacebookTag /> 
                </Link>

                <Link
                    href='/'
                    className="hover:shadow hover:scale-105"
                >
                    <Tiktok />
                </Link>
            </div>
        </footer>
    );
}