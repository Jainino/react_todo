import React from 'react'


class ToDoTask extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			done: props.done
		}
		
		this.onTaskClick = this.onTaskClick.bind(this)
	}
	
	onTaskClick(e){
		e.preventDefault()
		
		fetch(`http://127.0.0.1:3000/tasks/${this.props._id}`,{
			method:'PATCH'
		}).then(res=>{
		if(res.status ==200) {
			this.setState({
				done: !this.state.done
			})
		}
	})
	}
	
	render(){
		let task = <li onClick={this.onTaskClick}>{this.props.name}:{this.state.done ? 'Done' : 'Todo'}</li>
		return task
		}
}

export default ToDoTask;
