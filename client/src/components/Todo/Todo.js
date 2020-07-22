import React, { Component } from "react";
import Todolist from "./Todolist";
// import Todolist from "./Todolist";
import "./todo.css";

class Todo extends Component{
    constructor(props){
        super(props);
        this.setTask = this.setTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.setPriority = this.setPriority.bind(this);
        this.setStatus = this.setStatus.bind(this);

        this.state = {
            tasks:[],
            current : {
                task:'',
                key:'',
                priority:'',
                status:''
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
            ...this.state.current,
               task:event.target.value,
                key: Date.now() 
            }, 
        })
    }

    setPriority = (event) =>{
      
        this.setState({
            current:{
                ...this.state.current,
                priority:event.target.value,
            }
        })
    
        
    }
    setStatus = (event) =>{
        this.setState({
            current:{
                ...this.state.current,
                status:event.target.value
            }
        })
    }

    saveTask = (event) => {
        event.preventDefault(); 
        const newTask = this.state.current;
        if (newTask.task!==''||newTask.priority!==""||newTask.status!=="") {
            console.log(newTask)
            const Todos =  [newTask, ...this.state.tasks];
                 this.setState({
                    tasks: Todos,
                    current : {
                        task:'',
                        key:'',
                        priority:'',
                        status:''
                    }
                })
                localStorage.setItem('todos', JSON.stringify(Todos));   
        }else{
            alert("Enter all feilds")
        }
    }

   

   
    render(){
        const doing = this.state.tasks.filter(function(task){
                 if (task.status==="doing") {
                    return task;
                }
        })
        const todo = this.state.tasks.filter(function(task){
                 if (task.status==="todo") {
                    return task;
                }
        })
        const completed = this.state.tasks.filter(function(task){
                 if (task.status==="completed") {
                    return task;
                }
        })
        // console.log(doing,todo,completed);
        return(
           <div className="container">
               <div className="row">
                   <div className="col-md-8 m-auto col-lg-8">
                       <div className="form-wrap mt-1">
                            <h4 className="text-center">Add to-do task</h4><hr />
                           <form onSubmit={this.saveTask} >
                               <div className="form-group">
                                   <input type="text" className="form-control" placeholder="Task....." onChange={this.setTask} value={this.state.current.task} />
                               </div>
                               <div className="form-group">
                                    <label>choose priority</label>
                                   <select className="form-control" onChange={this.setPriority} value={this.state.current.priority}>
                                       <option value="medium">Medium</option>
                                       <option value="low">Low</option>
                                       <option value="high">High</option>
                                   </select>
                               </div>
                               <div className="form-group">
                               <label>Set Status</label>
                                   <select className="form-control" onChange={this.setStatus} value={this.state.current.status}>
                                       <option value="todo">To do</option>
                                       <option value="doing">Doing</option>
                                       <option value="completed">Completed</option>
                                   </select>
                               </div>
                               <div className="form-group">
                                   <input className="btn btn-sm btn-outline-dark btn-block" type="submit" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
               <p className="ml-auto">Slide <i className="fas fa-arrow-alt-circle-right"></i></p>
                <div className="row todos_wrap">
                    <div className="todos_box">
                        <div className="todo p-2 mx-2">
                        <h4>To Do</h4>
                            {todo.map((task, i) => <Todolist item={task} key={i} />)}
                        </div>
                        <div className="doing p-2 mx-2">
                        <h4>Doing</h4>
                            {doing.map((task, i) => <Todolist item={task} key={i} />)}
                        </div>
                        <div className="completed p-2 mx-2">
                        <h4>Completed</h4>
                            {completed.map((task, i) => <Todolist item={task} key={i} />)}
                        </div>
                    </div>
                </div>
           </div>
        )
    }

}
export default Todo;