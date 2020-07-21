import React, { Component } from "react";
import Todolist from "./Todolist";
// import Todolist from "./Todolist";

class Todo extends Component{
    constructor(props){
        super(props);
        this.setTask = this.setTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        // this.Todolist = this.Todolist.bind(this);
        this.setPriority = this.setPriority.bind(this);
        this.setStatus = this.setStatus.bind(this);

        this.state = {
            tasks:[],
            current : {
                task:'',
                key:'',
                priority:'medium',
                status:'todo'
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

    setPriority = (event) =>{
        event.persist();
        this.setState(prevState => ({
            ...prevState.current,
            current:{
                priority: event.target.value,
            }
            
        })
        )
        
    }
    setStatus = (event) =>{
        this.setState({
            current:{
                status:event.target.value
            }
        })
    }

    saveTask = (event) => {
        event.preventDefault(); 
        const newTask = this.state.current;
        if (newTask.task!=="") {
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
        }
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
                                   <input type="text" className="form-control" placeholder="Task....." onChange={this.setTask} />
                               </div>
                               {/* <div className="form-group">
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
                               </div> */}
                               <div className="form-group">
                                   <input className="btn btn-sm btn-outline-dark btn-block" type="submit" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
                <div className="container">
                {this.state.tasks.map((task, i) => <div key={i} className="test"><Todolist item={task} /></div>)}
                </div>
           </div>
        )
    }

}
export default Todo;