
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

/**
 * FilterMenu component for filtering items.
 * 
 * @param {boolean} isOpen - Whether the menu is open
 * @param {function} onClose - Function to close the menu
 * @param {string} selected - Current selected filter
 * @param {function} onSelect - Function to update selected filter
 */
const FilterMenu = ({ isOpen, onClose, selected, onSelect }) => {
	const filters = ["Foods", "Drugs", "Other"];

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
					/>
					
					{/* Slide-out Panel */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-black/60 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 p-6 flex flex-col gap-6"
					>
						<div className="flex justify-between items-center border-b border-white/10 pb-4">
							<h2 className="text-xl font-semibold tracking-tight text-white">Filter By</h2>
							<button 
								onClick={onClose}
								className="p-2 hover:bg-white/10 rounded-full transition-colors"
							>
								<X className="w-5 h-5 text-white/70" />
							</button>
						</div>

						<div className="flex flex-col gap-3">
							{filters.map((filter) => (
								<button
									key={filter}
									onClick={() => onSelect(filter)}
									className={`
										flex items-center justify-between p-4 rounded-3xl cursor-pointer border transition-all duration-200
										${selected === filter 
											? "bg-[#FF0000]/20 border-[#FF0000]/40 text-white shadow-[0_0_15px_rgba(255,0,0,0.15)]" 
											: "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"}
									`}
								>
									<span className="font-medium">{filter}</span>
									{selected === filter && (
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											className="bg-[#FF0000] p-1 rounded-full"
										>
											<Check className="w-3 h-3 text-white" strokeWidth={3} />
										</motion.div>
									)}
								</button>
							))}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default FilterMenu;
