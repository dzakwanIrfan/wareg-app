import Link from "next/link";
import { clsx } from 'clsx';

export default function Pagination() {
    const pages = [1, 2, 3]
    const left = "&#11164;";
    return (
        <div className="pagination flex justify-center ">
            <BoxNumber page="&#11164;" />
            {pages.map((page) => {
                return(
                    <BoxNumber key={page} page={page}/>
                );
            })}
            <BoxNumber page="&#11166;" />
        </div>
    );

}

function BoxNumber({page}: {page:number | string}){
    return (
        <Link
            href='/'
            className={clsx({
                ['border-no-radius py-2 px-4 border-collapse font-bold bg-orange-500 text-neutral-50 item-shadow']: page === 1,
                ['border-no-radius py-2 px-4 border-collapse font-bold bg-neutral-50 text-neutral-800 item-shadow']: page !== 1,
                
            })}
        >
            {page}
        </Link>
    );    
}