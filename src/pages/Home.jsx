import HeroSection from "../components/HeroSection";
import OurOfferings from "../components/OurOfferings";
import RiderHighlight from "../components/RiderHighlight";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";
import ClosureUI from "../components/ClosureUI";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import RegistrationForm from '../components/RegistrationForm';
import Partnership from "../components/Partnership";
import SEO from '../components/SEO';

const Home = () => {
   const [showForm, setShowForm] = useState(false);

   return (
      <div>
         <SEO 
            title="Home"
            description="Zoom Dispatch - Your premier partner for fast, secure, and reliable delivery services."
            keywords="zoom dispatch, express delivery, urban logistics, courier services"
         />
         <HeroSection />
         <OurOfferings />
         <RiderHighlight />
         <UseCases />
         <Reviews />
         <Partnership />
         <ClosureUI />
         <AnimatePresence>
            {showForm && (
               <RegistrationForm onClose={() => setShowForm(false)} />
            )}
         </AnimatePresence>
      </div>
   )
}

export default Home;
