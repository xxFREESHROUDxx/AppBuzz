import React from "react";
// import "./Todolist.css";
export default function Todolist(props) {
    const todos = props.tasks;
    console.log(todos);
    return null;
    // const task = todos.map(item => {
    //     return (
    //         <div className="card" key={item.key}>
    //             <p>{item.task}</p>
    //         </div>
    //     )
    // })
    // return (
    //     <div className="col-md-6">
    //         {task}
    //     </div>
    // )

}