import React from 'react';


const Article = ({ article }) => {
//    console.log(article);
   return(<div className="card mt-5">
        <div className="card-header">
            <h3>{article.title}</h3>
        </div>
        <div className="card-body">
            <img src={article.urlToImage} alt="news img" width="100%"/>
            <p>{article.content}</p>
        </div>
        <div className="card-footer d-block w-100 px-2">
            <span className="w-50 f-left">Author: {article.author ? article.author: "unknown"}</span>
            <span className="w-50 f-right">{ article.publishedAt }</span>
        </div>
    </div>);
}

export default Article;