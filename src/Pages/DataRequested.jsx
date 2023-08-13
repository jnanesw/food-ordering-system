
import { useEffect, useState } from "react";
import ExtractPrice from "../Components/ExtractPrice";
const DataRequested = ({search, SetCartItems})=>{

    const [Response, SetResponse] = useState([]);
    const [WantedPriceId, SetWantedPriceId] = useState("")
    

    // const apiKey1="933fb57e83404fb6a4fa1f6735058652"
    // const apiKey2="d1f70067f78248078e71a58983a18e5f"
    // const apiKey3 = "e1bfe1687e084970bb0af00e14f593e9"
    // const apiKey_1 = "db254b5cd61744d39a2deebd9c361444"
    // const apiKey_2 = "e31374215c8e40b4839ff7bc9fa7ed14"
    // const apiKey_3 = "88cbb41354b04d13858d7f377e338113"
    const apiKey_4 = "56f193acdfdb4203849a4f2ccce9f7ca"

    var url = `https://api.spoonacular.com/food/search?apiKey=${apiKey_4}&query=${search}`;

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

    const UpdateCartItems = (id, DemoName, link)=>{
        var total_price = 1;
        const PriceUrl = `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${apiKey_4}`
        const Fetch = async ()=>{
            try{
                const responsePrice = await fetch(PriceUrl);
                if(responsePrice.ok){
                    let data=await responsePrice.json();
                    total_price = data.totalCost
                    SetCartItems((PrevcartItems)=>[...PrevcartItems, {"id":id, "price":total_price, "name":DemoName, "image":link, "quantity":1}])
                }
                else{
                    console.log("Error inside TRY", id)
                }
            }
            catch(error){
                console.log("Error from CATCH", error);
            }
        }
        Fetch()
    }
    const UpdateWantedPriceItem = (id)=>{
        SetWantedPriceId(id);
    }

    return(
        <div>
            <div className="requested-data ">
                <ul className="requested-data-lists">
                {
                    Response.map((entry) => (
                        
                        entry.results.map((result, index)=>(
                            <div  key={index} className="requested-list">
                                <img src={result.image} alt="img" className="item-image cursor-pointer" />
                                <h1 className="item-name">{result.name}</h1>
                                

                                {WantedPriceId === result.id?(<p className="item-name">Price:{
                                    <ExtractPrice Id={WantedPriceId} />

                                }</p>):
                                (<button className="cart-buttons lg:mt-[8%]" onClick={()=>{
                                    if(result.id){
                                        UpdateWantedPriceItem(result.id);
                                    }
                                }}>Get the Price</button>)}<br />

                                <button className="cart-buttons md:mb-[5%]" onClick={()=>{
                                    if(result.id){
                                        UpdateCartItems(result.id, result.name, result.image);
                                    }
                                }} >Add to cart</button>
                            </div>
                        ))
                    ))
                }
                </ul>
            </div>
        </div>
    )
}
export default DataRequested;