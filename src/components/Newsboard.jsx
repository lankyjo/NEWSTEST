import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";

const Newsboard = ({category,title}) => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let url = category;
        let response = await fetch(url);
        
        let data = await response.json();
        setArticle(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [category]);
  


  
  return <>
    <h1 className="text-center my-5 align-items-center d-flex text-capitalize flex-wrap-reverse justify-content-center align-items-center"><span className="badge text-bg-danger">Breaking</span>Headlines in {title}</h1>

    <div className="row justify-content-center align gap-2 m-0 py-5 ">

            {articles.map((article, index)=>{
                return <Navitem key={index} news={article} className= 'col-lg-3 col-sm-4 p-0' />
            })}
    </div>
  </>;
};

export default Newsboard;
