import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import CartAddPopup from "./CartAddPopup";

interface ShopProps {
    updateCart: (id:number,title:string,price:number,image:string,amount:number) => void;
}

export default function Shop({updateCart}: ShopProps) {
    const [items, setItems] = useState([{id:0, title:"null", price:0, image:"#"}]);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        async function getItems() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data);
        }
        getItems();
    }, []);
    useEffect(() => {
        setTimeout(() => {setPopup(false)}, 8000);
    }, [popup])
    return (
        <div>
            {
                popup ? <CartAddPopup></CartAddPopup> : null
            }
            <div className="flex flex-row flex-wrap ml-7 mt-20">
            {
                items[0].id == 0 ? <div className="m-auto mt-72"><Spinner /></div> : 
                items.map((item) => {return <Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} updateCart={updateCart} setPopup={setPopup} />})
            }
            </div>
        </div>
    );
}