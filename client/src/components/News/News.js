import React, { Component } from "react";
import { Loading } from "../macros/Loading";
import axios from "axios";
import Article from "./Article";

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news:[],
            loading:true,
        }
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?language=en&apiKey=c83c394a780a49908e5fd6ae7e40e5ed')
        .then(result =>{
            // console.log(result.data.articles)
            this.setState({
                news: result.data.articles,
                loading:false
            })
            // console.log(this.state.news);
        })
    
    }
    render(){
        return(
           <div className="container">
           <Loading loading= {this.state.loading}/>
               <div className="row">
                   <div className="col-md-6 m-auto">
                       <div className="form-wrap">
                            {this.state.news.map((article, i) => <div key={i} className="test"><Article article={article} /></div>)}
                       </div>
                   </div>
               </div>

           </div>
        )
    }

}
export default News;