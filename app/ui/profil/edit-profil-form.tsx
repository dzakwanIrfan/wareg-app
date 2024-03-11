'use client';

import Image from "next/image";
import { Input, Submit, TextArea } from "../inputs";
import Link from "next/link";

export const EditProfilForm = () => {

    const nama = {
        id: 'name',
        label: 'Nama Lengkap',
        max: 30,
        type: 'text',
        style: 'w-96'
    }

    const deskripsi = {
        id: 'deskripsi',
        label: 'Deskripsi Diri',
        max: 100,
        display: '',
    }

    return (
        <form action="">
            <div className="relative bg-neutral-800 h-48">
                <Image 
                    src='/img/michael.jpg'
                    alt="michael"
                    width={500}
                    height={500}
                    className="rounded-full object-cover size-48 absolute top-1/2 left-32"
                />
            </div>

            <div className="mt-32 container mx-auto">
                <Input input={nama} />
                <TextArea inputTextArea={deskripsi} />
                <div className="mt-5 flex justify-end gap-8 items-center">
                    <Link
                        href='/profil/1'
                        className="hover:underline text-neutral-800 opacity-75"
                    >
                        Kembali
                    </Link>
                    <button 
                        type="submit" 
                        className="bg-orange-500 px-4 py-2 w-20 border-mini text-neutral-50 item-shadow"
                    >
                        Ubah
                    </button>
                </div>
            </div>
        </form>
    );
}