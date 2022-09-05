import React from 'react'


class ToDoTaskAdd extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			task_name: '',
			prompt:''
		}
		this.onPromptChange = this.onPromptChange.bind(this)
		this.onTaskNameChange = this.onTaskNameChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	
	
	onFormSubmit(e){
		e.preventDefault()
		
		fetch('http://127.0.0.1:3000/tasks/',{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				task_name: this.state.task_name,
				prompt: this.state.prompt
			})
		}).then(res=>res.json()).then(data=> {
			this.props.onTaskAdd(data);
		})
	}
	
	onTaskNameChange(e){
		e.preventDefault()
		this.setState({
			task_name: e.target.value
		})
	}
	onPromptChange(e){
		e.preventDefault()
		this.setState({
			prompt: e.target.value
		})
	}
	
	render(){
		
		
		return (
		<form onSubmit={this.onFormSubmit}>
			<input type="text" value={this.state.task_name} onChange={this.onTaskNameChange}/>
			<input type="text"value={this.state.prompt} onChange={this.onPromptChange}/>
			<input type="submit" value="Добавить задачу"/>
		</form>
		);
		}
}

export default ToDoTaskAdd;
