import { useSelector } from 'react-redux'
import '../assets/css/main.css'
import { AccountPreview } from '../components/AccountPreview'
import { getuserName } from '../app/selectors'
import { useState } from 'react'
import { EditUserInfo } from '../components/EditUserInfo'

export const Account = () => {
	const userName = useSelector(getuserName)

	const [isEditing, setIsEditing] = useState(false)

	return (
		<main className="main bg-dark">
			<div className="header">
				{!isEditing ? (
					<>
						<h1>
							Welcome back
							<br />
							{userName}
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
