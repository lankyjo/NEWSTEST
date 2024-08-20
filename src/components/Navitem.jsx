import React from "react";

const Navitem = ({ news, className }) => {
  return (
<div className={`card ${className}`} >
      <img src={news.image? news.image:'./src/assets/image.webp'} className="card-img-top img-thumbnail rounded" />
      <div className="card-body">
        <h5 className="card-title">{news.title.length > 84 ? news.title.slice(0,84)+ ' ...' : news.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
        <p className="card-text">
            <span className="fw-bold">SOURCE: </span> 
          {news.source}
        </p>
        <p className="time"><span className="fw-bolder">Published</span>: {news.published_at}</p>
        </div>
     
        <a href={news.url} className="btn btn-danger ">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Navitem;
