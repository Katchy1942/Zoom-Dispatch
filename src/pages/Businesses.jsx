import { useState } from 'react';
import { X } from 'lucide-react';
import OurOfferings from "../components/OurOfferings";
import StepCardStack from "../components/StepCardStack";
import Packages from '../assets/images/packages.jpg'
import { motion, AnimatePresence } from 'framer-motion';

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
	const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		const message = `*NEW BUSINESS REGISTRATION*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* _${formData.email}_%0A*Phone:* ${formData.phone}`;
		window.open(`https://wa.me/2347013339219?text=${message}`, '_blank');
		setShowForm(false);
		setFormData({ firstName: '', lastName: '', email: '', phone: '' });
	};

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
					<motion.div 
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
						onClick={() => setShowForm(false)}
						key="backdrop"
					>
						<motion.div 
							className="bg-[#1A1818] py-8 px-6 rounded-2xl w-full max-w-md border border-[#FF0000]/30 shadow-xl relative"
							onClick={(e) => e.stopPropagation()}
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 20, scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							<button 
								onClick={() => setShowForm(false)} 
								className="absolute top-4 right-4 text-[#F4F4F4]/70 hover:text-white transition-colors cursor-pointer"
							>
								<X size={20} />
							</button>
							<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Register your Business</h3>
							<p className="text-sm text-[#F4F4F4]/70 mb-6">Enter your details and we'll be in touch.</p>
							
							<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
								<div className="flex gap-4">
									<div className="flex-1">
										<label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">First Name</label>
										<input 
											type="text"
											required
											value={formData.firstName}
											onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
											className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff2424] focus:outline-none transition-colors" 
										/>
									</div>
									<div className="flex-1">
										<label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Last Name</label>
										<input 
											type="text"
											required
											value={formData.lastName}
											onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
											className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff2424] focus:outline-none transition-colors" 
										/>
									</div>
								</div>
								
								<div>
									<label className="block text-sm font-semibold text-[#F4F4F4]/70  mb-1.5">Email Address</label>
									<input 
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
										className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff2424] focus:outline-none transition-colors" 
									/>
								</div>
								
								<div>
									<label className="block text-sm font-semibold text-[#F4F4F4]/70  mb-1.5">Phone Number</label>
									<input 
										type="tel"
										required
										value={formData.phone}
										onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
										className="w-full bg-[#101010] font-medium text-sm rounded-xl border border-[#101010] focus:border-[#ff2424] focus:outline-none transition-colors p-3 text-white" 
									/>
								</div>

								<div className="flex gap-4 mt-4">
									<button 
										type="submit" 
										className="flex-1 px-6 py-3 bg-[#FF0000] text-sm tracking-wide rounded-full text-[#101010] font-bold hover:bg-[#FF0000]/90 transition-colors cursor-pointer"
									>
										Continue
									</button>
								</div>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Businesses;