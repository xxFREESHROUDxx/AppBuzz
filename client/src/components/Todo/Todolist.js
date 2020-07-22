import React from 'react';


const Todolist = ({ item }) => {
    // const doing = (item) =>{
    //     if (item.st) {
            
    //     }
    // }
    // const todo=() =>{
    //     return (item.status==="todo" ? true : false);
    // }
    // const doing =() => {
    //     return (item.status==="doing"? true : false);
    // }

    // const completed =() => {
    //     return (item.status==="completed"? true : false);
    // }
   return(
       <li key={item.key} className="p-1">{item.task}</li>
       );
}

export default Todolist;