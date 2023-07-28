import { useEffect, useState } from "react";

const Home = ()=>{
    const url="https://www.themealdb.com/api/json/v1/1/categories.php";
    const [Response, SetResponse] = useState([]);
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            SetResponse(data.categories);
          } else {
            console.log("Error in fetching the categories");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
     
      useEffect(() => {
        fetchData();
      }, []);
    return(
        <div>
            {
                Response.map((item, index)=>(
                    <ul className="home-items" key={index}>
                        <li>
                            <span>
                                <img src={item.strCategoryThumb} alt="img"/>
                                <p>{item.strCategory}</p>
                                <p>Description: {item.strCategoryDescription}</p>
                            </span>
                        </li>
                    </ul>
                ))
            }
        </div>
    ) 
}

export default Home;