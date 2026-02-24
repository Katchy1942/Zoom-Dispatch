import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const ValuesSection = () => {
	const values = [
		{
			title: "People",
			description: "We built Zoom Dispatch around people. Our riders, our partners, and our customers are at the heart of every decision we make.",
			image: "bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')]"
		},
		{
			title: "Purpose",
			description: "Our purpose is to bridge the gap in last-mile logistics, ensuring boundaries don't limit business potential in Nigeria.",
			image: "bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')]"
		},
		{
			title: "Performance",
			description: "We utilize cutting-edge technology to optimize routes, reduce delivery times, and ensure the safety of every package.",
			image: "bg-[url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop')]" 
		}
	];

	return (
		<div className="w-full px-4 md:px-10 py-32 bg-[#101010]">
			<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">The Values that Light Our Path</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-360 mx-auto">
				{values.map((value, index) => (
					<FlipCard key={index} {...value} index={index} />
				))}
			</div>
		</div>
	);
};

const FlipCard = ({ title, description, image, index }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleFlip = () => {
		if (!isAnimating) {
			setIsFlipped(!isFlipped);
			setIsAnimating(true);
		}
	};

	const isWhiteBg = image === "bg-white";
	const textColor = isWhiteBg ? "text-[#101010]" : "text-[#F4F4F4]";
	
	return (
		<div className="w-full h-[600px] cursor-pointer group perspective-1000" onClick={handleFlip}>
			<motion.div
				className="w-full h-full relative"
				initial={false}
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
				onAnimationComplete={() => setIsAnimating(false)}
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* Front Face */}
				<div 
					className={`absolute inset-0 w-full h-full rounded-3xl p-8 flex flex-col justify-between ${image} bg-cover bg-center transition-all duration-300 border border-white/5 relative overflow-hidden`}
					style={{ backfaceVisibility: "hidden" }}
				>
					{/* Gradient overlay for text readability on images */}
					{!isWhiteBg && (
						<div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/60 z-0" />
					)}

					<div className="relative z-10 h-full flex flex-col justify-between">
						<h3 className={`text-4xl md:text-5xl font-bold ${textColor} tracking-tighter mt-4`}>{title}</h3>
						
						<button 
							onClick={(e) => { e.stopPropagation(); handleFlip(); }}
							className="bg-[#ff2424] text-[#101010] pl-6 pr-2 py-2.5 rounded-full flex items-center gap-4 font-bold text-sm w-fit transition-all duration-300 hover:scale-105 hover:bg-[#ff2424]/80 cursor-pointer"
						>
							Learn more 
							<div className="bg-[#101010] rounded-full p-1.5 flex items-center justify-center">
								<Plus className="text-[#ff2424] w-4 h-4" />
							</div>
						</button>
					</div>
				</div>

				{/* Back Face */}
				<div 
					className="absolute inset-0 w-full h-full rounded-3xl bg-[#F4F4F4] p-10 flex flex-col justify-between"
					style={{ 
						backfaceVisibility: "hidden", 
						transform: "rotateY(180deg)" 
					}}
				>
					<div>
						<h3 className="text-4xl md:text-5xl font-bold text-[#101010] mb-8 tracking-tighter">{title}</h3>
						<p className="text-[#101010]/70 text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
							{description}
						</p>
					</div>
					
					<button 
						onClick={(e) => { e.stopPropagation(); handleFlip(); }}
						className="bg-[#101010] text-[#FFFFFF] pl-6 pr-2 py-2.5 rounded-full flex items-center gap-4 font-bold text-sm w-fit transition-all duration-300 hover:scale-105 mt-auto"
					>
						Close
						<div className="bg-[#FFFFFF] rounded-full p-1.5 flex items-center justify-center">
							<X className="text-[#101010] w-4 h-4" />
						</div>
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default ValuesSection