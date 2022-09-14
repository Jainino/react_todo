import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import ToDoTask from './ToDoTask'

class ToDoList extends React.Component {

	render(){
		return (
		<div>
			<h1>{this.props.name}<NavLink to = "/add"><i className="fa fa-plus"></i></NavLink></h1>
			<ul>
				{
					this.props.tasks.map(task=>{
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

function mapStateProps(state) {
	return {
		tasks:[...state.tasks]
	}
}

export default connect(mapStateProps) (ToDoList);
