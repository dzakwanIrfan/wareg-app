import { Plus } from "iconoir-react";
import Link from "next/link";

export default function CreateButton() {
    return (
        <Link
            href='/tambah-warung'
        >
            <div className="add fixed bottom-12 right-12 z-50 flex flex-col items-center gap-2">
                <div className="info-create shadow">
                    Tambahkan tempat!
                </div>
                <Plus 
                    className="border-no-radius bg-orange-500 text-5xl rounded-xl text-neutral-50 item-shadow hover:bg-neutral-50 hover:text-orange-500 transition-all"
                />
            </div>
        </Link>
    );
}