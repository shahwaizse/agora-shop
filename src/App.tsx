import { useState } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const [cart, setCart] = useState([{id:0,title:"null",price:0,image:"#",amount:0}]);
  const [total, setTotal] = useState(0);
  function updateCart(id:number,title:string,price:number,image:string,amount:number) {
    if(cart[0].id == 0) {
      setCart([{id:id,title:title,price:price,image:image,amount:amount}])
    }
    else {
      setCart([...cart, {id:id,title:title,price:price,image:image,amount:amount}])
    }
  }
  const {pathname} = useLocation();
  useEffect(() => {
    if(cart[0].id == 0) {
      setTotal(0);
    }
    else {
      cart.map((item) => {
        setTotal(total + ((item.price * item.amount)));
      });
    }
  }, [cart]);
    return (
        <div>
          {/* if first element is the initial state value, theres nothing in the cart, else display users added amount */}
          <Nav count={cart[0].id == 0 ? 0 : cart.length}></Nav>
          {pathname == "/home" ? <Home /> : pathname == "/shop" ? <Shop updateCart={updateCart} /> : pathname == "/cart" ? <Cart cart={cart} total={total} /> : <Home />}
        </div>
    );
}