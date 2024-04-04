import { useNavigate } from 'react-router-dom'
import '../assets/css/main.css'
import { useLoginMutation } from '../app/apiSlice'
import { useStore } from 'react-redux'
import { signInSlice } from '../slices/signInSlice'

export const SignIn = () => {
	const navigate = useNavigate()
	const store = useStore()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const reponse = await login({
			email: 'steve@rogers.com',
			password: 'password456',
		}).unwrap()

		/* 		console.log('reponse :', reponse.body.token)
		console.log('reponse.status :', reponse.status) */

		if (reponse.status === 200) {
			store.dispatch(signInSlice.actions.setToken(reponse.body.token))
		} else {
			console.log('error')
		}

		console.log(store.getState())

		//navigate('/account/1')
	}

	const [login] = useLoginMutation()
	//console.log('data', loginData)

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
						className="sign-in-button"
						onClick={(e) => handleSubmit(e)}
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	)
}
