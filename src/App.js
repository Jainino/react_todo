import React from 'react'
import {Provider,connect} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ToDoList from './ToDoList'
import ToDoTaskAdd from './ToDoTaskAdd'
import {addTodoAll} from './actions'

class App extends React.Component{
	
	componentDidMount() {
		
		fetch('http://127.0.0.1:3000/tasks').then(res=>res.json()).then(data=>{
			this.props.dispatch(addTodoAll(data))
		})
	}
	
	
	render() {
		return (
			<div id="container">
			<Provider store={this.props.store}>

					<Router>
						<Routes>
						<Route path ="/" element={<ToDoList name="Zadachi" />} />
						<Route path="/add" element={<ToDoTaskAdd name="dobavitb zadachu" />} />
						</Routes>
					</Router>
			</Provider>
		</div>
		);
	}
}
export default connect() (App);
