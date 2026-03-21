import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Bike, Car, Truck } from 'lucide-react';
const DeliveryForm = ({ onClose }) => {
   const [formData, setFormData] = useState({
      pickup: '',
      destination: '',
      receiverName: '',
      receiverPhone: '',
      senderName: '',
      senderPhone: '',
      weightEstimate: '',
      deliveryNotes: '',
      businessName: '',
   });
   const [transportMode, setTransportMode] = useState('bike');
   const [isBrandDelivery, setIsBrandDelivery] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      const message = `*NEW DELIVERY REQUEST*%0A%0A*Pickup:* ${formData.pickup}%0A*Destination:* ${formData.destination}%0A%0A*Sender:* ${formData.senderName} (${formData.senderPhone})%0A*Receiver:* ${formData.receiverName} (${formData.receiverPhone})%0A%0A*Package Info:*%0AWeight: ${formData.weightEstimate}kg%0ATransport: ${transportMode}%0ANotes: ${formData.deliveryNotes}%0A${isBrandDelivery ? `Brand: ${formData.businessName}` : ''}`;
      
      window.open(`https://wa.me/2349122454898?text=${message}`, '_blank');
      if (onClose) onClose();
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, []);

   if (typeof window === 'undefined') return null;

   return createPortal(
      <motion.div 
         className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 px-4 py-8 h-dvh"
         style={{ top: 0, left: 0, right: 0, bottom: 0 }}
         onClick={onClose}
         key="backdrop"
      >
         <motion.div 
            className="bg-[#1A1818] py-8 px-6 rounded-2xl w-full max-w-2xl max-h-full overflow-y-auto border border-[#FF0000]/30 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
         >
            <button 
               onClick={onClose} 
               className="absolute top-4 right-4 text-[#F4F4F4]/70 hover:text-white transition-colors cursor-pointer"
            >
               <X size={20} />
            </button>
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Book a Delivery</h3>
            <p className="text-sm text-[#F4F4F4]/70 mb-6">Enter details for your delivery request.</p>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
               {/* Route */}
               <div>
                  <h4 className="text-lg font-medium text-white mb-3">Route</h4>
                  <div className="flex flex-col gap-4">
                     <div>
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Pickup Location</label>
                        <input 
                           type="text" 
                           name="pickup"
                           required
                           value={formData.pickup}
                           onChange={handleInputChange}
                           placeholder="e.g. 123 Storage Facility, Lagos"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Drop-off Destination</label>
                        <input 
                           type="text" 
                           name="destination"
                           required
                           value={formData.destination}
                           onChange={handleInputChange}
                           placeholder="e.g. 456 Customer Ave, Lagos"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                  </div>
               </div>

               {/* Recipient */}
               <div>
                  <h4 className="text-lg font-medium text-white mb-3">Recipient</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Full Name</label>
                        <input 
                           type="text" 
                           name="receiverName"
                           required
                           value={formData.receiverName}
                           onChange={handleInputChange}
                           placeholder="John Doe"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Phone Number</label>
                        <input 
                           type="text" 
                           name="receiverPhone"
                           required
                           value={formData.receiverPhone}
                           onChange={handleInputChange}
                           placeholder="070 0000 000"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                  </div>
               </div>

               {/* Sender */}
               <div>
                  <h4 className="text-lg font-medium text-white mb-3">Sender</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Full Name</label>
                        <input 
                           type="text" 
                           name="senderName"
                           required
                           value={formData.senderName}
                           onChange={handleInputChange}
                           placeholder="Jane Doe"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Phone Number</label>
                        <input 
                           type="text" 
                           name="senderPhone"
                           required
                           value={formData.senderPhone}
                           onChange={handleInputChange}
                           placeholder="070 0000 000"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                  </div>
               </div>

               {/* Package Details */}
               <div>
                  <h4 className="text-lg font-medium text-white mb-3">Package Details</h4>
                  <div className="flex flex-col gap-4">
                     <div>
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Weight Estimate (kg)</label>
                        <input 
                           type="number" 
                           name="weightEstimate"
                           value={formData.weightEstimate}
                           onChange={handleInputChange}
                           min="0"
                           placeholder="0.0"
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Mode of Transport</label>
                        <div className="grid grid-cols-3 gap-3">
                           <label className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors cursor-pointer ${transportMode === 'bike' ? 'bg-[#FF0000]/10 border-[#FF0000] text-[#FF0000]' : 'bg-[#101010] border-[#101010] text-[#F4F4F4]/70 hover:bg-[#1A1818]'}`}>
                              <input type="radio" name="transport" value="bike" className="sr-only" checked={transportMode === 'bike'} onChange={(e) => setTransportMode(e.target.value)} />
                              <Bike strokeWidth={1.5} className="mb-2 w-6 h-6" />
                              <span className="text-xs font-semibold">Bike</span>
                           </label>
                           <label className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors cursor-pointer ${transportMode === 'car' ? 'bg-[#FF0000]/10 border-[#FF0000] text-[#FF0000]' : 'bg-[#101010] border-[#101010] text-[#F4F4F4]/70 hover:bg-[#1A1818]'}`}>
                              <input type="radio" name="transport" value="car" className="sr-only" checked={transportMode === 'car'} onChange={(e) => setTransportMode(e.target.value)} />
                              <Car strokeWidth={1.5} className="mb-2 w-6 h-6" />
                              <span className="text-xs font-semibold">Car</span>
                           </label>
                           <label className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors cursor-pointer ${transportMode === 'truck' ? 'bg-[#FF0000]/10 border-[#FF0000] text-[#FF0000]' : 'bg-[#101010] border-[#101010] text-[#F4F4F4]/70 hover:bg-[#1A1818]'}`}>
                              <input type="radio" name="transport" value="truck" className="sr-only" checked={transportMode === 'truck'} onChange={(e) => setTransportMode(e.target.value)} />
                              <Truck strokeWidth={1.5} className="mb-2 w-6 h-6" />
                              <span className="text-xs font-semibold">Truck</span>
                           </label>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Delivery Notes (Optional)</label>
                        <textarea 
                           name="deliveryNotes"
                           value={formData.deliveryNotes}
                           onChange={handleInputChange}
                           rows={3}
                           placeholder="Any special instructions..."
                           className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors resize-none"
                        ></textarea>
                     </div>
                  </div>
               </div>

               {/* Brand Delivery */}
               <div className="flex items-center justify-between mt-2">
                  <div>
                     <h4 className="text-lg font-medium text-white">Brand Delivery</h4>
                     <p className="text-sm font-semibold text-[#F4F4F4]/70">Are you a brand or business?</p>
                  </div>
                  <button 
                     type="button"
                     onClick={() => setIsBrandDelivery(!isBrandDelivery)}
                     className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer focus:outline-none ${isBrandDelivery ? 'bg-[#FF0000]' : 'bg-[#101010]'}`}
                  >
                     <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isBrandDelivery ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
               </div>
               
               {isBrandDelivery && (
                  <div>
                     <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Brand/Business Name</label>
                     <input
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required={isBrandDelivery}
                        placeholder="Alora hairs..."
                        className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors"
                     />
                  </div>
               )}

               <div className="mt-4">
                  <button 
                     type="submit" 
                     className="w-full px-6 py-4 bg-[#FF0000] text-sm tracking-wide rounded-full text-[#101010] font-bold hover:bg-[#FF0000]/90 transition-colors cursor-pointer"
                  >
                     Proceed to DM via WhatsApp
                  </button>
               </div>
            </form>
         </motion.div>
      </motion.div>,
      document.body
   )
}

export default DeliveryForm