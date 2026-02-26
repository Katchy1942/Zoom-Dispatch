import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/full-logo.png'
import { ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);


	const navLinks = [
		{
			name: "Home",
			href: "/"
		},
		{
			name: "About",
			href: "/about"
		},
		{
			name: "Place an Order",
			href: "/place-an-order"
		},
		{
			name: "Partner With Us",
			href: "/partner"
		}
	]

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setVisible(false);
			} else {
				setVisible(true);
			}

			if (currentScrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<div 
			className={`fixed top-0 left-0 right-0 z-30 w-full transition-all duration-500 ${
				visible ? 'translate-y-0' : '-translate-y-full'
			} ${
				scrolled 
					? 'bg-[#2B2928]/40 backdrop-blur-lg shadow-sm' 
					: 'bg-transparent'
			}`}
		> 
			<nav className="flex justify-between items-center w-full px-4 py-3 sm:px-8">	
				<Link to="/" className="flex-initial">
					<img src={Logo} alt="Logo" className='w-20' />
				</Link>
				
				<div className="hidden md:flex flex-1 justify-center text-sm font-medium">
					<ul className="flex gap-8 text-[#F4F4F4]">
						{navLinks.map((link) => (
							<li key={link.name} className="relative group cursor-pointer">
								{link.name !== "Partner With Us" ? (
									<Link to={link.href} className="transition-colors whitespace-nowrap hover:text-[#FF0000]">
										{link.name}
									</Link>
								) : (
									<div className="flex items-center gap-1 transition-colors">
										<span className='hover:text-[#FF0000]'>{link.name}</span>
										<ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
										
										<ul className="absolute top-full right-0 mt-4 bg-[#101010] border border-[#FF0000]/20 rounded-xl py-2 shadow-lg shadow-black/50 overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform origin-top z-50 min-w-[200px]">
											{[
												{ name: 'Bike Owners', path: '/bike-owners' },
												{ name: 'Businesses', path: '/businesses' }
											].map((item) => (
												<li key={item.name}>
													<Link 
														to={item.path}
														className="block px-5 py-2.5 text-sm font-medium text-[#F4F4F4] hover:text-[#FF0000] hover:bg-white/5 transition-colors whitespace-nowrap"
													>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>

				<div className="flex items-center gap-4">
					<div className="hidden sm:block">
						<button className="bg-[#FF0000] w-fit text-[#101010] px-6 py-2.5 text-sm font-bold cursor-pointer rounded-full tracking-wide hover:bg-[#FF0000]/90 transition-colors">Let's help you deliver</button>
					</div>
					<Sidebar navLinks={navLinks} />
				</div>
			</nav>
		</div>
	);
};

export default Header