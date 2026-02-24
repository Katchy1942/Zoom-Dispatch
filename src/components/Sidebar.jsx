import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Sidebar = ({ navLinks }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [partnerOpen, setPartnerOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<div className="md:hidden flex items-center">
			<button onClick={() => setIsOpen(true)} className="text-[#F4F4F4] cursor-pointer">
				<Menu size={28} />
			</button>

			{createPortal(
				<>
					<div 
						className={`fixed inset-0 bg-[#101010]/80 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
						onClick={() => setIsOpen(false)}
					></div>

					<div className={`fixed top-0 right-0 h-dvh w-64 bg-[#070707] z-50 transform transition-transform duration-300 flex flex-col pt-20 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-[#FF0000]/20`}>
						<button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#F4F4F4] cursor-pointer">
							<X size={28} />
						</button>

						<ul className="flex flex-col gap-6 text-[#F4F4F4] text-sm font-medium">
							{navLinks.map((link) => (
								<li key={link.name}>
									{link.name !== "Partner With Us" ? (
										<Link to={link.href} className="hover:text-[#FF0000] transition-colors" onClick={() => setIsOpen(false)}>
											{link.name}
										</Link>
									) : (
										<div className="flex flex-col gap-4">
											<div className="flex flex-row justify-between items-center cursor-pointer" onClick={() => setPartnerOpen(!partnerOpen)}>
												<span className="hover:text-[#FF0000] transition-colors">{link.name}</span>
												<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${partnerOpen ? 'rotate-180' : ''}`} />
											</div>
											<div className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${partnerOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
												<Link to="/bike-owners" className="text-sm hover:text-[#FF0000] transition-colors" onClick={() => setIsOpen(false)}>
													Bike Owners
												</Link>
												<Link to="/businesses" className="text-sm hover:text-[#FF0000] transition-colors" onClick={() => setIsOpen(false)}>
													Businesses
												</Link>
											</div>
										</div>
									)}
								</li>
							))}
						</ul>
						<div className="mt-8">
							<button className="bg-[#FF0000] w-full text-[#101010] px-6 py-3 text-sm font-bold rounded-full tracking-wide hover:bg-[#FF0000]/90 transition-colors cursor-pointer">
								Let's help you deliver
							</button>
						</div>
					</div>
				</>, document.body
			)}
		</div>
	);
};

export default Sidebar;
