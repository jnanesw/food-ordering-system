import { useEffect, useState } from "react";
import bg from "../assets/img8.jpg"
import Quote from "../Components/Quote";
const Home = ({quoteValue})=>{
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
      <div className="">
          <Quote quote={true} />
          <div className="home-items-list">
              {
                  Response.map((item, index)=>(
                      <ul className="home-items" key={index}>
                          <li>
                              <span className="total-content-home">
                                  <img src={item.strCategoryThumb} alt="img" className="item-image"/>
                                  <p className="item-name">{item.strCategory}</p>
                                  {/* <p>Description: {item.strCategoryDescription.slice(0,50)+"..."}</p> */}
                                  <p className="item-name">Price: {(index+1)*100}</p>
                              </span>
                          </li>
                      </ul>
                  ))
              }
          </div>
      </div>
    ) 
}

export default Home;