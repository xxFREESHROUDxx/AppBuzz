import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Article = ({ article }) => {
//    console.log(article);
   return(<div className="card mt-5">
        <div className="card-header">
            <h4>
            <a href={article.url}>{article.title}</a>
            </h4>
        </div>
        <div className="card-body">
            <LazyLoadImage 
                src={article.media[0] ? article.media[0]['media-metadata'][2].url : ""} 
                alt={article.media[0] ? article.media[0].caption : "NewsImage"} 
                width="100%"
                effect="blur"

            />
        
            <p className="mt-4">{article.abstract}</p>
        </div>
        <div className="card-footer d-block w-100 px-2">
            <span className="w-50 f-left">Category: {article.section ? article.section: "unknown"}</span>
            <span className="w-50 f-right">Published on: { article['published_date'] }</span>
        </div>
    </div>);
}

export default Article;