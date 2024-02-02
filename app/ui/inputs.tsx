import { CloudUpload } from 'iconoir-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface InputProps {
    input: {
        id: string;
        label: string;
        max: number;
        type: string;
        style: string;
    }
}

interface Places {
    id: string;
    name: string;
}

export function Input({input}: InputProps) {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value)
    }

    let warn = 'text-neutral-800';
    if (inputValue.length === 30){
        warn = 'text-red-500';
    }

    return (
        <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-between items-baseline w-96">
                <label htmlFor={input.id} className="text-neutral-800">{input.label}</label>  
                <span className={`text-xs ${warn}`}>{inputValue.length}/{input.max}</span>
            </div>
            <input 
                maxLength={30} 
                type={input.type} 
                id={input.id} 
                className={`${input.style} border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-xs h-6`}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
}

export function Select() {
  const [provinces, setProvinces] = useState<Places[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<Places | null>(null);
  const [regencies, setRegencies] = useState<Places[]>([]);
  const [selectedRegencie, setSelectedRegencie] = useState<Places | null>(null);
  const [districts, setDistricts] = useState<Places[]>([]);

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvinceName = event.target.value;
    const selectedProvince = provinces.find((province) => province.name === selectedProvinceName) || null;
    setSelectedProvince(selectedProvince);
  };

  const handleRegencieChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegencieName = event.target.value;
    const selectedRegencie = regencies.find((regencie) => regencie.name === selectedRegencieName) || null;
    setSelectedRegencie(selectedRegencie);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince?.id}.json`);
        const data = await response.json();
        setRegencies(data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchData();
  }, [selectedProvince?.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencie?.id}.json`);
        const data = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchData();
  }, [selectedProvince?.id, selectedRegencie?.id]);

  return (
    <>
        <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-between items-baseline w-96">
                <label htmlFor="provinsi" className="text-neutral-800">
                Provinsi
                </label>
            </div>
            <select required name="provinsi" id="provinsi" onChange={handleProvinceChange} className='w-96 border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-xs h-6'>
                <option selected disabled>Pilih Provinsi..</option>
                {provinces.map((province) => (
                <option value={province.name} key={province.id}>
                    {province.name}
                </option>
                ))}
            </select>
        </div>
        <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-between items-baseline w-96">
                <label htmlFor="kota" className="text-neutral-800">
                Kota/Kabupaten
                </label>
            </div>
            <select required name="kota" id="kota" onChange={handleRegencieChange} className='w-96 border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-xs h-6'>
                <option selected disabled>Pilih Kota/Kabupaten..</option>
                {regencies.map((regencie) => (
                <option value={regencie.name} key={regencie.id}>
                    {regencie.name}
                </option>
                ))}
            </select>
        </div>
        <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-between items-baseline w-96">
                <label htmlFor="kecamatan" className="text-neutral-800">
                Kecamatan
                </label>
            </div>
            <select name="kecamatan" id="kecamatan" className='w-96 border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-xs h-6'>
                <option selected disabled>Pilih Kecamatan..</option>
                {districts.map((district) => (
                <option value={district.name} key={district.id}>
                    {district.name}
                </option>
                ))}
            </select>
        </div>
    </>
  );
}

export function InputFoto() {
    return (
        <div className="flex flex-col justify-center mt-4 box-border w-full">
            <div className="flex justify-between items-baseline">
                <label htmlFor='foto' className="text-neutral-800">Tambahkan foto</label>  
                <span className={`text-xs`}>2/3</span>
            </div>
            <input 
                type='file'
                id='foto'
                className='hidden'
            />
            <div className="flex justify-center items-center cursor-pointer item-shadow gap-2 bg-orange-500 py-8 font-bold text-neutral-50 border-mini">
                <CloudUpload />
                <p>Unggah foto warung</p>
            </div>
            <div className="flex items-center columns-3 gap-2 mt-8 box-border overflow-x-auto" id="photos">
                <Image 
                    alt='hero2'
                    src='/img/hero2.jpg'
                    width={200}
                    height={200}
                    className='h-20 object-cover rounded'
                />
                <Image 
                    alt='hero2'
                    src='/img/hero2.jpg'
                    width={200}
                    height={200}
                    className='h-20 object-cover rounded'
                />
                <Image 
                    alt='hero2'
                    src='/img/michael.jpg'
                    width={200}
                    height={200}
                    className='h-20 object-cover rounded'
                />
            </div>
        </div>
    );
}

export function TextArea() {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setInputValue(value)
    }

    let warn = 'text-neutral-800';
    if (inputValue.length === 255){
        warn = 'text-red-500';
    }

    return (
        <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-end items-baseline w-full">
                <label htmlFor='review' className="text-neutral-800" style={{ display: 'none' }}>Berikan Ulasan</label>  
                <span className={`text-xs ${warn}`}>{inputValue.length}/255</span>
            </div>
            <textarea
                maxLength={255} 
                name="review" 
                id="review"
                className='focus:outline-orange-500 text-neutral-800 bg-neutral-50 border-mini min-w-full h-20 text-sm px-4 py-2'
                onChange={handleChange}
            >

            </textarea>
        </div>
    );
}

export function Submit() {
    return (
        <button type="submit" className="bg-orange-500 px-4 py-2 w-20 border-mini text-neutral-50 item-shadow m-auto">KIRIM</button>
    );
}
