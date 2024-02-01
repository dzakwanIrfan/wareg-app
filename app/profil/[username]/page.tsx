import Title from "@/app/ui/title";
import { Settings, StatsUpSquare } from "iconoir-react/regular";
import { Heart } from "iconoir-react/solid";
import Image from "next/image";
import Link from "next/link";

export default function Profil() {
    return (
        <div className="mt-20 container m-auto">
            <div className="relative bg-neutral-800 h-48">
                <Image 
                    src='/img/michael.jpg'
                    alt="michael"
                    width={500}
                    height={500}
                    className="rounded-full object-cover size-48 absolute top-1/2 left-32"
                />
            </div>
            <div className="flex items-center justify-end gap-8 mt-4">
                <Link
                    href="/"
                    className="bg-neutral-50 p-3 border-mini item-shadow button-hover"
                >
                    <Settings 
                        className="text-neutral-800 text-xs btn"
                    />
                </Link>
                <button type="button" className="border-mini bg-neutral-50 py-3 px-10 flex items-center gap-1 item-shadow">
                    <Heart 
                        className="text-neutral-800 text-xs"
                    />
                    <span
                        className="text-xs"
                    >
                        Wishlist
                    </span>
                </button>
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
            </div>
            <div className="ml-32 my-12">
                <h1 className="text-2xl font-bold">Kushida Kikyo | <span>@kushida_kikyo123</span></h1>
                <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum nisi eaque nam harum magnam quas illum sed ad debitis!</p>
            </div>
            <div className="bg-neutral-50 border-mini px-20 py-8 mb-12 item-shadow">
                <Title text="Ulasan Teratas" />
                <hr 
                    className="my-2 border-t-1 border-neutral-800"
                />
                <div className="flex mt-8">
                    <Link
                        href='/profil/kushida'
                        style={{ width: '5%' }}
                    >
                        <Image 
                            src='/img/michael.jpg'
                            alt="michael"
                            width={500}
                            height={500}
                            className="size-12 object-cover rounded-full"
                        />
                    </Link>
                    <div className="flex flex-col text-sm" style={{ width: '95%' }}>
                        <Link
                            href='/profil/kushida'
                        >
                            <div className="text-neutral-800 font-bold">@michael_dam123 <span className="font-normal text-minor">3 hari yang lalu</span></div>
                        </Link>
                        <div className="text-neutral-800 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vero sed soluta blanditiis similique commodi illum aliquid? Esse nisi deserunt suscipit id, reiciendis vitae molestiae cupiditate aliquam, maxime sunt dicta harum quas? Iste corrupti aperiam perferendis blanditiis sequi commodi voluptatibus dicta vitae quae voluptatum repudiandae unde earum, rerum nihil qui, aliquam nobis sit? Cumque sint voluptatum iure ut, quaerat dignissimos, modi vel doloremque vero eveniet cupiditate laboriosam nam facilis sunt consequuntur, minus voluptates dolore perferendis? Temporibus incidunt laboriosam placeat vitae debitis mollitia ducimus quaerat itaque, voluptates unde animi quod natus nostrum exercitationem repudiandae praesentium, architecto, optio quo veniam recusandae consequuntur tempora? Enim exercitationem, delectus quas natus dolore soluta totam porro provident. Excepturi ex aut quis rerum placeat. Magni, nemo maxime.</div>
                        <div className="flex gap-4 mt-4">
                            <Image 
                                src='/img/hero2.jpg'
                                alt="michael"
                                width={500}
                                height={500}
                                className="size-32 object-cover rounded-xl"
                            />
                            <Image 
                                src='/img/hero2.jpg'
                                alt="michael"
                                width={500}
                                height={500}
                                className="size-32 object-cover rounded-xl"
                            />
                            <Image 
                                src='/img/hero2.jpg'
                                alt="michael"
                                width={500}
                                height={500}
                                className="size-32 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex mt-8">
                    <Link
                        href='/profil/kushida'
                        style={{ width: '5%' }}
                    >
                        <Image 
                            src='/img/michael.jpg'
                            alt="michael"
                            width={500}
                            height={500}
                            className="size-12 object-cover rounded-full"
                        />
                    </Link>
                    <div className="flex flex-col text-sm" style={{ width: '95%' }}>
                        <Link
                            href='/profil/kushida'
                        >
                            <div className="text-neutral-800 font-bold">@michael_dam123 <span className="font-normal text-minor">3 hari yang lalu</span></div>
                        </Link>
                        <div className="text-neutral-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim deserunt sunt est in quas accusamus? Nostrum suscipit quia nemo excepturi natus vel, eaque autem!</div>
                        <div className="flex gap-4 mt-4">
                            <Image 
                                src='/img/hero2.jpg'
                                alt="michael"
                                width={500}
                                height={500}
                                className="size-32 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex mt-8">
                    <Link
                        href='/profil/kushida'
                        style={{ width: '5%' }}
                    >
                        <Image 
                            src='/img/michael.jpg'
                            alt="michael"
                            width={500}
                            height={500}
                            className="size-12 object-cover rounded-full"
                        />
                    </Link>
                    <div className="flex flex-col text-sm" style={{ width: '95%' }}>
                        <Link
                            href='/profil/kushida'
                        >
                            <div className="text-neutral-800 font-bold">@michael_dam123 <span className="font-normal text-minor">3 hari yang lalu</span></div>
                        </Link>
                        <div className="text-neutral-800 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum culpa repellat architecto facere itaque dolore omnis, sapiente totam ullam praesentium sed, eos numquam sunt odit ut reprehenderit molestias recusandae quidem dolor? Iusto nulla dolore veritatis tempora qui sed nobis dicta? Autem necessitatibus animi tenetur veniam, qui ut nisi neque facilis.</div>
                        <div className="flex gap-4 mt-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}