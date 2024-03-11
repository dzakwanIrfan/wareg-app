import { Settings, Heart, StatsUpSquare } from "iconoir-react";
import Link from "next/link";

export const SettingProfile = () => {
    return (
        <Link
            href="/ubah-profil/1"
            className="bg-neutral-50 p-3 border-mini item-shadow button-hover"
        >
            <Settings 
                className="text-neutral-800 text-xs btn"
            />
        </Link>
    );
}

export const Wishlist = () => {
    return (
        <Link
            href='/'
            className="border-mini bg-neutral-50 py-3 px-10 flex items-center gap-1 button-hover item-shadow"
        >
            <Heart 
                className="text-neutral-800 text-xs btn"
            />
            <span
                className="text-xs btn"
            >
                Wishlist
            </span>
        </Link>
    );
}

export const Ulasan = () => {
    return (
        <Link
            href='/'
            className="border-mini bg-neutral-50 py-3 px-10 flex items-center gap-1 button-hover item-shadow"
        >
            <StatsUpSquare 
                className="text-neutral-800 text-xs btn"
            />
            <span
                className="text-xs btn"
            >
                13 Ulasan
            </span>
        </Link>
    );
}
