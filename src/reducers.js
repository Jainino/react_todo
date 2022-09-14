import {combineReducers} from 'redux'
import {
 ADD_TODO,
 ADD_TODO_ALL,
 TOGGLE_TODO,
 REMOVE_TODO
} from './actions'

function todos(state=[], action) {
	switch(action.type) {
		case ADD_TODO:
			return [
			...state,{
				_id: action._id, 
				task_name:action.text,
				prompt:action.prompt,
				done:false
				}
			]
			
		case ADD_TODO_ALL:
			return [...action.todos]
			
		case TOGGLE_TODO:
			return state.map(task=>{
				if(task._id===action.id){
					return{...task,done: !task.done}
				}
				return task
		})
		
		case REMOVE_TODO:
			return state.filter(task => task._id !== action.id)
		default:
		return state
	}
}

const todoApp = combineReducers({
	tasks: todos
})

export default todoApp