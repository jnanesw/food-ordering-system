import {useState } from "react";
import DataRequested from "./DataRequested";
// import Home from "./Home"
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import cake from "../assets/cake.jpg"
import chicken from "../assets/chicken.jpg"
import sweet from "../assets/sweet.jpg"
import SearchIcon from '@mui/icons-material/Search';
const Menu = ({SetcartItems})=>{
    const [Search, SetSearch] = useState("");
    const [ShowData, setShowData] = useState(false);
    const [isLoading, SetisLoading] = useState(false)

    const Update = (event)=>{
        console.log(event.target.value)
        SetSearch(event.target.value)
    }

    const UpdateFastSearsch = (event)=>{
        let content;
        SetisLoading(true);
        if (event.target.tagName === "SPAN") {
            content = event.target.textContent;
            SetisLoading(false)
        }else if (event.target.tagName === "DIV") {
            const spanElement = event.target.querySelector("span");
            content = spanElement.textContent;
            SetisLoading(false)
        }
        else if(event.target.tagName === "IMG" ){
            const parentDiv = event.target.parentElement;
            const spanElement = parentDiv.querySelector("span");
            content = spanElement.textContent;
            SetisLoading(false)
        }
        SetSearch(content);
        setShowData(true);
    }
    return(
        <div>
            <div className="input">
                <label htmlFor="search" className="label">Search Menu </label>
                <div className="search-items">
                    <input placeholder="Enter your item" type="text" id="search" className="search" onBlur={Update} />
                    <button><SearchIcon /></button>
                </div>
            </div>
            <div className="Fastsearch">
                <div onClick={UpdateFastSearsch} className="fastsearch-items cursor-pointer">
                    <img src={pizza} alt="img" id="fast-items-image" />
                    <span className="fast-items-text">Pizza</span>
                </div>
                <div onClick={UpdateFastSearsch} className="fastsearch-items cursor-pointer">
                    <img src={burger} alt="img" id="fast-items-image" />
                    <span className="fast-items-text">Burger</span>
                </div>
                <div onClick={UpdateFastSearsch} className="fastsearch-items cursor-pointer">
                    <img src={chicken} alt="img" id="fast-items-image" />
                    <span className="fast-items-text">Chicken</span>
                </div>
                <div onClick={UpdateFastSearsch} className="fastsearch-items cursor-pointer">
                    <img src={cake} alt="img" id="fast-items-image" />
                    <span className="fast-items-text">Cake</span>
                </div>
                <div onClick={UpdateFastSearsch} className="fastsearch-items cursor-pointer">
                    <img src={sweet} alt="img" id="fast-items-image" />
                    <span className="fast-items-text">Sweet</span>
                </div>
            </div>
            <div>{isLoading?(<p>loading...</p>):(Search.length>0? ShowData && <DataRequested search={Search} SetCartItems={SetcartItems} />: 
            <DataRequested search={""} SetCartItems={SetcartItems} />)}</div>
        </div>
    )
}

export default Menu;