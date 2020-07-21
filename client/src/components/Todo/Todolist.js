import React from 'react';


const Todolist = ({ item }) => {
    // const doing = (item) =>{
    //     if (item.st) {
            
    //     }
    // }
   return(<div className="col-12 mt-1">
       <ul>
         <li key={item.key}>{item.task}</li>
        </ul>
    </div>);
}

export default Todolist;