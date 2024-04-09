import '../assets/css/main.css'
import logo from '../assets/img/argentBankLogo.png'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import { getUserName } from '../app/selectors'
import { signInSlice } from '../slices/signInSlice'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'

export const Header = () => {
	const { pathname } = useLocation()
	const userName = useSelector(getUserName)
	const store = useStore()

	const handleSignOut = (e) => {
		store.dispatch(signInSlice.actions.clearToken())
		store.dispatch(editUserInfoSlice.actions.clearUser())
	}

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{pathname !== '/account' ? (
					<Link className="main-nav-item" to="/signin">
						<i className="fa fa-user-circle"></i> Sign In
					</Link>
				) : (
					<>
						<Link className="main-nav-item">
							<i className="fa fa-user-circle"></i> {userName}
						</Link>
						<Link
							className="main-nav-item"
							to="/"
							onClick={(e) => handleSignOut(e)}
						>
							<i className="fa fa-sign-out"></i> Sign Out
						</Link>
					</>
				)}
			</div>
		</nav>
	)
}
