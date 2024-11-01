import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "./context/CartContext";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./page/Home";
import { cartReducer, intialState } from "./reducers/cartReducer";

function App() {
  const [cartState, dispatch] = useReducer(cartReducer, intialState);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <CartContext.Provider value={{ cartState, dispatch }}>
        <Home />
        <ToastContainer />
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
