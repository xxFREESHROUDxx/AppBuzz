import React, { Component } from "react";
// import Todolist from "./Todolist";

class Todo extends Component{
    constructor(props){
        super(props);
        this.setTask = this.setTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.Todolist = this.Todolist.bind(this);
        this.state = {
            tasks:null,
            current : {
                task:'',
                key:'',
            }
            
        }
    }
    componentDidMount(){
        const todos = JSON.parse(localStorage.getItem('todos'))  || [];
        this.setState({
            tasks: todos
        })
    }

    setTask = (event) => {
        
        this.setState({
           current: { 
               task:event.target.value,
                key: Date.now() 
            }, 
        })
    }
    saveTask = (event) => {
        event.preventDefault(); 
        const newTask = this.state.current;
        const Todos =  [newTask, ...this.state.tasks];
        console.log(Todos);

             this.setState({
                tasks: Todos,
                current : {
                    task:'',
                    key:'',
                }
            })
            console.log(this.state.tasks);
            localStorage.setItem('todos', JSON.stringify(this.state.tasks));   
       
    }

    Todolist = () => {
        const todos = this.state.tasks;
        
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
    render(){
        return(
           <div className="container">
               <div className="row">
                   <div className="col-md-6 m-auto">
                       <div className="form-wrap mt-5">
                            <h3>Add to-do task</h3>
                           <form onSubmit={this.saveTask} >
                               <div className="form-group">
                                   <input className="form-control" placeholder="Task....." onChange={this.setTask} value={this.state.current.task} />
                               </div>
                               <div className="form-group">
                                   <input className="btn btn-sm btn-success" type="submit" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
                <div className="row">
                    { this.Todolist("tok") }
                </div>
           </div>
        )
    }

}
export default Todo;