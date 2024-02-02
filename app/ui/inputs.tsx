import React from "react";

export function Input({input}) {
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
                className={`${input.style} border-no-radius rounded bg-neutral-50 px-2 text-neutral-800 focus:outline-orange-500 text-sm h-6`}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
}