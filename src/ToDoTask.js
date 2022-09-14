import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from './actions'



class ToDoTask extends React.Component {
	
	constructor(props){
		super(props)
		this.onTaskClick = this.onTaskClick.bind(this)
		this.onTaskDeleteClick = this.onTaskDeleteClick.bind(this)
	}
	
	onTaskClick(e){
		e.preventDefault()
		
		fetch(`http://127.0.0.1:3000/tasks/${this.props._id}`,{
			method:'PATCH'
		}).then(res=>{
		if(res.status ===200) {
			this.props.dispatch(toggleTodo(this.props._id))
		}
	})
	}
	
	onTaskDeleteClick(e){
		e.preventDefault()
		
		fetch(`http://127.0.0.1:3000/tasks/${this.props._id}`,{
			method:'DELETE'
		}).then(res=>{
		if(res.status ===200) {
			this.props.dispatch(removeTodo(this.props._id))
			}
		})
	}
	
	render(){
		return (
			<li onClick={this.onTaskClick}>
				<span onClick={this.onTaskDeleteClick}> 
					<i className="fa fa-trash" ></i>
				</span>
					{this.props.name}:{this.props.done ? 'Done':'Todo'}
			</li>
		);
	}
}

export default connect() (ToDoTask);
