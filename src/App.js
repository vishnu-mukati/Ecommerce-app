import ProductScreen from "./components/productscreen/productscreen";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/Cart-Provider";
function App() {
  return (
    <CartProvider>
      <Navbar/>
      <h1>The Generics</h1>
      <ProductScreen/>
    </CartProvider>
  );
}

export default App;
