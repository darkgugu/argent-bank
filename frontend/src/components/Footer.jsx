import '../assets/css/main.min.css'

export const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className="footer">
			<p className="footer-text">Copyright {year} Argent Bank</p>
		</footer>
	)
}
