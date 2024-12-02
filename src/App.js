import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductScreen from "./components/productscreen/productscreen";
import Navbar from "./components/navbar/Navbar";
import CartProvider from "./components/store/Cart-Provider";
import About from "./components/navbar-component/about";
import Home from "./components/navbar-component/home"
import Heading from "./components/Heading/Heading";
import ContectUs from "./components/navbar-component/Contact Us";
import { useCallback } from "react";


function App() {

  const addDataHandler = useCallback(async(userdata) =>{
    const response = await fetch('https://react-http-b44c1-default-rtdb.firebaseio.com/userdata.json',{
      method:'POST',
      body: JSON.stringify(userdata),
      headers:{
         'Content-Type': 'application/json'
      }
    })  
    const data = await response.json();

  })

  
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <h1 style={{
          textAlign: "center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor: "grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight: "bold",
          fontSize: "70px"
        }}>The Generics {<Heading style={{ color: "blue" }} />}</h1>
        <Home />
      </>
    ),
  },
  {
    path: "/store",
    element: (
      <>
        <Navbar />
        <h1 style={{
          textAlign: "center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor: "grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight: "bold",
          fontSize: "70px"
        }}>The Generics</h1>
        <ProductScreen />
      </>
    ),
  },
  {
    path: "/about",
    element:
      <>
        <Navbar />
        <h1 style={{
          textAlign: "center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor: "grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight: "bold",
          fontSize: "70px"
        }}>The Generics</h1>
        <About />
      </>
  },
  {
    path: "/contect-us",
    element:
      <>
        <Navbar />
        <ContectUs onAddData = {addDataHandler}/>
      </>
  }
])

  

  return (
    <CartProvider>
      <RouterProvider router={router} />

    </CartProvider>
  );
}

export default App;
