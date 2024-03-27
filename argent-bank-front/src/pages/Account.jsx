import '../assets/css/main.css'
import { AccountPreview } from '../components/AccountPreview'

export const Account = () => {
	return (
		<main class="main bg-dark">
			<div class="header">
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<button class="edit-button">Edit Name</button>
			</div>
			<h2 class="sr-only">Accounts</h2>
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
