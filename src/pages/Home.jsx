import HeroSection from "../components/HeroSection";
import OurOfferings from "../components/OurOfferings";
import RiderHighlight from "../components/RiderHighlight";
import PackagesAndPrice from "../components/PackagesAndPrice";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";
import ClosureUI from "../components/ClosureUI";
import Packages from '../assets/images/packages.jpg'
import Rider from '../assets/images/bike1.jpg'
import { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from "react-router-dom";

const Home = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<div>
			<HeroSection />
			<OurOfferings />
			<RiderHighlight />
			{/* <PackagesAndPrice /> */}
			<UseCases />
			<Reviews />
			<div className="min-h-screen mx-4 flex flex-col justify-center overflow-hidden relative rounded-4xl">
				<div 
					className="relative min-h-screen w-full px-6 md:px-10 pt-16 flex items-center bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${Packages})` }}
				>
					<div className="absolute inset-0 bg-[#101010]/80 sm:bg-linear-to-r sm:from-[#101010] sm:via-[#101010]/80 sm:to-transparent"></div>
					<div className="absolute inset-0 bg-linear-to-t from-[#101010] via-[#101010]/50 to-transparent h-40 top-auto"></div>
					
					<div className="relative z-10 flex w-full gap-6">
						<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-12">
							<h1 className="text-4xl font-semibold text-center tracking-tight md:leading-16 mb-4 text-white">
								Level up your business logistics
							</h1>
							<p className="text-sm font-medium text-center text-[#F4F4F4]/70 mb-12">
								Partner with Zoom Dispatch to deliver your products swiftly and reliably to your customers.
							</p>
							<div className="flex flex-col items-center justify-center gap-1">
								<div className="flex items-center gap-2">
									<button onClick={() => setShowForm(true)} className="bg-[#FF0000] w-fit text-[#101010] px-6 py-3 text-base font-bold cursor-pointer rounded-full hover:bg-[#FF0000]/90 transition-colors">Sign up now</button>
									<Link to="/businesses" className="border border-[#ff0000] text-base font-bold cursor-pointer px-6 py-3 rounded-full">Learn More</Link>
								</div>
								<span className="text-[10px] text-[#F4F4F4]/50 text-center ml-1">Before registering, please ensure that you have your business information ready</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-screen mx-4 flex flex-col justify-center overflow-hidden relative rounded-4xl mt-12 mb-24">
				<div 
					className="relative min-h-screen w-full px-6 md:px-10 pt-16 flex items-center bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${Rider})` }}
				>
					<div className="absolute inset-0 bg-[#101010]/80 sm:bg-linear-to-r sm:from-[#101010] sm:via-[#101010]/80 sm:to-transparent"></div>
					<div className="absolute inset-0 bg-linear-to-t from-[#101010] via-[#101010]/50 to-transparent h-40 top-auto"></div>
					
					<div className="relative z-10 flex w-full gap-6">
						<div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-12">
							<h1 className="text-4xl font-semibold tracking-tight text-center md:leading-16 mb-4 text-white">
								Got a bike or already a rider?
							</h1>
							<p className="text-sm font-medium text-center text-[#F4F4F4]/70 mb-12">
								Join our growing community of bike riders and earn money on your own terms.
							</p>
							<div className="flex flex-col items-center justify-center gap-1">
								<div className="flex items-center gap-2">
									<button onClick={() => setShowForm(true)} className="bg-[#FF0000] w-fit text-[#101010] px-6 py-3 text-base font-bold cursor-pointer rounded-full hover:bg-[#FF0000]/90 transition-colors">Sign up now</button>
									<Link to="/bike-owners" className="border border-[#ff0000] text-base font-bold cursor-pointer px-6 py-3 rounded-full">Learn More</Link>
								</div>
								<span className="text-[10px] text-[#F4F4F4]/50 text-center ml-1">Before registering, please ensure that you have all the required documents</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ClosureUI />
			<AnimatePresence>
				{showForm && (
					<RegistrationForm onClose={() => setShowForm(false)} />
				)}
			</AnimatePresence>
		</div>
	)
}

export default Home;
