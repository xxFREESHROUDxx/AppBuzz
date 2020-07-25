import React, { useState, useEffect } from "react";
import axios from "axios";
import {Loading} from "../macros/Loading";
import Book from "./Book";

const Books = () => {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() =>{
        Data();
    },[]);

    
    async function Data(){
       await axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I")
        .then(response => {
           setBooks(response.data.results.lists);
           setLoading(false);
           
        })
        .catch(error => {
            console.log(error);
        });
        }
       
     

    
        return(
         
           <div className="container">
           <Loading loading={loading} />
               <div className="row">
                   <div className="col-md-12 col-lg-8 col-sm-12 m-auto">
                   <h3 className="text-center mt-3">Best Seller of Week</h3><hr />
                        {books.map((book,i) => <Book book={book} key={i} />)}
                   </div>
               </div>

           </div>
        )
    }
export default Books; 