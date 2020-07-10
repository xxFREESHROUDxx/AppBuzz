import React, { Component } from "react";

class Todo extends Component{
    constructor(props){
        super(props);
        this.setTask = this.setTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.state = {
            tasks:[],
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
       if (newTask.task!=="") {
           const Tasks = this.state.tasks.push(newTask);
             this.setState({
                tasks: Tasks,
                current : {
                    task:'',
                    key:'',
                }
            })
            console.log(this.state);
            localStorage.setItem('todos', JSON.stringify(this.state.tasks));   
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
                                   <input className="form-control" placeholder="Task....." onChange={this.setTask} value={this.state.task} />
                               </div>
                               <div className="form-group">
                                   <input className="btn btn-sm btn-success" type="submit" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>

           </div>
        )
    }

}
export default Todo;