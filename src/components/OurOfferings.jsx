import { HugeiconsIcon } from '@hugeicons/react';
import { 
	FlashIcon, 
	Shield01Icon, 
	CustomerService02Icon 
} from '@hugeicons/core-free-icons';

const OurOfferings = ({ title }) => {
	const services = [
		{ 
			id: 1, 
			title: "Lightning Speed", 
			desc: "We don't just move packages; we race against time. Your deliveries arrive faster than you can say 'Zoom'.",
			icon: FlashIcon
		},
		{ 
			id: 2, 
			title: "Safety First", 
			desc: "Your items are precious. We treat every package like it's our own, ensuring it arrives in perfect condition.",
			icon: Shield01Icon
		},
		{ 
			id: 4, 
			title: "24/7 Support", 
			desc: "Shipping doesn't sleep, and neither do we. Our team is always ready to assist you day or night.",
			icon: CustomerService02Icon
		},
	];

	return (
		<div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
			<div className="text-center mb-20">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">
					{title || "Fast, Reliable, and Professional Delivery Services"}
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
				{services.map((service) => (
					<div key={service.id} className="flex flex-col gap-5 bg-[#FF2424] text-[#101010] p-5 rounded-4xl shadow-sm shadow-[#FF0000]/20">
						<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#101010]/10 border border-[#101010]/20 text-[#101010]">
							<HugeiconsIcon icon={service.icon} size={24} strokeWidth={1.5} />
						</div>
						
						<div>
							<h3 className="text-xl font-bold text-[#101010] mb-3">
								{service.title}
							</h3>
							<p className="text-sm text-[#101010]/80 max-w-md leading-relaxed font-medium">
								{service.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default OurOfferings