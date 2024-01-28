import { Search } from "iconoir-react";

export default function SearchBar() {
    return (
        <div className="search flex z-10 absolute top-25rem left-36 bg-neutral-50 items-center px-4 py-1 rounded-full gap-4 pe-1 shadow">
            <label htmlFor="">
                <Search 
                    className="text-2xl text-orange-500"
                />
            </label>
            <form action="">
                <input type="text" placeholder="Mau makan di mana hari ini?" className="text-xs bg-transparent outline-none mr-4 w-30rem"></input>
                <button className="bg-orange-500 py-3 px-4 rounded-full text-xs text-neutral-50 hover:bg-orange-600">Search</button>
            </form>
        </div>
    );
}