import { useState } from 'react';
import OurOfferings from "../components/OurOfferings";
import StepCardStack from "../components/StepCardStack";
import Packages from '../assets/images/packages.jpg'
import { AnimatePresence } from 'framer-motion';
import RegistrationForm from '../components/RegistrationForm';

const steps = [
	{
		id: 1,
		title: "Create a Business Account",
		desc: "Sign up your business in minutes and get access to our reliable delivery network. It's fast and frictionless.",
		img: ''
	},
	{
		id: 2,
		title: "Schedule Deliveries",
		desc: "Easily request deliveries through our platform. We handle the pickup and drop-off logistics seamlessly.",
		img: ''
	},
	{
		id: 3,
		title: "Track & Satisfy",
		desc: "Track packages in real-time and provide your customers with a prompt, secure, and professional delivery experience.",
		img: ''
	},
];

const Businesses = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="w-full">
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

			<div>
				<div className="py-0 md:py-24">
					<OurOfferings title="Why Join Zoom Dispatch?" />
				</div>
			</div>			

			<div className="min-h-screen flex flex-col items-center justify-center pb-0 md:pb-24">
				<h2 className="text-3xl font-medium tracking-tight text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2 mb-16">
					Just 3 steps to get started
				</h2>
				<StepCardStack steps={steps} />
			</div>

			<div className='w-auto min-h-dvh bg-[#0a0a0a] overflow-hidden flex flex-col justify-end md:justify-center relative mx-3 mb-24 rounded-4xl'>
				<div className='w-full md:w-[45%] p-8 sm:p-10 md:p-20 z-20 flex flex-col justify-center relative pb-16 md:pb-20'>
					<h2 className='text-5xl font-medium text-[#ff2424] mb-6 tracking-tight'>
						Streamline your business deliveries<br />
						with Zoom Dispatch
					</h2>
					
					<p className='text-sm text-[#F4F4F4]/70 font-medium mb-12 max-w-md'>
						Sign up takes 2 minutes. Try it out today!
					</p>
					
					<button 
						onClick={() => setShowForm(true)} 
						className='bg-[#FF2424] text-[#101010] px-12 py-4 tracking-wide rounded-full font-bold text-md w-fit hover:bg-[#FF2424]/90 transition-all cursor-pointer'
					>
						Sign up now
					</button>
				</div>
				
				<div className='absolute inset-0 md:left-auto md:right-0 w-full md:w-[65%] pointer-events-none z-0'>
					<div className='absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/90 md:via-[#0a0a0a]/60 to-transparent z-10 hidden md:block'></div>
					<div className='absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 md:hidden'></div>
					
					<img 
						src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
						alt="Orange Delivery Motorcycle" 
						className='w-full h-full object-cover object-center translate-x-0 md:translate-x-12 opacity-60 md:opacity-80'
					/>
				</div>
			</div>

			<AnimatePresence>
				{showForm && (
					<RegistrationForm onClose={() => setShowForm(false)} />
				)}
			</AnimatePresence>
		</div>
	);
};

export default Businesses;