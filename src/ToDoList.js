import React from 'react'
import ToDoTask from './ToDoTask'
import ToDoTaskAdd from './ToDoTaskAdd'

class ToDoList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			tasks: []
		}
		this.addTask = this.addTask.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
	}
	
	addTask(task){
		this.setState({
			tasks:[...this.state.tasks,task]
		});
	}
	deleteTask(id){
		this.setState({
			tasks: this.state.tasks.filter(task=> task._id!==id)
		})
	}
		
	
	
	componentDidMount() {
		fetch('http://127.0.0.1:3000/tasks').then(res=>res.json()).then(data=>{
			this.setState({
				tasks:data
			});
		});		
	}
	
	render(){
		return (
		<div>
		<h1>Dobavitb zadachu:</h1>
		<ToDoTaskAdd onTaskAdd={this.addTask}/>
			<h1>{this.props.name}:</h1>
			<ul>
				{
					this.state.tasks.map(task=>{
						return <ToDoTask key={task._id} _id={task._id} name={task.task_name} done={task.done}
						        onTaskDelete={this.deleteTask}/>
					}
					)
				}
			</ul>
		</div>
		)
	}
}

export default ToDoList;
