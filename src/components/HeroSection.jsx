import HeroAnimation from './HeroAnimation';
import Bike1 from '../assets/images/bike2.jpg'

const HeroSection = () => {
   return (
      <div 
         className="relative min-h-screen w-full px-6 md:px-10 pt-16 flex items-center bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${Bike1})` }}
      >
         <div className="absolute inset-0 bg-[#101010]/80 sm:bg-linear-to-r sm:from-[#101010] sm:via-[#101010]/80 sm:to-transparent"></div>
         <div className="absolute inset-0 bg-linear-to-t from-[#101010] via-[#101010]/50 to-transparent h-40 top-auto"></div>
         
         <div className="relative z-10 flex w-full gap-6 items-center">
            <div className="w-full md:w-1/2 flex flex-col">
               <h1 className="text-5xl font-bold tracking-tight leading-16 mb-4 text-white">Delivery at the speed of <span className="bg-[#FF0000] text-[#101010] pb-1">Zoom.</span></h1>
               <p className="text-sm font-medium text-[#F4F4F4]/70 mb-12">We didn't name ourselves Zoom Dispatch for nothing. Experience the fastest, most reliable courier service in Enugu.</p>
               <div className="flex flex-col gap-1">
                  <button className="bg-[#FF0000] w-fit text-[#101010] px-6 py-2.5 text-[18px] font-bold cursor-pointer rounded-full tracking-wide hover:bg-[#FF0000]/90 transition-colors">Let's help you deliver</button>
                  <span className="text-[10px] text-[#F4F4F4]/50 ml-1">Currently serving Enugu, Nigeria.</span>
               </div>
            </div>
            <div className="w-1/2 aspect-square hidden md:block">
               <HeroAnimation />
            </div>
         </div>
      </div>
   )
}

export default HeroSection