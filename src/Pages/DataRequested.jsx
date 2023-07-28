
import { useEffect, useState } from "react";

const DataRequested = ({search})=>{
    var url = "https://api.spoonacular.com/food/search?apiKey=31acdd66710542f383c420ea61c5d494&query="
    const jsonString = JSON.stringify(search);
    console.log(jsonString)
    url=url+jsonString
    console.log(url)
    const [Response, SetResponse] = useState([]);


    const Extract = async (search)=>{
        const response = await fetch(url+search)
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
        Extract(search);
      },[search]);

    console.log("Data From outside: ",Response)
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
                                <h2>Price: {(index+1)*(100)}</h2>
                                <p>{result.content}</p>
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