export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_ALL = 'ADD_TODO_ALL'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(text, prompt, _id){
	return{type:ADD_TODO,text,prompt,_id}
}

export function addTodoAll(todos) {
	return {type:ADD_TODO_ALL, todos}
}

export function toggleTodo(id) {
	return {type:TOGGLE_TODO,id}
}

export function removeTodo(id){
	return {type:REMOVE_TODO, id}
}