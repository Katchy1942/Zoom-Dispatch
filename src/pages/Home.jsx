import HeroSection from "../components/HeroSection";
import OurOfferings from "../components/OurOfferings";
import RiderHighlight from "../components/RiderHighlight";
import PackagesAndPrice from "../components/PackagesAndPrice";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";
import ClosureUI from "../components/ClosureUI";
import Packages from '../assets/images/packages.jpg'
import { useState } from "react";

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
			<div className="min-h-screen w-full flex flex-col justify-center overflow-hidden relative">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">Have You Got a Business?</h2>
				<div 
					className="relative min-h-screen w-full px-6 md:px-10 pt-16 flex items-center bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${Packages})` }}
				>
					<div className="absolute inset-0 bg-[#101010]/80 sm:bg-linear-to-r sm:from-[#101010] sm:via-[#101010]/80 sm:to-transparent"></div>
					<div className="absolute inset-0 bg-linear-to-t from-[#101010] via-[#101010]/50 to-transparent h-40 top-auto"></div>
					
					<div className="relative z-10 flex w-full gap-6">
						<div className="w-full md:w-[55%] lg:w-1/2 flex flex-col items-start justify-center min-h-[calc(100vh-4rem)] pt-12">
							<h1 className="text-5xl font-bold tracking-tight leading-16 mb-4 text-white">
								Level up your business logistics
							</h1>
							<p className="text-sm font-medium text-[#F4F4F4]/70 mb-12">
								Partner with Zoom Dispatch to deliver your products swiftly and reliably to your customers.
							</p>
							<div className="flex flex-col gap-1">
								<button onClick={() => setShowForm(true)} className="bg-[#FF0000] w-fit text-[#101010] px-6 py-3 text-sm font-bold cursor-pointer rounded-full tracking-wide hover:bg-[#FF0000]/90 transition-colors">Sign up now</button>
								<span className="text-[10px] text-[#F4F4F4]/50 ml-1">Before registering, please ensure that you have your business information ready</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ClosureUI />
		</div>
	)
}

export default Home;
