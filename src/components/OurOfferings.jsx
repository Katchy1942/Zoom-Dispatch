import LightningSpeed from "../assets/images/bike2.jpg"
import Package1 from "../assets/images/package1.jpg"
import RealTimeTracking from "../assets/images/realtime-tracking.jpg"
import CustomerSupport from "../assets/images/customer-support.jpg"

const OurOfferings = ({ title }) => {
	const services = [
		{ 
			id: 1, 
			title: "Lightning Speed", 
			desc: "We don't just move packages; we race against time. Your deliveries arrive faster than you can say 'Zoom'.",
			image: LightningSpeed
		},
		{ 
			id: 2, 
			title: "Safety First", 
			desc: "Your items are precious. We treat every package like it's our own, ensuring it arrives in perfect condition.",
			image: Package1
		},
		{ 
			id: 3, 
			title: "Real-Time Tracking", 
			desc: "Never wonder where your package is. Track your delivery in real-time from pickup to drop-off.",
			image: RealTimeTracking
		},
		{ 
			id: 4, 
			title: "24/7 Support", 
			desc: "Shipping doesn't sleep, and neither do we. Our team is always ready to assist you, day or night.",
			image: CustomerSupport
		},
	];

	return (
		<div className="h-screen w-full px-6 md:px-10 flex flex-col justify-center">
			<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">{title || "Why Use Zoom Dispatch?"}</h2>

			<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-8 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
				{services.map((service) => (
					<div 
						key={service.id} 
						className="snap-center shrink-0 w-[82vw] md:w-[400px] h-[512px] bg-[#1A1A1A] rounded-3xl p-6 flex flex-col shadow-inner shadow-[#FF0000]/20 transition-transform hover:scale-[1.01]"
					>
						<div className="w-full h-72 relative">
							<img src={service?.image} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
							<div className="absolute inset-0 bg-black/50 rounded-2xl pointer-events-none"></div>
						</div>
						
						<div className="flex grow flex-col mt-4">
							<h3 className="text-2xl font-medium tracking-tight text-white mb-3">{service.title}</h3>
							<p className="text-sm text-[#F4F4F4]/70 font-medium">{service.desc}</p>
						</div>
						
						<div className="mt-4 pt-4 border-t border-[#FF0000]/20">
							<span className="text-sm font-semibold text-[#FF0000]">0{service.id}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default OurOfferings