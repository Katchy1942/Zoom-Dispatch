import ValuesSection from "../components/ValuesSection";

const About = () => {
	return (
		<div className="flex flex-col">
			<div className="h-screen w-full flex flex-col pt-20 px-4 md:px-10">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-2xl font-medium tracking-tight text-center max-w-2xl">
						Zoom Dispatch began as a response to the growing need for <span className="text-[#FF0000]">reliable</span> and <span className="text-[#FF0000]">efficient</span> delivery services in Enugu, Nigeria.
					</h1>
				</div>
			</div>
			<div className="h-screen w-full flex flex-col md:flex-row justify-center items-center pt-20 gap-6 px-4 md:px-10">
				<div className="md:w-1/3 w-full aspect-square bg-[#FF0000]/20 rounded-2xl animate-pulse shadow-inner shrink-0"></div>
				<div className="flex flex-col justify-center">
					<p className="text-left max-w-lg text-sm font-medium italic">
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam optio iste amet veritatis necessitatibus maiores in corrupti minus cupiditate molestias aut quae, magnam quasi. Ullam odit perferendis a quidem."
					</p>
					<p className="mt-4 font-semibold text-md">Igwe Christian, CEO</p>
				</div>
			</div>
			
			<ValuesSection />

			<div className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-10 py-24">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-center border-b border-[#FF0000]/20 max-w-fit mx-auto pb-2">
					Reach Out To Us
				</h2>
				<div className="w-full md:w-1/2 h-[50vh] min-h-[400px] flex-none rounded-xl md:rounded-2xl overflow-hidden relative shadow-inner shadow-[#FF0000]/20">
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
