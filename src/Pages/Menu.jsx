import {useState } from "react";
import DataRequested from "./DataRequested";
import Home from "./Home"
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import cake from "../assets/cake.jpg"
import chicken from "../assets/chicken.jpg"
import sweet from "../assets/sweet.jpg"
const Menu = ()=>{
    const [Search, SetSearch] = useState("");
    const [ShowData, setShowData] = useState(false);
    const Update = (event)=>{
        console.log(event.target.value)
        SetSearch(event.target.value)
    }
    const handleSearch = () => {
        setShowData(true);
    };
    const UpdateFastSearsch = (event)=>{
        let content;
        if (event.target.tagName === "SPAN") {
            content = event.target.textContent;
        }else if (event.target.tagName === "DIV") {
            const spanElement = event.target.querySelector("span");
            content = spanElement.textContent;
        }
        else if(event.target.tagName === "IMG" ){
            const parentDiv = event.target.parentElement;
            const spanElement = parentDiv.querySelector("span");
            content = spanElement.textContent;
        }
        SetSearch(content);
        setShowData(true);
    }
    return(
        <div>
            <div>
                <label htmlFor="search">Search Menu </label>
                <input type="text" id="search" className="search" onBlur={Update} />
                <button placeholder="menu" onClick={handleSearch}>Search</button>
            </div>
            <div className="Fastsearch">
                <div  onClick={UpdateFastSearsch}>
                    <img src={pizza} alt="img" id="fast-items-image" />
                    <span>Pizza</span>
                </div>
                <div  onClick={UpdateFastSearsch}>
                    <img src={burger} alt="img" id="fast-items-image" />
                    <span>Burger</span>
                </div>
                <div  onClick={UpdateFastSearsch}>
                    <img src={chicken} alt="img" id="fast-items-image" />
                    <span>Chicken</span>
                </div>
                <div  onClick={UpdateFastSearsch}>
                    <img src={cake} alt="img" id="fast-items-image" />
                    <span>Cake</span>
                </div>
                <div  onClick={UpdateFastSearsch}>
                    <img src={sweet} alt="img" id="fast-items-image" />
                    <span>Sweet</span>
                </div>
            </div>
            <div>{Search.length>0? ShowData && <DataRequested search={Search} />: <Home />}</div>
        </div>
    )
}

export default Menu;