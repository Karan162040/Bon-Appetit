import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHAndler = () => {
    setCartIsShown(true);
  };
  const closeCartHAndler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={closeCartHAndler} />}
      <Header onShow={showCartHAndler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
