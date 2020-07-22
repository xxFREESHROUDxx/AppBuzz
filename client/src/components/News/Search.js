import React, { Component } from "react";
import { Loading } from "../macros/Loading";
import axios from "axios";
import "./search.css";
import Result from "./Result";
class News extends Component{
    constructor(props){
        super(props);
        // props.addExperience(data, history);
        this.state = {
            news:[],
            query:"",
            sort:"newest",
            timeElapsed:"",
            loading:false,
        }
        this.setQuery = this.setQuery.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
    }
    setQuery = (event) =>{
        const query = event.target.value;
        this.setState({
            query:query
        });
        // useHistory(history.pushState(null,null,'/search_news?query=test'))
        console.log(this.state.query)
    }
    searchQuery = (event) => {
        event.preventDefault();
        this.setState({
            loading:true
        })
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I&q=${this.state.query}&sort=${this.state.sort}`)
        .then(result =>{
            // console.log(result.data.response.docs)
            this.setState({
                news: result.data.response.docs,
                loading:false,
                timeElapsed: result.data.response.meta.time,
            })
            console.log(this.state);
        }).catch(err => {
            console.log(err)
        })
    }
   
    render(){
        return(
           <div className="container">
           <Loading loading= {this.state.loading}/>
               <div className="row">
                   <div className="col-md-6 m-auto">
                        <div className="col-12 mt-5">
                            <form className="form-inline" onSubmit={this.searchQuery}>
                                <div className="form-group textfield">
                                    <input type="text"
                                     placeholder="Type here to search..." 
                                     className="form-control inline-input"
                                     onChange={this.setQuery}
                                      />
                                </div>
                                <div className="form-group searchbtn">
                                    <button type="submit" 
                                    placeholder="Type here to search..." 
                                    className="btn btn-linkedin" >
                                    <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                       <div className="form-wrap">
                            {this.state.news.map((article, i) => <div key={i} className="test"><Result article={article} /></div>)}
                       </div>
                   </div>
               </div>

           </div>
        )
    }

}
export default News;