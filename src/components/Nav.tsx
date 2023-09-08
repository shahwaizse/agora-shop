// import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
export default function Nav(props:{count:number}) {
    return(
        <div className="text-white flex flex-row justify-between bg-blue-950 fixed top-0 w-full shadow-md">
            <div className="flex flow-row">
                {/* <Link className="p-5 hover:bg-black" to={'home'}><HomeIcon /></Link> */}
                <Link className="p-5 hover:bg-black text-xl font-mono" to={'home'}>Agora</Link>
                <Link className="p-5 hover:bg-black" to={'shop'}><InventoryIcon /></Link>
            </div>
            <div className="flex flex-row hover:bg-black">
                <Link className="p-5 pr-2" to={'cart'}><ShoppingCartIcon /></Link>
                <div className="pt-5 pb-5 pr-5 text-lg font-mono">{props.count}</div>
            </div>
        </div>
    );
}