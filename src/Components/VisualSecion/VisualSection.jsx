const VisualSection = () => {
 return ( 
 
  <section className="mt-24" > 
 
  <h1 className="text-center text-white font-changaOne text-[22px] m-12 underline uppercase" >Top countries to visited</h1>

   <ul className="timeline timeline-vertical m-12">
    <li>
     <div className="timeline-start timeline-box uppercase">Thailand - <span className="text-[#826521] font-publicSans capitalize " > visitors in Bankong 22 million </span></div>
     <hr />
    </li>
    <li>
     <hr />
     <div className="timeline-end timeline-box uppercase ">Malaysia- <span className="text-[#826521] font-publicSans capitalize " > visitors in Kuala Lumpur 13 million </span></div>
     <hr />
    </li>
    <li>
     <hr />
     <div className="timeline-start timeline-box uppercase">Vietnam - <span className="text-[#826521] font-publicSans capitalize " > visitors in Ho Chi Minh City 8 million </span></div>
     <hr />
    </li>
    <li>
     <hr />
     <div className="timeline-end timeline-box uppercase">Indonesia - <span className="text-[#826521] font-publicSans capitalize " > visitors in Bali 6 million </span></div>
     <hr />
    </li>
    <li>
     <hr />
     <div className="timeline-start timeline-box uppercase">Cambodia - <span className="text-[#826521] font-publicSans capitalize " > visitors in Angkor Wat/Siem Reap 2 million </span></div>
     <hr />
    </li> 
    <li> 
     <hr />
     <div className="timeline-end timeline-box uppercase">Bangladesh - <span className="text-[#826521] font-publicSans capitalize " > visitors in Cox’s Bazar 1.5 million </span></div>
     <hr />
    </li>
     
   </ul>
   <div className="max-w-[1200px] mx-auto rounded-xl shadow-xl shadow-white overflow-hidden">
    <video
     className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
     src="/Images/video/video1.mp4"
     autoPlay
     loop
     muted
     playsInline
     preload="metadata"
    />
   </div>
  </section>
  
 );
};

export default VisualSection;