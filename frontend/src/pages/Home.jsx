import '../assets/css/main.min.css'
import { HomepageFeatures } from '../components/HomepageFeatures'
import chatIcon from '../assets/img/icon-chat.png'
import moneyIcon from '../assets/img/icon-money.png'
import shieldIcon from '../assets/img/icon-security.png'

export const Home = () => {
	return (
		<main>
			<div className="hero">
				<section className="hero-content">
					<h2 className="sr-only">Promoted Content</h2>
					<p className="subtitle">No fees.</p>
					<p className="subtitle">No minimum deposit.</p>
					<p className="subtitle">High interest rates.</p>
					<p className="text">
						Open a savings account with Argent Bank today!
					</p>
				</section>
			</div>
			<section className="features">
				<h2 className="sr-only">Features</h2>
				<HomepageFeatures
					title="You are our #1 priority"
					text="Need to talk to a representative? You can get in touch
						through our 24/7 chat or through a phone call in less
						than 5 minutes."
					img={chatIcon}
					alt="Chat Icon"
				/>
				<HomepageFeatures
					title="More savings means higher rates"
					text="The more you save with us, the higher your interest rate will be!"
					img={moneyIcon}
					alt="Money Icon"
				/>
				<HomepageFeatures
					title="Security you can trust"
					text="We use top of the line encryption to make sure your data and money
					is always safe."
					img={shieldIcon}
					alt="Shield Icon"
				/>
			</section>
		</main>
	)
}
