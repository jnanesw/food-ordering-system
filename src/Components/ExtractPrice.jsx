import { useEffect, useState } from "react"


const ExtractPrice = ({Id, Doprice})=>{
    const [Price, SetPrice] = useState(0);

    // const apiKey1="d1f70067f78248078e71a58983a18e5f"
    // const apiKey2="933fb57e83404fb6a4fa1f6735058652"
    // const apiKey3 = "e1bfe1687e084970bb0af00e14f593e9"
    // const apiKey_1 = "db254b5cd61744d39a2deebd9c361444"
    // const apiKey_2 = "88cbb41354b04d13858d7f377e338113"
    const apiKey_3 = "e31374215c8e40b4839ff7bc9fa7ed14"

    const PriceUrl = `https://api.spoonacular.com/recipes/${Id}/priceBreakdownWidget.json?apiKey=${apiKey_3}`

    const Fetch = async ()=>{
        try{
            const responsePrice = await fetch(PriceUrl);
            if(responsePrice.ok){
                let data=await responsePrice.json();
                console.log("Inside Try price: ", data.totalCost)
                SetPrice(data.totalCost)
                if(Doprice){
                    Doprice(Price)
                }
                console.log("Data: ",data)
            }
            else{
                console.log("Error inside TRY", Id)
            }
        }
        catch(error){
            console.log("Error from CATCH", error);
        }
    }
    useEffect(()=>{
        Fetch();
    },[PriceUrl])
    if(Price === undefined || Price<=0){
        return "loading..."
    }
    // console.log("Type of from Etract price: ", typeof Price);
    // Item.price = Price;

    return Price;
}


export default ExtractPrice;