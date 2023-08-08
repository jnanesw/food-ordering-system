import { useEffect, useState } from "react"


const ExtractPrice = ({Id})=>{
    const [Price, SetPrice] = useState('');

    // const apiKey1="31acdd66710542f383c420ea61c5d494"
    const apiKey2="933fb57e83404fb6a4fa1f6735058652"
    // const apiKey3 = "e1bfe1687e084970bb0af00e14f593e9"
    const PriceUrl = `https://api.spoonacular.com/recipes/${Id}/priceBreakdownWidget.json?apiKey=${apiKey2}`

    const Fetch = async ()=>{
        try{
            const responsePrice = await fetch(PriceUrl);
            if(responsePrice.ok){
                let data=await responsePrice.json();
                console.log("Inside Try price: ", data.totalCost)
                SetPrice(data.totalCost)
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
    },[])
    if(Price === undefined || Price<=0){
        return 300
    }
    return Price;
}


export default ExtractPrice;