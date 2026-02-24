import React from "react";

const Reviews = () => {
   const reviews = [
      {
         id: 1,
         firstName: "Chioma",
         lastName: "Adebayo",
         business: "Fresh Bakes",
         review: "Reliability is key for my cake business. Zoom Dispatch handles my delicate deliveries with care, and they've never missed a deadline."
      },
      {
         id: 2,
         firstName: "Tunde",
         lastName: "Williams",
         business: "TechPoint Gadgets",
         review: "Fastest delivery service in Lagos. My customers are always impressed by how quickly they receive their orders. Highly recommended!"
      },
      {
         id: 3,
         firstName: "Aisha",
         lastName: "Bello",
         business: "Zaria Fashion House",
         review: "I used to struggle with logistics until I found Zoom. Their riders are professional, and the app makes booking pickups so easy."
      },
      {
         id: 4,
         firstName: "Emeka",
         lastName: "Nnamdi",
         business: "PrintPro Solutions",
         review: "We send out dozens of documents daily. Zoom Dispatch offers the best corporate rates and their tracking system is top-notch."
      },
      {
         id: 5,
         firstName: "Sarah",
         lastName: "Mensah",
         business: "Organic Glow",
         review: "My customers love the same-day delivery option. It's helped me boost sales and build trust. Zoom Dispatch is a partner I can rely on."
      },
      {
         id: 6,
         firstName: "David",
         lastName: "Alabi",
         business: "Urban Kicks",
         review: "Great experience! The riders are polite and the customer support is responsive. Definitely the best logistics company I've used."
      },
   ];

   // Quadruple the reviews to ensure seamless looping with 50% offset
   const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

   return (
      <div className="min-h-screen w-full flex flex-col justify-center overflow-hidden relative">
         <style>
            {`

               @keyframes scroll-right {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0); }
               }
               .animate-scroll-right {
                  animation: scroll-right 60s linear infinite;
               }
               .animate-scroll-right-slow {
                  animation: scroll-right 80s linear infinite;
               }
               /* Pause animation on hover - works on mobile via touch depending on browser behavior, 
                  but ensures desktop hover pauses it. */
               .hover-pause:hover .animate-scroll-right,
               .hover-pause:hover .animate-scroll-right-slow {
                  animation-play-state: paused;
               }
            `}
         </style>
         
         <h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">Don't just take our word for it.</h2>

         {/* Row 1 - Moves Left to Right */}
         <div className="flex mb-8 overflow-hidden w-full hover-pause group">
            <div className="flex animate-scroll-right w-max gap-6 px-3">
               {infiniteReviews.map((review, i) => (
                  <ReviewCard key={`r1-${i}`} review={review} />
               ))}
            </div>
         </div>

         {/* Row 2 - Moves Left to Right (slower) */}
         <div className="flex overflow-hidden w-full hover-pause group">
            <div className="flex animate-scroll-right-slow w-max gap-6 px-3">
               {infiniteReviews.map((review, i) => (
                  <ReviewCard key={`r2-${i}`} review={review} />
               ))}
            </div>
         </div>
      </div>
   )
}

const ReviewCard = ({ review }) => {
   return (
      <div className="shrink-0 w-[80vw] md:w-[400px] h-auto bg-[#1A1A1A] rounded-3xl p-6 flex flex-col justify-between shadow-inner shadow-[#FF0000]/20 transition-transform hover:scale-[1.01] border border-[#FF0000]/10">
         <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 bg-[#FF0000]/20 rounded-full flex items-center justify-center text-[#FF0000] font-bold text-lg shrink-0">
                  {review.firstName[0]}{review.lastName[0]}
               </div>
               <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                     {review.firstName} {review.lastName}
                  </h3>
                  <p className="text-xs md:text-sm text-[#F4F4F4]/50 font-medium">
                     {review.business}
                  </p>
               </div>
            </div>
            
            <p className="text-sm text-[#F4F4F4]/70 font-medium">
               "{review.review}"
            </p>
         </div>
      </div>
   )
}

export default Reviews