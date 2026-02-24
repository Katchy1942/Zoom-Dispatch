import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import PlaceAnOrder from './pages/PlaceAnOrder';
import Businesses from './pages/Businesses';
import BikeOwners from './pages/BikeOwners';
import Footer from './components/Footer';

const PageTransition = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -15 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};

const App = () => {
	const location = useLocation();

	return (
		<div className="bg-[#101010] text-[#F4F4F4] flex flex-col min-h-screen overflow-x-hidden">
			<Header />
			<div className="grow">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<PageTransition><Home /></PageTransition>} />
						<Route path="/about" element={<PageTransition><About /></PageTransition>} />
						<Route path="/place-an-order" element={<PageTransition><PlaceAnOrder /></PageTransition>} />
						<Route path="/businesses" element={<PageTransition><Businesses /></PageTransition>} />
						<Route path="/bike-owners" element={<PageTransition><BikeOwners /></PageTransition>} />
					</Routes>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
};

export default App;