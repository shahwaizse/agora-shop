interface CartCardProps {
    item:{id:number;
        title:string; 
        price:number; 
        image:string; 
        amount:number;}
}

export default function CartCard(props: CartCardProps) {
    return (
        <div className="bg-white p-2 flex flex-row rounded-md m-3 shadow-md">
            <div className="h-24 overflow-hidden m-2">
                <img className="w-24" src={props.item.image} alt="" />
            </div>
            <div className="flex flex-col text-lg mt-4 ml-5">
                <div className="font-medium">{props.item.title}</div>
                <div className="font-mono text-red-600">${props.item.price*props.item.amount}</div>
            </div>
            <div className="text-right flex-grow font-mono text-lg">x{props.item.amount}</div>
        </div>
    );
}