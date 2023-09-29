import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <div className="text-6xl text-black text-center font-mono mt-56 lg:mt-72">Shopping, Uninvented.</div>
            <div className="flex justify-center">
                <Link className="text-white m-auto bg-blue-950 rounded-md p-3 mt-10 hover:p-4 transition-all" to={'shop'}>Shop Now</Link>
            </div>
        </div>
    );
}