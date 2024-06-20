import React from 'react';
import "./Article.css"
import image  from "../assets/newspaper.jpg"
const Article = ({ article }) => {
    let title =article.title;
    let description =article.description;
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={article?article.urlToImage:image} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <div>
      <h2 className='card-title'>{title?title.slice(0,50):""}</h2>
      <p className='card-text'>{ description?description.slice(0,90):""}</p>
      <a href={article.url} className='btn btn-primary' target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
    </div>
    </div>
  );
};

export default Article;

