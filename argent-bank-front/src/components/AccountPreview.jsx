import '../assets/css/main.css'

export const AccountPreview = ({ title, amount, desc }) => {
	return (
		<section class="account">
			<div class="account-content-wrapper">
				<h3 class="account-title">{title}</h3>
				<p class="account-amount">{amount}</p>
				<p class="account-amount-description">{desc}</p>
			</div>
			<div class="account-content-wrapper cta">
				<button class="transaction-button">View transactions</button>
			</div>
		</section>
	)
}
