import ValuesSection from "../components/ValuesSection";
import CEO from '../assets/images/CEO.jpeg'

const About = () => {
	return (
		<div className="flex flex-col">
			<div className="h-screen w-full flex flex-col pt-20 px-4 md:px-10">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-2xl font-medium tracking-tight text-center max-w-2xl">
						Zoom Dispatch began as a response to the growing need for <span className="text-[#FF0000]">reliable</span> and <span className="text-[#FF0000]">efficient</span> dispatchs in Enugu, Nigeria.
					</h1>
				</div>
			</div>
			<div className="h-screen w-full flex flex-col md:flex-row justify-center items-center pt-20 gap-6 px-4 md:px-10">
				<div className="md:w-2/3 w-full aspect-square">
					<img src={CEO} alt="CEO" className="w-full h-full object-cover rounded-2xl" />
				</div>
				<div className="flex flex-col justify-center">
					<p className="text-left max-w-lg text-sm font-medium italic">
						At Zoom Dispatch, our mission is simple — to deliver speed, reliability, and peace of mind. 
						In today,s fast-paced world, every package matters, and every minute counts. 
						As CEO, I am committed to building a delivery network driven by efficiency, professionalism, and trust.
						We understand that behind every parcel is a business opportunity, a promise, or a personal connection. 
						That's why we operate with urgency, care, and accountability. 
						Our goal is not just to move packages, but to move businesses forward and connect communities seamlessly.
						At Zoom Dispatch, we don't just deliver parcels — we deliver excellence.
					</p>
					<p className="mt-4 font-semibold text-md">Joshua Okibe, CEO</p>
				</div>
			</div>
			
			<ValuesSection />

			<div className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-10 py-24">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">
					Reach Out To Us
				</h2>
				<div className="w-full md:w-1/2 h-[50vh] min-h-[400px] flex-none rounded-xl md:rounded-2xl border border-[#FF0000]/20 overflow-hidden relative">
					<iframe 
						width="100%" 
						height="100%" 
						src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=University+of+Nigeria+Nsukka&t=&z=14&ie=UTF8&iwloc=B&output=embed"
						frameBorder="0" 
						scrolling="no" 
						marginHeight="0" 
						marginWidth="0" 
						referrerPolicy="no-referrer-when-downgrade"
						style={{ filter: "invert(90%) hue-rotate(180deg)" }}
					></iframe>
				</div>
				<p className="text-center max-w-2xl mt-6 text-sm font-medium">
					Whether you have a question, need support, or want to partner with us, we'd love to hear from you. Our team is always ready to assist.
					<a href="tel:+2348102850642" className="text-[#FF0000]"> +2348102850642.</a>
				</p>
			</div>
		</div>
  	)
}

export default About
