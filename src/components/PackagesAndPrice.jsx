import Package from '../assets/images/packages.jpg'

const PackagesAndPrice = () => {
   return (
      <div className="h-screen w-full px-6 md:px-10 flex flex-col justify-center">
         <div className='relative h-1/2 md:h-full'>
            <div className='absolute top-0 left-0 w-full h-full shadow-inner shadow-[#FF0000]/20 rounded-2xl md:rounded-3xl'></div>
            <img src={Package} alt="a-delivery-package-illustration" className="w-full h-full object-cover rounded-2xl md:rounded-3xl" />
         </div>
         <p className='text-center text-sm font-medium text-[#F4F4F4]/70 mt-4 md:mt-2'>We've got a 500cm by 500cm by 500cm box, fill it up with whatever you like, no extra charges.</p>
      </div>
   )
}

export default PackagesAndPrice