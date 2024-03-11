'use client'

import React from "react";
import Title from "../ui/title";
import { Input, InputFoto, Select, Submit, TextArea } from "../ui/inputs";
import { Star } from "iconoir-react/solid";

export default function TambahWarung() {
    const name = {
        id: 'name',
        label: 'Nama Tempat',
        max: 30,
        type: 'text',
        style: 'w-96'
    }

    const ulasan = {
        id: 'ulasan',
        label: 'Berikan Ulasan',
        max: 250,
        display: 'none',
    }

    return (
        <div className="container m-auto bg-neutral-50 mt-40 border-mini item-shadow px-28 py-8">
            <form action="post" className="flex flex-col gap-12">
                <span className="flex justify-between gap-8">
                    <span className="w-6/12">
                        <Title text="Tambah Warung"/>
                        <Input input={name} />
                        <Select />
                    </span>
                    <span className="w-6/12">
                        <InputFoto />
                    </span>
                </span>
                <span>
                    <hr 
                        className="border-t-4 border-neutral-800 mb-4"
                    />
                    <Title text="Berikan Penilaian dan Ulasan" />
                    <div className="flex gap-4 my-2">
                        <Star 
                            className="text-orange-500"
                        />
                        <Star 
                            className="text-orange-500"
                        />
                        <Star 
                            className="text-orange-500"
                        />
                        <Star 
                            className="text-neutral-800"
                        />
                        <Star 
                            className="text-neutral-800"
                        />
                    </div>
                    <TextArea inputTextArea={ulasan} />
                </span>
                <Submit text="Kirim" />
            </form>
        </div>
    );
}