import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

interface CardProps {
    id:number;
    title:string;
    price:number;
    image:string;
    updateCart: (id:number,title:string,price:number,image:string,amount:number) => void;
    setPopup: (popupState: boolean) => void;
}

export default function Card(props: CardProps) {
    function addItem() {
        props.updateCart(props.id,props.title,props.price,props.image,amount);
        props.setPopup(true);
    }
    function amountChange(e:React.ChangeEvent<HTMLInputElement>) {
        const parsedInput = parseInt(e.target.value);
        if(!isNaN(parsedInput)) {
            setAmount(parsedInput);
        }
    }
    const [amount, setAmount] = useState(0);
    return(
        <div className="text-black p-5 w-80 rounded-xl m-5 shadow-md bg-white">
            <div className="h-52 w-auto overflow-hidden">
                <img src={props.image} alt="" />
            </div>
            <div className="bg-white">
                <div className="truncate font-semibold">{props.title}</div>
                <div className='text-red-600'>{`$${props.price}`}</div>
                <div className="flex flex-row justify-between m-2">
                    <input required onChange={amountChange} type="number" className="bg-gray-100 p-2 w-5/6 rounded-md" placeholder="Amount"></input>
                    <button onClick={addItem} className="text-white bg-blue-950 p-2 rounded-md ml-1 hover:bg-black"><ShoppingCartIcon></ShoppingCartIcon></button>
                </div>
            </div>
        </div>
    );
}