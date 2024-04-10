/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import '../assets/css/main.css'
import { useGetProfileMutation, useLoginMutation } from '../app/apiSlice'
import { useStore } from 'react-redux'
import { signInSlice } from '../slices/signInSlice'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'

export const SignIn = () => {
	const navigate = useNavigate()
	const store = useStore()
	const [login] = useLoginMutation()
	const [getProfile] = useGetProfileMutation()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = {
			email: document.getElementById('userName').value,
			password: document.getElementById('password').value,
		}

		const reponse = await login(formData)
			.unwrap()
			.then(async (reponse) => {
				if (reponse.status === 200) {
					store.dispatch(
						signInSlice.actions.setToken(reponse.body.token),
					)
					sessionStorage.setItem('token', reponse.body.token)
				}
				const profile = await getProfile()
					.unwrap()
					.then((reponse) => {
						store.dispatch(
							editUserInfoSlice.actions.updateUser(reponse.body),
						)
						sessionStorage.setItem(
							'user',
							JSON.stringify(reponse.body),
						)
						navigate('/account')
					})
					.catch((e) => {
						console.log('error: ', e)
						console.log(`status code: ${e.data.status}`)
					})
			})
			.catch((e) => {
				console.log(e.data.message)
				console.log(`status code: ${e.data.status}`)
			})
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="userName">Username</label>
						<input type="text" id="userName" />
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
