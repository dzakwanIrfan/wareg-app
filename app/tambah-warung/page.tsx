'use client'

import React from "react";
import Title from "../ui/title";
import { Input } from "../ui/inputs";

export default function TambahWarung() {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value)
    }

    let warn = 'text-neutral-800';
    if (inputValue.length === 30){
        warn = 'text-red-500';
    }

    const name = {
        id: 'name',
        label: 'Nama Tempat',
        max: 30,
        type: 'text',
        style: 'w-96'
    }

    const review = {
        id: 'review',
        label: 'Ulasan',
        max: 255,
        type: 'text',
        style: 'w-full'
    }
    return (
        <div className="container m-auto bg-neutral-50 mt-40 border-mini item-shadow px-20 py-8">
            <Title text="Tambah Warung"/>
            <div className="flex flex-col justify-center mt-4">
                <div className="flex justify-between items-baseline w-96">
                    <label htmlFor="name" className="text-neutral-800">Nama Tempat</label>  
                    <span className={`text-xs ${warn}`}>{inputValue.length}/30</span>
                </div>
                <input 
                    maxLength={30} 
                    type="text" 
                    id="name" 
                    className="w-96 border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-sm h-6" 
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <Input input={name} />
            <Input input={review} />
        </div>
    );
}