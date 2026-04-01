import Packages from '../assets/images/businesses.jpg'
import Rider from '../assets/images/bike1.jpg'
import { Link } from 'react-router-dom'

const Partnership = () => {
   return (
      <div className="py-24 px-6">
         <div className='flex flex-col lg:flex-row w-full overflow-hidden rounded-4xl'>
            {/* Business Logistics Section */}
            <div 
               className="flex-1 relative min-h-[70vh] lg:min-h-screen flex items-center bg-cover bg-center bg-no-repeat group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10"
               style={{ backgroundImage: `url(${Packages})` }}
            >            
               {/* Smooth Overlay */}
               <div className="absolute inset-0 bg-[#000000]/60 transition-opacity duration-700 group-hover:bg-[#000000]/50"></div>
               
               <div className="relative z-10 px-8 md:px-16 py-20 text-left max-w-2xl">
                  <h2 className="text-5xl font-medium mb-6 tracking-tight">
                     Level up your business logistics
                  </h2>
                  <p className="text-sm font-medium text-white/70 mb-10 max-w-md">
                     Partner with Zoom Dispatch to deliver your products swiftly and reliably to your customers.
                  </p>
                  <div className="flex flex-col items-start gap-4">
                     <Link to="/businesses" className="bg-[#FF0000] w-fit text-[#101010] px-6 py-2.5 text-base font-bold cursor-pointer rounded-full hover:bg-[#FF0000]/90 transition-colors">
                        Partner with us
                     </Link>
                  </div>
               </div>
            </div>

            {/* Riders Section */}
            <div 
               className="flex-1 relative min-h-[70vh] lg:min-h-screen flex items-center bg-cover bg-center bg-no-repeat group overflow-hidden"
               style={{ backgroundImage: `url(${Rider})` }}
            >         
               {/* Smooth Overlay */}
               <div className="absolute inset-0 bg-[#000000]/60 transition-opacity duration-700 group-hover:bg-[#000000]/50"></div>

               <div className="relative z-10 px-8 md:px-16 py-20 text-left max-w-2xl">
                  <h2 className="text-5xl font-medium mb-6 tracking-tight">
                     Got a bike or already a rider?
                  </h2>
                  <p className="text-sm font-medium text-white/70 mb-10 max-w-md">
                     Join our growing community of bike riders and earn money on your own terms.
                  </p>
                  <div className="flex flex-col items-start gap-4">
                     <Link to="/bike-owners" className="bg-[#FF0000] w-fit text-[#101010] px-6 py-2.5 text-base font-bold cursor-pointer rounded-full hover:bg-[#FF0000]/90 transition-colors">
                        Join the team
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Partnership