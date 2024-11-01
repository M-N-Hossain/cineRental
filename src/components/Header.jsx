import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { cartState } = useContext(CartContext);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <CartDetails onCancel={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </button>
          </li>
          <li>
            <div
              className=" cursor-pointer bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <img
                src={isDarkMode ? Sun : Moon}
                width="24"
                height="24"
                alt=""
              />
            </div>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleCartShow}
            >
              <img src={ShoppingCart} width="24" height="24" alt="" />
              {cartState.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartState.cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
