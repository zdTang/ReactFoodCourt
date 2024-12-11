import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealDetail from "./components/MealDetail/MealDetail";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [mealDetailIsShown, setMealDetailShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showMealDetailHandler = () => {
    // console.log(detail);
    setMealDetailShown(true);
  };

  const hideMealDetailHandler = () => {
    setMealDetailShown(false);
  };

  return (
    <CartProvider>
      {mealDetailIsShown && <MealDetail onClose={hideMealDetailHandler} />}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals onShowMealDetail={showMealDetailHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
