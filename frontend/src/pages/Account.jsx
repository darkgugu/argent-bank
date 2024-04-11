import { useSelector } from 'react-redux'
import '../assets/css/main.min.css'
import { AccountPreview } from '../components/AccountPreview'
import { getToken, getUser } from '../app/selectors'
import { useEffect, useState } from 'react'
import { EditUserInfo } from '../components/EditUserInfo'
import { useStore } from 'react-redux'
import { signInSlice } from '../slices/signInSlice'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'

export const Account = () => {
	const store = useStore()
	const token = useSelector(getToken)

	useEffect(() => {
		if (token !== sessionStorage.getItem('token')) {
			store.dispatch(
				signInSlice.actions.setToken(sessionStorage.getItem('token')),
			)
			store.dispatch(
				editUserInfoSlice.actions.updateUser(
					JSON.parse(sessionStorage.getItem('user')),
				),
			)
		}
	})

	const user = useSelector(getUser)

	const [isEditing, setIsEditing] = useState(false)

	//console.log('session token :', sessionStorage.getItem('token'))

	return (
		<main className="main bg-dark">
			<div className="header">
				{!isEditing ? (
					<>
						<h1>
							Welcome back
							<br />
							{user.firstName} {user.lastName}
						</h1>
						<button
							className="edit-button"
							onClick={() => setIsEditing(true)}
						>
							Edit Name
						</button>
					</>
				) : (
					<EditUserInfo setIsEditing={setIsEditing} />
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<AccountPreview
				title="Argent Bank Checking (x8349)"
				amount="$2,082.79"
				desc="Available Balance"
			/>
			<AccountPreview
				title="Argent Bank Savings (x6712)"
				amount="$10,928.42"
				desc="Available Balance"
			/>
			<AccountPreview
				title="Argent Bank Credit Card (x8349)"
				amount="$184.30"
				desc="Current Balance"
			/>
		</main>
	)
}
