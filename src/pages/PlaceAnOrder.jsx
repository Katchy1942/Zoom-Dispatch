import { useState } from "react";
import { Filter, Star, Stars } from "lucide-react";
import FilterMenu from "../components/FilterMenu";

const PlaceAnOrder = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState("Foods");

	return (
		<div className="min-h-screen w-full pt-32 mb-24 px-6 md:px-10 relative">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-medium tracking-tight text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">
					Place An Order
				</h1>
				<p className="text-center text-sm font-medium">
					Your favourite brands are already here. Place an order to expereince a
					<span className="italic"> zoom dispatch</span>.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
				{
					Array.from({length: 4}).map((_, index) => (
						<div key={index} className="group w-full flex flex-col p-4 bg-white/5 rounded-2xl hover:border-[#FF0000]/40 cursor-pointer border border-white/10 transition-all duration-300 hover:shadow-inner hover:shadow-[#FF0000]/5">
							<div className="flex justify-between items-start">
								<div className="w-12 h-12 bg-white/10 rounded-full border border-transparent group-hover:border-[#FF0000]/40 group-hover:scale-110 transition-all duration-300"></div>
								<button className="text-xs font-medium cursor-pointer bg-white/10 px-4 py-2 rounded-xl group-hover:bg-[#FF0000] group-hover:text-white transition-all duration-300">
									Visit Store
								</button>
							</div>
							<div className="mt-4">
								<div className="w-full h-48 bg-white/10 rounded-xl  group-hover:border-[#FF0000]/40 transition-all duration-300"></div>
							</div>
							<div className="mb-12 mt-4">
								<h3 className="text-md mb-2 font-semibold line-clamp-1 group-hover:text-[#FF0000] transition-colors duration-300">
									Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt
								</h3>
								<p className="line-clamp-2 text-sm font-medium text-[#F4F4F4]/70 group-hover:text-[#F4F4F4] transition-colors duration-300">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
								</p>
							</div>
							<div className="mt-auto flex items-center justify-between">
								<span className="text-xs font-medium text-[#F4F4F4]/60 group-hover:underline transition-colors duration-300">
									Ratings and Reviews (4)
								</span>
								<span className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-full group-hover:bg-[#FF0000]/20 transition-colors duration-300">
									<Star size={14} fill="#FF0000" stroke="#FF0000" className="group-hover:scale-110 transition-transform duration-300" />
									4.1
								</span>
							</div>
						</div>
					))
				}
			</div>

			{/* Filter Button */}
			{/* <button
				onClick={() => setIsFilterOpen(true)}
				className="flex items-center gap-2 fixed cursor-pointer bottom-8 right-8 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-inner shadow-[#FF0000]/20 hover:bg-black/80 transition-all duration-300 z-30 group"
			>
				<Filter className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm">Filter</span>
			</button> */}

			{/* Filter Menu */}
			{/* <FilterMenu 
				isOpen={isFilterOpen} 
				onClose={() => setIsFilterOpen(false)}
				selected={selectedFilter}
				onSelect={setSelectedFilter}
			/> */}
		</div>
	);
};

export default PlaceAnOrder;