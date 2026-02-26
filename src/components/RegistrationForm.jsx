import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const RegistrationForm = ({ onClose }) => {
   const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const message = `*NEW BUSINESS REGISTRATION*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* _${formData.email}_%0A*Phone:* ${formData.phone}`;
      window.open(`https://wa.me/2347013339219?text=${message}`, '_blank');
      onClose();
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
   };
   
   return (
      <motion.div 
         className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
         onClick={onClose}
         key="backdrop"
      >
         <motion.div 
            className="bg-[#1A1818] py-8 px-6 rounded-2xl w-full max-w-md border border-[#FF0000]/30 shadow-xl relative"
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
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Join as a Rider</h3>
            <p className="text-sm text-[#F4F4F4]/70 mb-6">Enter your details and we'll be in touch.</p>
            
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">First Name</label>
                     <input 
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                        className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors" 
                     />
                  </div>
                  <div className="flex-1">
                     <label className="block text-sm font-semibold text-[#F4F4F4]/70 mb-1.5">Last Name</label>
                     <input 
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                        className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors" 
                     />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-semibold text-[#F4F4F4]/70  mb-1.5">Email Address</label>
                  <input 
                     type="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                     className="w-full bg-[#101010] font-medium text-sm p-3 rounded-xl text-white border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors" 
                  />
               </div>
               
               <div>
                  <label className="block text-sm font-semibold text-[#F4F4F4]/70  mb-1.5">Phone Number</label>
                  <input 
                     type="tel"
                     required
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                     className="w-full bg-[#101010] font-medium text-sm rounded-xl border border-[#101010] focus:border-[#ff0000] focus:outline-none transition-colors p-3 text-white" 
                  />
               </div>

               <div className="flex gap-4 mt-4">
                  <button 
                     type="submit" 
                     className="flex-1 px-6 py-3 bg-[#FF0000] text-sm tracking-wide rounded-full text-[#101010] font-bold hover:bg-[#FF0000]/90 transition-colors cursor-pointer"
                  >
                     Continue
                  </button>
               </div>
            </form>
         </motion.div>
      </motion.div>
   )
}

export default RegistrationForm