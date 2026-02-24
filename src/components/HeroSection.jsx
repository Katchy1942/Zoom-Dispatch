
import HeroAnimation from './HeroAnimation';

const HeroSection = () => {
   return (
      <div className="h-screen w-full flex items-center pt-16 px-10 gap-6">
         <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-5xl font-bold tracking-tight leading-16 mb-4">Delivery at the speed of <span className="bg-[#FF0000] text-[#101010] pb-1">Zoom.</span></h1>
            <p className="text-sm font-medium text-[#F4F4F4]/70 mb-12">We didn't name ourselves Zoom Dispatch for nothing. Experience the fastest, most reliable courier service in Enugu.</p>
            <div className="flex flex-col gap-1">
               <button className="bg-[#FF0000] w-fit text-[#101010] px-6 py-2.5 text-sm font-bold cursor-pointer rounded-full tracking-wide hover:bg-[#FF0000]/90 transition-colors">Let's help you deliver</button>
               <span className="text-[10px] text-[#F4F4F4]/50 ml-1">Currently serving Enugu, Nigeria.</span>
            </div>
         </div>
         <div className="w-1/2 aspect-square hidden md:block">
            <HeroAnimation />
         </div>
      </div>
   )
}

export default HeroSection