import { useSelector, useStore } from 'react-redux'
import '../assets/css/main.min.css'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'
import { getUser } from '../app/selectors'
import { useUpdateUsernameMutation } from '../app/apiSlice'

export const EditUserInfo = ({ setIsEditing }) => {
	const store = useStore()
	const user = useSelector(getUser)
	const [updateuserName] = useUpdateUsernameMutation()

	const handleSubmit = (e) => {
		e.preventDefault()
		const userName = document.getElementById('userName').value
		store.dispatch(editUserInfoSlice.actions.updateuserName(userName))
		updateuserName({
			userName: userName,
		})
			.unwrap()
			.then()
			.catch((e) => console.log(e))
		setIsEditing(false)
	}

	const leave = (e) => {
		e.preventDefault()
		setIsEditing(false)
	}
	return (
		<form className="EditUserInfo" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="userName">User name: </label>
			<input
				className="edit-user-field"
				type="text"
				name="userName"
				id="userName"
				defaultValue={user.userName}
			></input>
			<br />
			<label htmlFor="firstname">First name: </label>
			<input
				className="edit-user-field uneditable"
				type="text"
				name="firstname"
				id="firstname"
				value={user.firstName}
				readOnly
			></input>
			<br />
			<label htmlFor="lastname">Last name: </label>
			<input
				className="edit-user-field uneditable"
				type="text"
				name="lastname"
				id="lastname"
				value={user.lastName}
				readOnly
			></input>
			<br />
			<button className="edit-user-button" type="submit">
				Save
			</button>
			<button className="edit-user-button" onClick={(e) => leave(e)}>
				Cancel
			</button>
		</form>
	)
}
