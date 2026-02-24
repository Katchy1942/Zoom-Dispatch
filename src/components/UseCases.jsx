import React, { useState } from 'react'

const UseCases = () => {
   const [activeTab, setActiveTab] = useState(0);

   const useCases = [
      {
         id: 1,
         name: "Run Errands",
         text: "Running errands can be time-consuming. Let us handle your pickup and drop-off needs so you can focus on what matters most. We ensure your items are handled with care.",
      },
      {
         id: 2,
         name: "For Your Business",
         text: "Streamline your business operations with our reliable delivery service. From documents to product deliveries, we provide efficient logistics solutions tailored to your business needs.",
      },
      {
         id: 3,
         name: "Place Orders",
         text: "Need something from a store? Place your order and we'll pick it up for you. Experience the convenience of having your favorite items delivered right to your doorstep.",
      },
      {
         id: 4,
         name: "Deliveries",
         text: "Fast and secure deliveries for all your packages. Whether it's a gift or an urgent parcel, our riders ensure it reaches its destination safely and on time.",
      },
   ];

   return (
      <div className='min-h-screen w-full px-6 md:px-10 flex flex-col justify-center'>
         <div className='bg-[#FF2424] flex flex-col p-6 gap-6 rounded-3xl'>
            <div className='flex flex-col items-center mb-12'>
               <h2 className="text-3xl font-medium tracking-tight mb-8 text-center text-[#101010]">When Should You Use Zoom Dispatch?</h2>
               <div className='flex gap-4 flex-wrap justify-center'>
                  {
                  useCases.map((useCase, index) => (
                     <button
                        key={useCase.id}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 py-2 rounded-full border text-sm cursor-pointer font-medium border-[#101010] transition-all duration-300 ${activeTab === index ? 'bg-[#FF0000] text-black' : 'text-[#F4F4F4] hover:bg-[#FF0000]/20'}`}
                     >
                        {useCase.name}
                     </button>
                  ))
               }
            </div>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:gap-0 items-center justify-center">
               <div className="w-full md:w-1/2">
                  <div className="flex flex-col justify-center gap-8">
                     <p className="text-sm font-medium text-[#101010]/70 max-w-md leading-relaxed">
                        {useCases[activeTab].text}
                     </p>
                     <button className="bg-[#101010] hover:bg-[#101010]/90 cursor-pointer text-[#ff2424] tracking-wide text-sm px-6 py-3 rounded-full font-bold w-fit">
                        {useCases[activeTab].id === 3 ? "View Available Stores" : "Let's Help You Deliver"}
                     </button>
                  </div>
               </div>
               <div className="w-full md:w-1/2 relative">
                  <div className="absolute top-0 left-0 w-full h-full shadow-inner shadow-[#101010]/20 rounded-2xl"></div>
                  <div className="w-full aspect-square shrink-0 bg-[#101010]/20 rounded-2xl animate-pulse shadow-inner"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UseCases