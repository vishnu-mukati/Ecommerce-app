import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./components/Store/CartProvider";
import About from "./components/navbar-component/About";
import Home from "./components/navbar-component/Home"
import ContectUs from "./components/navbar-component/ContactUs";
import { useCallback } from "react";
import Generics from "./components/Generics/Generics";
import GenericsButton from "./components/Generics/GenericsButton";
import ProdutDetail from "./components/ProdutDetail/ProdutDetail";


function App() {

  const addDataHandler = useCallback(async (userdata) => {
    const response = await fetch('https://react-http-b44c1-default-rtdb.firebaseio.com/userdata.json', {
      method: 'POST',
      body: JSON.stringify(userdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();

  })

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact >
           <Redirect to="/home"/>
          </Route>
          <Route path="/home" exact >
            <GenericsButton />
            <Home />
          </Route>

          <Route path="/store">
            <Generics />
            <ProductScreen />
          </Route>

          <Route path = "/product-details/:id" component={ProdutDetail}/>
          <Route path="/about">
            <Generics />
            <About />
          </Route>

          <Route path="/contect-us">
            <ContectUs onAddData={addDataHandler} />
          </Route>

        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
