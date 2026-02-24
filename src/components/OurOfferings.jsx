const OurOfferings = ({ title }) => {
	const services = [
		{ 
			id: 1, 
			title: "Lightning Speed", 
			desc: "We don't just move packages; we race against time. Your deliveries arrive faster than you can say 'Zoom'." 
		},
		{ 
			id: 2, 
			title: "Safety First", 
			desc: "Your items are precious. We treat every package like it's our own, ensuring it arrives in perfect condition." 
		},
		{ 
			id: 3, 
			title: "Real-Time Tracking", 
			desc: "Never wonder where your package is. Track your delivery in real-time from pickup to drop-off." 
		},
		{ 
			id: 4, 
			title: "24/7 Support", 
			desc: "Shipping doesn't sleep, and neither do we. Our team is always ready to assist you, day or night." 
		},
	];

	return (
		<div className="h-screen w-full px-6 md:px-10 flex flex-col justify-center">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">{title || "Why Use Zoom Dispatch?"}</h2>

				<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-8 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
					{services.map((service) => (
						<div 
							key={service.id} 
							className="snap-center shrink-0 w-[82vw] md:w-[400px] h-[500px] bg-[#1A1A1A] rounded-3xl p-6 flex flex-col shadow-inner shadow-[#FF0000]/20 transition-transform hover:scale-[1.01]"
						>
							<div className="w-full h-64 bg-[#FF0000]/20 rounded-2xl animate-pulse mb-6 shadow-inner shrink-0"></div>
							
							<div className="flex grow flex-col">
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