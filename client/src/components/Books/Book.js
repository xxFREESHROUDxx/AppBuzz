import React from 'react';
import BookItem from "./BookItem";

const Book = ({ book, i }) => {
   return(<div className="row">
       <div className="col-12 mt-4">
           <h4>{book.display_name}</h4><hr />
       </div><br />
       <div className="col-12">
           {book.books.map((item,i) =><BookItem item={item} key={i} />)}
       </div>
   </div>);
}

export default Book;