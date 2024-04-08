import { useSelector, useStore } from 'react-redux'
import '../assets/css/main.css'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'
import { getUser } from '../app/selectors'

export const EditUserInfo = ({ setIsEditing }) => {
	const store = useStore()
	const user = useSelector(getUser)
	const handleSubmit = (e) => {
		e.preventDefault()
		const userName = document.getElementById('userName').value
		store.dispatch(editUserInfoSlice.actions.updateuserName(userName))
		setIsEditing(false)
	}

	const leave = (e) => {
		e.preventDefault()
		setIsEditing(false)
	}
	return (
		<form className="EditUserInfo" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="userName">User name: </label>
			<input type="text" name="userName" id="userName"></input>
			<br />
			<label htmlFor="firstname">First name: </label>
			<input
				type="text"
				name="firstname"
				id="firstname"
				value={user.firstName}
				readOnly
			></input>
			<br />
			<label htmlFor="lastname">Last name: </label>
			<input
				type="text"
				name="lastname"
				id="lastname"
				value={user.lastName}
				readOnly
			></input>
			<br />
			<button type="submit">Save</button>
			<button onClick={(e) => leave(e)}>Cancel</button>
		</form>
	)
}
