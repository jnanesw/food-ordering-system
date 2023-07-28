import { useEffect, useState } from "react"


const ExtractPrice = ({Id})=>{
    const [Price, SetPrice] = useState(0);

    // const apiKey1="31acdd66710542f383c420ea61c5d494"
    const apiKey2="d1f70067f78248078e71a58983a18e5f"
    const PriceUrl = `https://api.spoonacular.com/recipes/${Id}/priceBreakdownWidget.json?apiKey=${apiKey2}`

    const Fetch = async ()=>{
        try{
            const responsePrice = await fetch(PriceUrl);
            if(responsePrice.ok){
                let data=await responsePrice.json();
                SetPrice(data.totalCost)
                console.log(data)
            }
            else{
                console.log("Error inside TRY")
            }
        }
        catch(error){
            console.log("Error from CATCH", error);
        }
    }
    useEffect(()=>{
        Fetch(Id);
    },[Id])
    return Price;
}


export default ExtractPrice;