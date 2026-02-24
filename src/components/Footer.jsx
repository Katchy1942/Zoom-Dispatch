import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone} from 'lucide-react';
import Logo from '/full-logo.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		services: [
			{ name: 'Run Errands', path: '#' },
			{ name: 'Business Logistics', path: '#' },
			{ name: 'Place Orders', path: '/#' },
			{ name: 'Deliveries', path: '/#' },
		],
		legal: [
			{ name: 'Terms of Service', path: '#' },
			{ name: 'Privacy Policy', path: '#' }
		]
	};

  return (
    <footer className="bg-[#070707] text-[#F4F4F4] pt-20 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link to="/" className="w-fit">
              <img src={Logo} alt="Zoom Dispatch Logo" className="w-20 brightness-0 invert" />
            </Link>
            <p className="text-[#F4F4F4]/60 leading-relaxed text-sm">
              We revolutionize logistics with speed, security, and reliability. Your trusted partner for all delivery needs, from errands to business solutions.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[Instagram, Mail, Phone].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#FFFFFF]/5 flex items-center justify-center hover:bg-[#FF2424] hover:text-[#101010] transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#F4F4F4]/60 hover:text-[#FF2424] transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row text-[10px] items-center justify-between gap-4">
            <p className="text-[#F4F4F4]/40">
              &copy; {currentYear} Zoom Dispatch. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="text-[#F4F4F4]/40 hover:text-[#FF2424] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
