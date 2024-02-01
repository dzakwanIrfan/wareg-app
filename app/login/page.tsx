import Link from "next/link";

export default function Login() {
    return (
        <div className="container m-auto w-96 bg-neutral-50 border-mini my-40 px-12 item-shadow">
            <h1 className="mt-8 font-bold mb-8">LOGIN</h1>
            <form action="">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs text-neutral-800">Email</label>
                    <input type="email" id="email" className=" px-1 focus:outline-orange-500 border-no-radius rounded bg-neutral-50 text-neutral-800"></input>
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="password" className="text-xs text-neutral-800">Password</label>
                    <input type="password" id="password" className=" px-1 focus:outline-orange-500 border-no-radius rounded bg-neutral-50 text-neutral-800"></input>
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-xs w-full rounded text-neutral-50 py-2 my-8">LOGIN</button>
            </form>
            <p
                className="text-neutral-800 text-center mb-8 text-sm"
            >
                Need an account?&nbsp;
                <Link
                    href='/register'
                    className="underline hover:text-orange-500"
                >
                    SIGN UP!
                </Link>
            </p>
        </div>
    );
}