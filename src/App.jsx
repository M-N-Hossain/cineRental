import { useState } from "react";

import { CartContext } from "./context/CartContext";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./page/Home";

function App() {
  const [cartData, setCartData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <Home />
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
