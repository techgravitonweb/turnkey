import React from 'react';
// import "./About.css"
// import BannerImg from "../HomeImgs/bannerimage.png";
import BannerImg from "../Component/HomeImgs/bannerimage.png"

 function About() {
    
  return (
    <>
    <div className='hero-section-banner flex items-center justify-center text-center'>
      <div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white' style={{ fontFamily: "Baumans" }}>
          <span className='text-[#57FFA5]'>About</span>: Turn Keys
        </h1>
        <p className='text-white font-medium mt-5 md:mt-8' style={{ fontFamily: "Poppins" }}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        </p>
     
      </div>
    </div>

    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
            <div className='row'>
            <div className="home-bg-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          

          <div className="relative pt-5 md:pt-24 xl:pt-20 flex justify-end">
            <img src={BannerImg} alt="" className="xl:w-[90%]" />
        
          </div>

          <div className="pt-16 md:pt-28 lg:pt-32">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl"
              style={{ fontFamily: "Baumans" }}
            >
              Crafting stories, connecting hearts: 
              <span className="text-[#09A350]"> Discover the essence of who we are.</span>.
            </h1>
            <p
              className="mt-5 text-[#393939] xl:w-[550px]"
              style={{ fontFamily: "Poppins" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. <br/><br/>
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
            </p>

           

         

       

           
          </div>
        </div>
      </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default About