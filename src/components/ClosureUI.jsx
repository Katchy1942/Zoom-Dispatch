import React from 'react'

const ClosureUI = () => {
   return (
      <div className='w-auto min-h-dvh bg-[#0a0a0a] overflow-hidden flex flex-col justify-end md:justify-center relative mx-3 mb-24 rounded-4xl'>
         <div className='w-full md:w-[45%] p-8 sm:p-10 md:p-20 z-20 flex flex-col justify-center relative pb-16 md:pb-20'>
            <h2 className='text-5xl font-medium text-[#ff0000] mb-6 tracking-tight'>
               Enjoy Fast and Secure Deliveries<br />
               with Zoom Dispatch
            </h2>
            
            <p className='text-sm text-[#F4F4F4]/70 font-medium mb-12 max-w-md'>
               Try it out today!
            </p>
            
            <a target='_blank' rel='noopener noreferrer' href="https://wa.me/2349052452642" className='bg-[#ff0000] text-[#101010] px-12 py-4 rounded-full font-bold text-lg w-fit hover:bg-[#ff0000]/90 transition-all cursor-pointer'>
               Let's help you deliver
            </a>
         </div>
         
         <div className='absolute inset-0 md:left-auto md:right-0 w-full md:w-[65%] pointer-events-none z-0'>
            <div className='absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/90 md:via-[#0a0a0a]/60 to-transparent z-10 hidden md:block'></div>
            <div className='absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 md:hidden'></div>
            
            <img 
               src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
               alt="Orange Delivery Motorcycle" 
               className='w-full h-full object-cover object-center translate-x-0 md:translate-x-12 opacity-60 md:opacity-80'
            />
         </div>
      </div>
   )
}

export default ClosureUI