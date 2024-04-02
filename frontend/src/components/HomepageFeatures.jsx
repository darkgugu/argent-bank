import '../assets/css/main.css'

export const HomepageFeatures = ({ title, img, alt, text }) => {
	return (
		<div className="feature-item">
			<img src={img} alt={alt} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	)
}
