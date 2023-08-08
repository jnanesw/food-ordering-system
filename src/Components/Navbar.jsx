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
    // var cartItems = [{'id':655249}, {'id':646543},{'id':1077393}]
    const [cartItems, SetcartItems] = useState([])
    return(
        <div className="bg-[url('./assets/bg-hotdog.jpg')] bg-cover md:h-full md:w-full">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu SetcartItems={SetcartItems} />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/add-to-cart" element={cartItems.length>0?<AddToCart CartItems={cartItems} />: <h1 className="text-white">The cart is Empty</h1>} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar;