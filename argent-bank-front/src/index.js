import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { Account } from './pages/Account'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/account/:user" element={<Account />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
)
