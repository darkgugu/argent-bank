import { useStore } from 'react-redux'
import '../assets/css/main.css'
import { editUserInfoSlice } from './editUserInfoSlice'

export const EditUserInfo = ({ setIsEditing }) => {
	const store = useStore()
	const handleSubmit = (e) => {
		e.preventDefault()
		const username = document.getElementById('username').value
		store.dispatch(editUserInfoSlice.actions.updateUsername(username))
		setIsEditing(false)
	}

	const leave = (e) => {
		e.preventDefault()
		setIsEditing(false)
	}
	return (
		<form className="EditUserInfo" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="username">User name: </label>
			<input type="text" name="username" id="username"></input>
			<br />
			<label htmlFor="firstname">First name: </label>
			<input type="text" name="firstname" id="firstname"></input>
			<br />
			<label htmlFor="lastname">Last name: </label>
			<input type="text" name="lastname" id="lastname"></input>
			<br />
			<button type="submit">Save</button>
			<button onClick={(e) => leave(e)}>Cancel</button>
		</form>
	)
}
