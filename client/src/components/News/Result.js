import React from 'react';
import Moment from 'react-moment';

const Result = ({ article }) => {
//    console.log(article);
   return(<div className="card mt-5">
        <div className="card-header">
            <h4>
            <a href={article.web_url}>{article.headline.main}</a> 
            </h4>
        </div>
        <div className="card-body">
            <p>{article.lead_paragraph}</p>
        </div>
        <div className="card-footer d-block w-100 px-2">
            <span className="w-50 f-left">Category: {article.section_name ? article.section_name: "unknown"}</span>
            <span className="w-50 f-right">
            Published on: 
            <Moment format="YYYY/MM/DD">
            { article['pub_date'] }
            </Moment>
            </span>
        </div>
    </div>);
}

export default Result;