import React, { Component } from "react";
import { Loading } from "../macros/Loading";
import axios from "axios";
import Article from "./Article";
import { Link } from "react-router-dom";


class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news:[],
            loading:true,
        }
    }
    componentDidMount(){
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I')
        .then(result =>{
            // console.log(result.data.results)
            this.setState({
                news: result.data.results,
                loading:false
            })
            // console.log(this.state.news);
        }).catch(err => {
            console.log(err)
        })
    
    }
    
    render(){
        return(
           <div className="container">
           <Loading loading= {this.state.loading}/>
               <div className="row">
                   <div className="col-md-11 col-lg-8 m-auto">
                        <div className="col-2 ml-auto text-right">
                            <Link to="/news_search">
                                <button className="btn btn-linkedin mt-2 btn-sm">
                                    <i className="fas fa-search"></i>
                                </button>
                            </Link>
                        </div>
                       <div className="form-wrap">
                            {this.state.news.map((article, id) => <div key={id} className="test"><Article article={article} /></div>)}
                       </div>
                   </div>
               </div>

           </div>
        )
    }

}
export default News;