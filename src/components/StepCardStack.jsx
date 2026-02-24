import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StepCardStack = ({ steps }) => {
	const [order, setOrder] = useState([2, 1, 0]);

	const handleClick = () => {
		setOrder((prev) => {
			const newOrder = [...prev];
			const last = newOrder.pop();
			newOrder.unshift(last);
			return newOrder;
		});
	};

	const goBack = (e) => {
		e.stopPropagation();
		setOrder((prev) => {
			const newOrder = [...prev];
			const first = newOrder.shift();
			newOrder.push(first);
			return newOrder;
		});
	};

	// Card layout configs: front card is last in array (highest z)
	const cardConfigs = [
		{ scale: 0.88, y: -40, x: 24, rotate: 3, opacity: 0.4, zIndex: 1 },
		{ scale: 0.94, y: -20, x: 12, rotate: 1.5, opacity: 0.7, zIndex: 2 },
		{ scale: 1, y: 0, x: 0, rotate: 0, opacity: 1, zIndex: 3 },
	];

	return (
		<div
			className="relative w-[85vw] md:w-[400px] h-[500px]"
		>
			<AnimatePresence mode="sync">
				{order.map((stepIndex, positionIndex) => {
					const step = steps[stepIndex];
					const config = cardConfigs[positionIndex];

					return (
						<motion.div
							key={step.id}
							className="absolute inset-0 w-full h-full bg-[#1A1A1A] rounded-3xl p-6 flex flex-col shadow-inner shadow-[#FF0000]/20 border border-[#FF0000]/10"
							initial={false}
							animate={{
								scale: config.scale,
								y: config.y,
								x: config.x,
								rotate: config.rotate,
								opacity: config.opacity,
								zIndex: config.zIndex,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 25,
								mass: 0.8,
							}}
							style={{ originX: 0.5, originY: 0.5 }}
						>
							<div className="flex items-center justify-between mb-6">
								<div className="w-12 h-12 rounded-full bg-[#FF0000]/15 border border-[#FF0000]/30 flex items-center justify-center text-[#FF0000] font-bold text-lg">
									0{step.id}
								</div>
							</div>

							<div className="w-full h-48 bg-[#FF0000]/10 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
								<div className="absolute inset-0 bg-linear-to-br from-[#FF0000]/5 to-transparent" />
							</div>

							<div className="flex grow flex-col">
								<h3 className="text-2xl font-medium mb-3 tracking-tight">{step.title}</h3>
								<p className="text-sm text-[#F4F4F4]/70 font-medium">{step.desc}</p>
							</div>

							<div className="mt-4 pt-4 border-t border-[#FF0000]/20 flex items-center justify-between">
								<button
									onClick={goBack}
									className="text-sm font-semibold text-[#FF0000] hover:text-[#FF0000]/70 transition-colors cursor-pointer flex items-center gap-1.5"
								>
									<ChevronLeftIcon className="w-4" />
									Prev
								</button>
								<button
									onClick={handleClick}
									className="text-sm font-semibold text-[#FF0000] hover:text-[#FF0000]/70 transition-colors cursor-pointer flex items-center gap-1.5"
								>
									Next
									<ChevronRightIcon className="w-4" />
								</button>
							</div>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
};

export default StepCardStack;