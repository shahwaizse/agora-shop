import { useEffect } from "react";
import { useState } from "react";
export default function CartAddPopup() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {setVisible(true)});
    }, []);
    return (
        <>
            {
                visible ? 
                <div className="bg-blue-950 pt-1 pb-1 pr-2 pl-2 ml-[46vw] rounded-md fixed mt-[82vh] text-white transition-all">
                    Added to Cart
                </div> :
                <div className="bg-blue-950 pt-1 pb-1 pr-2 pl-2 ml-[46vw] rounded-md fixed mt-[90vh] text-white transition-all">
                    Added to Cart
                </div>
            }
        </>
    );
}