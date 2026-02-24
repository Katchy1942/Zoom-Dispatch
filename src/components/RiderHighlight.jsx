import Rider from '../assets/images/rider.avif'

const RiderHighlight = () => {
   return (
      <div className="h-screen w-full gap-8 md:gap-0 flex flex-col md:flex items-center px-10 justify-center">
         <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-center gap-8">
               <p className="text-sm font-medium text-[#F4F4F4]/70 max-w-md">Our riders are the heartbeat of our operation. Trained, vetted, and dedicated to getting your package to its destination safely and swiftly.</p>
               <button className="bg-[#FF0000] text-[#1A1A1A] tracking-wide text-sm px-6 py-3 rounded-full font-bold w-fit">Let's help you deliver</button>
            </div>
         </div>
         <div className="w-full md:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full shadow-inner shadow-[#FF0000]/20 rounded-2xl md:rounded-3xl"></div>
            <div className="w-full aspect-square shrink-0">
               <img src={Rider} alt="a-dispatch-rider" className="w-full h-full object-cover rounded-2xl md:rounded-3xl" />
            </div>
         </div>
      </div>
   )
}

export default RiderHighlight
