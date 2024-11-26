import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductScreen from "./components/productscreen/productscreen";
import Navbar from "./components/navbar/Navbar";
import CartProvider from "./components/store/Cart-Provider";
import About from "./components/navbar-component/about";
import Home from "./components/navbar-component/home"
import Heading from "./components/Heading/Heading";

const router = createBrowserRouter([
  {
    path: "/",
    element:(
       <>
          <Navbar/>
          <h1 style={{textAlign:"center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor:"grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight:"bold",
          fontSize:"70px"
        }}>The Generics {<Heading style={{color:"blue"}}/>}</h1>
          <Home/>
       </>
    ),
  },
  {
    path: "/store",
    element: (
      <>
        <Navbar />
        <h1 style={{textAlign:"center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor:"grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight:"bold",
          fontSize:"70px"
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
      <h1 style={{textAlign:"center",
          color: "white", // Green color for the text
          fontFamily: "Times New Roman", // Font style
          backgroundColor:"grey", // Light background color
          paddingBottom: "100px",
          borderRadius: "8px",
          marginTop: "2px",
          fontWeight:"bold",
          fontSize:"70px"
        }}>The Generics</h1>
      <About />
    </>
  },
])

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
