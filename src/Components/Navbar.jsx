import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import AboutUs from "../Pages/AboutUs";
// import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Header from "./Header";
import AddToCart from "../Pages/AddToCart";
import { useState } from "react";

const Navbar = ()=>{
    const [cartItems, SetcartItems] = useState([])
    const [Price, SetPrice] = useState(0);
    return(
        <div className="bg-[url('./assets/bg-hotdog.jpg')] bg-cover md:h-full md:w-full">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu SetcartItems={SetcartItems} SetPrice={SetPrice} />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/add-to-cart" element={cartItems.length>0?<AddToCart CartItems={cartItems} price={Price} />:
                    <h1 className="text-white">The cart is Empty</h1>} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar;