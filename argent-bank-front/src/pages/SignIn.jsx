import { useNavigate } from 'react-router-dom'
import '../assets/css/main.css'

export const SignIn = () => {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate('/account/1')
	}
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button
						type="submit"
						class="sign-in-button"
						onClick={(e) => handleSubmit(e)}
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	)
}
