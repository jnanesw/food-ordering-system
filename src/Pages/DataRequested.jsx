
import { useEffect, useState } from "react";
import ExtractPrice from "../Components/ExtractPrice";
const DataRequested = ({search})=>{

    const [Response, SetResponse] = useState([]);

    // const apiKey1="31acdd66710542f383c420ea61c5d494"
    const apiKey2="d1f70067f78248078e71a58983a18e5f"
    var url = `https://api.spoonacular.com/food/search?apiKey=${apiKey2}&query=${search}`;
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
        if(search!== undefined){
            Extract(url);
        }
      },[search, url]);
    

    console.log("Data From outside: ",Response)
    // var link=""
    return(
        <div>
            <div className="requested-data">
                <ul className="requested-data-lists">
                {
                    Response.map((entry) => (
                        
                        entry.results.map((result, index)=>(
                            <div  key={index} className="requested-list">
                                <img src={result.image} alt="img" />
                                <h1>{result.name}</h1>
                                <p>Price:{<ExtractPrice Id={result.id} />}</p>
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