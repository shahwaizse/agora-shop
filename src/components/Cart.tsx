import CartCard from "./CartCard";

export default function Cart(props:{cart:[{id:number, title:string, price:number, image:string, amount:number}], total:number}) {
    return (
        props.cart[0].id == 0 ? <div className=" text-black text-center text-lg mt-80 pt-10 font-mono">No Items In Cart.</div> :
        <div className="flex flex-col">
            <div className="text-black mt-20 h-[76vh] overflow-scroll">
            { 
                props.cart.map((item:{id:number, title:string, price:number, image:string, amount:number}) => {
                    return <CartCard key={item.id} item={item}></CartCard>
                })
            }
            </div>
            <div className="flex flex-row justify-center m-5">
                <div className="font-mono font-md text-xl mt-2 mr-10">Total: ${props.total}</div>
                <button className="text-white bg-blue-950 p-3 rounded-md ml-1 hover:bg-black font-mono">Checkout</button>
            </div>
        </div>
    );
}