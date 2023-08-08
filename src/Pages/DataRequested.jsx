
import { useEffect, useState } from "react";
import ExtractPrice from "../Components/ExtractPrice";
// import AddToCart from "./AddToCart";

const DataRequested = ({search, SetCartItems})=>{

    const [Response, SetResponse] = useState([]);
    // const [ cartItems, SetCartItems ] = useState([]);
    

    // const apiKey1="933fb57e83404fb6a4fa1f6735058652"
    // const apiKey2="d1f70067f78248078e71a58983a18e5f"
    const apiKey3 = "e1bfe1687e084970bb0af00e14f593e9"
    var url = `https://api.spoonacular.com/food/search?apiKey=${apiKey3}&query=${search}`;
    console.log(url)

    const Extract = async (url)=>{
        const response = await fetch(url)
        try{
            if(response.ok){
                const data = await response.json()
                SetResponse(data.searchResults)
            }
            else{
                console.log("Error")
            }
        }
        catch(error){
            console.log("Found the Error: ", error)
        }
    }

    useEffect(() => {
        if(search !== undefined){
            Extract(url);
        }
      },[search, url]);

    const UpdateCartItems = (id)=>{
        SetCartItems((PrevcartItems)=>[...PrevcartItems, {"id":id}])
    }
    
    console.log("Data From outside: ",Response)
    return(
        <div className="bg-[url('./assets/bg-glass.jpg')] bg-cover">
            <div className="requested-data ">
                <ul className="requested-data-lists">
                {
                    Response.map((entry) => (
                        
                        entry.results.map((result, index)=>(
                            <div  key={index} className="requested-list">
                                <img src={result.image} alt="img" className="item-image cursor-pointer" />
                                <h1 className="item-name">{result.name}</h1>
                                <p className="item-name">Price:{<ExtractPrice Id={result.id} />}</p>
                                <button onClick={()=>{
                                    if(result.id){
                                        UpdateCartItems(result.id);
                                    }
                                }} >Add to cart</button>
                            </div>
                        ))
                    ))
                }
                </ul>
                {/* <AddToCart CartItems={cartItems} /> */}
            </div>
        </div>
    )
}
export default DataRequested;