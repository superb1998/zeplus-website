import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import hero1 from '../assets/img/intern-hero-1.webp'
import hero2 from '../assets/img/intern-hero-2.webp'
import hero3 from '../assets/img/intern-hero-3.webp'
import gridicon from '../assets/img/gridicon.svg'
import grid2icon from '../assets/img/gridicon2.svg'
import grid3icon from '../assets/img/gridicon3.svg'
import grid4icon from '../assets/img/gridicon4.svg'
import aiIcon from '../assets/img/ai.svg'
import cyberIcon from '../assets/img/cyber.svg'
import dataIcon from '../assets/img/data.svg'
import StraightLine from "../assets/img/straight-line.png"

import fill from '../assets/img/fill.svg'
import withai from '../assets/img/withai.svg'
import imgcard from '../assets/img/imgcard.jpg'
import imgcard2 from '../assets/img/imgcard2.jpg'
import imgcard3 from '../assets/img/imgcard3.jpg'
import imgcard4 from '../assets/img/imgcard4.jpg'
import imgcard5 from '../assets/img/imgcard5.jpg'
import imgcard6 from '../assets/img/imgcard6.jpg'
import heroImage2 from '../assets/img/heroimage2.jpg'
import testImage from '../assets/img/testimonialimg.jpg'
import test1 from '../assets/img/test1.png'
import test2 from '../assets/img/test2.png'
import test3 from '../assets/img/test3.png'
import alumni1 from '../assets/img/alumni.png'
import alumni2 from '../assets/img/alumni2.png'
import alumni3 from '../assets/img/alumni3.png'
import hero1bg from '../assets/img/hero1bg.png' 
import whatsapp from '../assets/courses/whatsapp.png'




const Home = () => {
  const scrollToApply = () => {
    const el = document.getElementById('apply-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Image carousel + parallax
  const images = [hero1, hero2, hero3]
  const [current, setCurrent] = useState<number>(0)

  // Cycle images every 10 seconds
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 10000)
    return () => clearInterval(id)
  }, [])

  // No parallax: hero image remains fixed in position when swapping images
  return (
    <section className='w-full font-poppins overflow-x-hidden'>
    <section
        className='w-full font-poppins'
        style={{
          backgroundImage: `url(${hero1bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='py-10 md:max-w-7xl mx-auto'>
              <div className='flex flex-col md:flex-row gap-10 items-center justify-between md:px-0 px-6 my-'>
                    {/* Left side */}
                    <div className='flex flex-col md:max-w-[800px]'>
                        <div className='md:max-w-[500px] mb-5'>
                            <h1 className='md:text-[50px] text-4xl font-bold'>Become a Future-Ready Tech Leader in less than 5 Months</h1>
                        </div>
                        <div className='md:max-w-[550px]'>
                        <p className='font-[390] md:text-[16px] text-[15px]'>We equip African youth with the most in-demand skills in 
                            UI/UX Design, Data Analystics, Full stack Development, Cybersecurity, and AI.</p>
                            </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                
                         <div className='flex flex-row gap-3 mt-2'>
                         <button type='button' onClick={scrollToApply} className='font-[400] text-white flex flex-row gap-2.5 md:text-[16px] text-[13px] items-center justify-center cursor-pointer bg-[#5E0BD1] md:px-10 px-3 py-2.5 rounded ' >
                                      Start Your Journey Today
                             </button>
                             <button type='button' onClick={scrollToApply} className='cursor-pointer text-[#5E0BD1] border border-[#5E0BD1] md:text-[16px] text-[13px] md:px-12 md:py-3 py-2.5 px-4 font-[420] rounded'>
                                      View Curriculum
                           </button>
                      </div>
        
                                   
                                  
                        </div>
                    </div>
                    {/* Right side */}
                     {/* Right: image */}
          <div className='flex-1 flex items-center justify-center  relative'>
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={images[current]}
              alt={`hero ${current + 1}`}
              className=" h-76 w-86 md:h-136 md:w-166 object-cover transition-all duration-700"
              style={{ zIndex: 2 }}
            />
            {/* Bottom icons row - intrinsic sizes preserved */}
            <div className="absolute md:-bottom-10 md:left-2/5 -bottom-20 left-[30%] transform -translate-x-1/2 flex items-center gap-3 z-40 ">
              
              <img src={cyberIcon} alt="Cybersecurity" className="object-contain md:h-auto md:w-auto w-30 h-38" />
              
              <img src={dataIcon} alt="Data" className="object-contain md:h-auto md:w-auto w-30 h-38" />
              
              <img src={aiIcon} alt="AI" className="object-contain md:h-auto md:w-auto w-30 h-38" />
            </div>
          </div>
     </div>
              </div>
        </div>
      </section>


    {/* Why Zplus section */}
    <section className='w-full bg-[#FEF2F2]'>
       <div className='md:max-w-6xl mx-auto md:px-0 px-5 pt-20 pb-10'>
               <div className='text-center  md:max-w-[500px] mx-auto'>
                     <h2 className='font-Sora md:text-4xl text-2xl font-[490] mb-1'>Why Zeplus Academy</h2>
                     <div className='md:max-w-[400px] mx-auto'>
                        <p className='text-[18px] font-[300]'>We don't just teach tech - we prepare Africa's youth to lead innovation</p>
                     </div>
               </div>
       <div className='grid md:grid-cols-4 grid-cols-1 gap-6 md:gap-5 mt-10'>
                  {/* Card 1 */}
         <div className='shadow-md bg-white rounded-xl animate-slide-up-bounce' style={{ animationDelay: '0ms' }}>
                       <div className='flex py-10 px-6 flex-col'>
                            <div className='bg-gradient-to-br from-[#23D366] to-[#1DB954] p-2 rounded-[20px] w-16 h-16 flex items-center justify-center mb-6'>
                              <img src={gridicon} alt='icon' className='w-8 h-8' />
                            </div>
                            <h2 className='mb-4 text-[18px] font-[500]'>Project-Based Learning</h2>
                            <p className='text-[15px]'>Build real-world solutions from day one with hands-on projects that mirror industry challenges.</p>
                       </div>
         </div>

                 {/* Card 2 */}
         <div className='shadow-md bg-white rounded-xl animate-slide-up-bounce' style={{ animationDelay: '120ms' }}>
                       <div className='flex py-10 px-6 flex-col'>
                            <div className='bg-gradient-to-br from-[#5E0BD1] to-[#9533FC] p-2 rounded-[20px] w-16 h-16 flex items-center justify-center mb-6'>
                              <img src={grid2icon} alt='icon' className='w-8 h-8' />
                            </div>
                            <h2 className='mb-4 text-[18px] font-[500]'>Expert Mentorship</h2>
                            <p className='text-[15px]'>Learn directly from professionals in leading tech companies across Africa and beyond.</p>
                       </div>
        </div>
                  {/* Card 3 */}
                   <div className='shadow-md bg-white rounded-xl animate-slide-up-bounce' style={{ animationDelay: '240ms' }}>
                       <div className='flex py-10 px-6 flex-col'>
                            <div className='bg-gradient-to-br from-[#60070B] to-[#8B0000] p-2 rounded-[20px] w-16 h-16 flex items-center justify-center mb-6'>
                              <img src={grid3icon} alt='icon' className='w-8 h-8' />
                            </div>
                            <h2 className='mb-4 text-[18px] font-[500] font-Poppins'>Career & Job Prep Support</h2>
                            <p className='text-[15px]'>Resume building, interview prep, and internship placement to launch your career.</p>
                       </div>
                 </div>
                  {/* Card 4 */}
                   <div className='shadow-md bg-white rounded-xl animate-slide-up-bounce' style={{ animationDelay: '360ms' }}>
                       <div className='flex py-10 px-6 flex-col'>
                            <div className='bg-gradient-to-br from-[#9533FC] to-[#C77DFF] p-2 rounded-[20px] w-16 h-16 flex items-center justify-center mb-6'>
                              <img src={grid4icon} alt='icon' className='w-8 h-8' />
                            </div>
                            <h2 className='mb-4 text-[18px] font-[500]'>Vibrant Community</h2>
                            <p className='text-[15px]'>Connect, collaborate, and grow with like-minded innovators across Africa.</p>
                       </div>
                 </div>
            </div> 
                                       {/* End of cards */}
                                       <div className='text-center  md:max-w-[500px] mx-auto mt-10 font-Sora'>
                                           <p className='text-[20px] font-[300] text-[#5e0bd1]'>Specialized AI-powered learning units</p>
                                       </div>
       </div>

    </section>

  {/* Programs courses Section */}
  <section id='programs' className='w-full bg-white '>
  <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-20'>
      <div className='text-center flex flex-col items-center'>
        <div>
          <h2 className=' mb-2 font-Sora md:text-5xl text-2xl font-[490]'>Programs to Power Your Future</h2>
          <div className=''>
      <p className='md:text-[17px] text-[13px] font-[390]'>Choose your path. Explore new possibilities. Land the career you deserve.</p>
          </div>
        </div>
      <div className='flex flex-row md:space-x-20 space-x-6.5 justify-center mt-6'>
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-[7px]'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text-[17px] text-[14px]'>40 to 360 hours</p>
            </div>
            {/* 2 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text-[17px] text-[14px]'>Live classes</p>
            </div>
            {/* 3 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text-[17px] text-[14px]'>On site or online</p>
            </div>
        </div>
      </div>
  </div>

      {/* Images Cards */}
      <div className='md:max-w-[1480px] mx-auto md:px-0 px-5 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mt-20 md:px-30 px-5'>
  {/* Card 1 */}
  <div className='border border-gray-200 rounded-2xl p-5 transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '0ms' }}>
         <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard} alt='image' className='h-full w-[100%] object-cover' />
</div>
          <div className='flex flex-row space-x-2 mb-4 text-sm '>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-6 py- rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm'>
                <h2 className='text-ssm font-[500] mb-3'>UI/UX Design Career Accelerator</h2>
                <p className='font-light text-sm mb-3 text-gray-600'>Master user experience, interface design, and product strategy through hands-on projects.Build
                   a design portfolio and learn modern tools</p>
                   <Link to='/uiux' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <p className='text-ssm '>View course</p>
                   </Link>
               </div>

        </div>
  {/* Card 2 */}
   <div className='border border-gray-200 p-5 rounded-2xl transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '120ms' }}>
          <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard2} alt='image' className='h-full w-[100%] object-cover' />
</div>
          <div className='flex flex-row space-x-5 mb-4 text-sm'>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full'>Introduction</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-6 py- rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm mb-5'>
                <h2 className=' font-[500] mb-3'>Data Analytics Career Track</h2>
                <p className='font-light mb-3 text-gray-600'>Learn to analyze, visualize, and make data-driven decisions. Work with real datasets using Excel,
                    SQL, Power BI, and Python for analytics.</p>
                   <Link to='/data-analytics' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <p className='text-ssm '>View course</p>
                   </Link>
               </div>

        </div>
  {/* Card 3 */}
   <div className='border border-gray-200 rounded-2xl p-5 transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '240ms' }}>
          <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard3} alt='image' className='h-full w-full object-cover' />
</div>
          <div className='flex flex-row space-x-5 mb-4 text-sm'>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full '>Introduction</h3>
              </div>
              
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm'>
                <h2 className=' font-[500] mb-3'>Full Stack Development Bootcamp</h2>
                <p className='font-light mb-3 text-gray-600'>Become a professional web developer capable  of building scalable digital products from scratch.</p>
                   <Link to='/full-stack' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] md:mt-5'>
                     <p className='text-sm '>View course</p>
                   </Link>
               </div>

        </div>
  {/* Card 4 */}
   <div className='border border-gray-200 rounded-2xl p-5 transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '360ms' }}>
          <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard4} alt='image' className='h-[100%] w-[100%] object-cover' />
</div>
          <div className='flex flex-row space-x-2 mb-4 text-sm '>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-6 py- rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm'>
                <h2 className=' font-[500] mb-3'>Cybersecurity Bootcamp</h2>
                <p className='font-light mb-3 text-gray-600'>Master the essentials of network defense, ethical hacking, and data protection. Train with simulated
                        attacks and learn how to secure modern systems.</p>
                   <Link to='/cybersecurity' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <p className='text-sm '>View course</p>
                   </Link>
               </div>

        </div>
  {/* Card 5 */}
   <div className='border border-gray-200 rounded-2xl p-5 transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '480ms' }}>
         <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard5} alt='image' className='h-[100%] w-[100%] object-cover' />
</div>
         <div className='flex flex-row space-x-2 mb-4 text-sm '>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full text-sm'>Introduction</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-6 py- rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm '>
                <h2 className=' font-[500] mb-3'>Digital Marketing</h2>
                <p className='font-light mb-3 text-gray-600'>Solve complex problems with data and machine learning.</p>
                   <Link to='/digital' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] md:mt-5'>
                     <p className='text-sm '>View Course</p>
                   </Link>
               </div>

        </div>
  {/* Card 6 */}
   <div className='border rounded-2xl border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer' style={{ animationDelay: '600ms' }}>
         <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard6} alt='image' className='h-[100%] w-[100%] object-cover' />
</div>
          <div className='flex flex-row space-x-5 mb-4 text-sm'>
              <div className=''>
                <h3 className='bg-[#828A92] text-white px-4 py-1 rounded-full'>Introduction</h3>
              </div>
              
          </div>
               {/* card text */}
               <div className='flex flex-col text-sm'>
                <h2 className=' font-[500] mb-3'>AI & Machine Learning Engineering Career Track</h2>
                <p className='font-light mb-3 text-gray-600'>Shape the future with cutting-edge artificial intelligence.</p>
                   <Link to='/aimachine' className='text-white bg-black text-center py-2.5 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] md:mt-4.5'>
                     <p className='text-sm '>View Course</p>
                   </Link>
               </div>

        </div>
      </div>
      </div>
    </section>

       {/* Teen4Teens */}
       <section className='w-full bg-gradient-to-br from-[#60070B] to-[#9C0E76] mt-20'>
            <div className='md:max-w-6xl w-full mx-auto md:px-0 px-5 md:py-15 py-10'>
         <div className='flex flex-col md:flex-row gap-10 text-white'>
               {/* Left */}
               <div className='flex-1 flex flex-col md:max-w-[550px] order-2 md:order-1'>
                     <div className='flex flex-row gap-1 mb-6'>
                      <h2 className='text-5xl font-semibold font-font family/Font 1'>Tech<span className='text-6xl font-font family/Font1'>4</span>Teen</h2>
                      <p className='text-sm font-medium mt-9 text-[#FDE85C]'>NEW</p>
                     </div>
                     <div className='flex flex-col mt'>
                         <h2 className='text-xl mb-4 font-Sora'>This is a  3-month weekend training Program designed specially for young African tech enthusiasts aged 8–20.</h2>
                         <div className='md:max-w-[450px] mb-4'>
                          <p className='text-ssm'>Our goal is to help African teens discover the power of
                           technology early — by learning, building, and innovating through fun, practical, and creative projects.</p>
                         </div>
                         <div className=''>
                          <h2 className='text-[24px] font-Sora'>Ready to Begin?</h2>
                          <p className='text-ssm mb-4'>Give your child  a head start in tech.</p>
                          {/* ENROLL Button */}
                          <Link to='/tech4teen' className='bg-[#5E0BD1] rounded px-10 py-2.5'>Enroll Now</Link>
                         </div>
                     </div>
               </div>
                {/* Right */}
                <div className='flex-1 md:max-w-[600px] flex items-center justify-center order-1 md:order-2'>
                      <img
                        src={heroImage2}
                        alt='Hero'
                        className='md:w-116 md:h-96 w-full h-72 md:mr-10 object-cover rounded-xl'
                        style={{ filter: 'blur(1px)' }}
                      />
                </div>
         </div>
            </div>


       </section>


  {/* Testimonials */}
  <section id='testimonials' className='w-full bg-white '>
  <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-10 pb-10'>
    <div className='text-center items-center justify-center mx-auto'>
      <div className='bg-[#5E0BD1] w-40 rounded items-center justify-center mx-auto mb-3'>
        <h2 className='py-2 px-4 text-white'>TESTIMONIALS</h2>
      </div>
      <p className='font-Sora text-3xl md:text-[50px] mb-4'>Hear what they say about us.</p>
    </div>

    {/* main gradient testimonial */}
    <div className='relative rounded-lg overflow-hidden py-3'>
      <img src={testImage} alt='image' className='w-full h-[300px] md:h-[420px] object-cover md:rounded-xl block' />

      {/* gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(180deg, #3B1B6C80 0%, #00000066 50%, #3B1B6C80 100%)',
          zIndex: 10
        }}
      />

      {/* text */}
      <div
        className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none md:mt-25 mt-10'
        style={{ zIndex: 20 }}
      >
        <p className='text-white text-center px-4 md:px-8 text-sm md:text-2xl font-light font-Sora md:mb-3'>
          “I had an amazing experience at Zeplus Academy.”
        </p>
        <h2 className='text-white md:text-[22px] text-sm font-light font-sora md:mb-3'>-</h2>
        <h2 className='text-white md:text-[22px] text-sm font-light font-sora'>UIUX Designer, Nigeria</h2>
      </div>
    </div>

    {/* 3 testimonial boxes */}
    <div className='flex flex-col md:flex-row gap-6 mt-10'>
      {/* 1 */}
      <div className='relative w-full md:w-1/3 h-[260px] mx-auto rounded-lg overflow-hidden'>
        <img src={test1} alt='testimonial1' className='w-full h-full object-cover' />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)', zIndex: 10 }} />
        <div className='absolute inset-0 flex flex-col justify-end p-4' style={{ zIndex: 20 }}>
          <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Joe</p>
          <h2 className='text-white text-xs md:text-sm font-sora font-light'>Product Designer, USA</h2>
        </div>
      </div>

      {/* 2 */}
      <div className='relative w-full md:w-1/3 h-[260px] mx-auto rounded-lg overflow-hidden'>
        <img src={test2} alt='testimonial2' className='w-full h-full object-cover' />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)', zIndex: 10 }} />
        <div className='absolute inset-0 flex flex-col justify-end p-4' style={{ zIndex: 20 }}>
          <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Mosope</p>
          <h2 className='text-white text-xs md:text-sm font-sora font-light'>Product Designer, United Kingdom</h2>
        </div>
      </div>

      {/* 3 */}
      <div className='relative w-full md:w-1/3 h-[260px] mx-auto rounded-lg overflow-hidden'>
        <img src={test3} alt='testimonial3' className='w-full h-full object-cover' />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(59,27,108,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(59,27,108,0.6) 100%)', zIndex: 10 }} />
        <div className='absolute inset-0 flex flex-col justify-end p-4' style={{ zIndex: 20 }}>
          <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Rebecca</p>
          <h2 className='text-white text-xs md:text-sm font-sora font-light'>Product Designer, Nigeria</h2>
        </div>
      </div>
    </div>
  </div>

  {/* Alumni Section */}
  <div className='md:px-30 px-6 mt-10'>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-5 items-stretch justify-center'>
      {/* Alumni 1 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col min-h-[260px]'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni1} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2 className='font-semibold text-sm md:text-base'>Tunde</h2>
            <p className='text-xs md:text-sm'>UI/UX Designer</p>
          </div>
        </div>
        <p className='text-sm md:text-base leading-relaxed'>
          “Learning design at Zeplus transformed my career — I went from beginner to job-ready in just four months.”
        </p>
      </div>

      {/* Alumni 2 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col min-h-[260px]'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni2} alt='alumni2' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2 className='font-semibold text-sm md:text-base'>Adaeze</h2>
            <p className='text-xs md:text-sm'>Product Designer @ Fintech Startup</p>
          </div>
        </div>
        <p className='text-sm md:text-base leading-relaxed'>
          “Zeplus gave me the confidence to create designs that solve real problems. The mentorship and AI modules were game-changers.”
        </p>
      </div>

      {/* Alumni 3 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col min-h-[260px]'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni3} alt='alumni3' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2 className='font-semibold text-sm md:text-base'>Amarachi</h2>
            <p className='text-xs md:text-sm'>Freelancer, Alumni</p>
          </div>
        </div>
        <p className='text-sm md:text-base leading-relaxed'>
          “Zeplus gave me the confidence to pursue design as a real career path. The mentorship and projects changed everything.”
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Apply Now Section */}
  <section id='apply-form' className='w-full bg-gradient-to-br from-[#60070B] to-[#9C0E76] mt-20'>
            <div className='md:max-w-[1300px] mx-auto md:px-0 px-5 md:py-10 py-10'>
          <div className='flex flex-col md:flex-row gap-6 text-white items-center justify-center'>
                {/* Left */}
                 <div className='flex flex-col md:max-w-[750px] gap-6'>
                  <div className='md:max-w-[500px]'>
                    <h2 className='text-[26px] md:text-[32px] font-[500]'>At Zeplus Academy, our mission is to empower you with future-ready Tech and AI skills</h2>
                  </div>
                  <div className='md:max-w-[500px]'>
                    <h2 className='text-[16px] font-[400]'>The perfect blend of creativity, strategy, and technology you need to stand out,
                      build impact-driven products, and thrive in today’s competitive job market. </h2>
                  </div>
                  <div>
                    <p className='text-[17px] font-[400]'>We don’t just train designers; we shape innovators and problem-solvers ready to lead Africa’s digital transformation</p>
                  </div>
                 </div>
                  {/* Right */}
       <div className=' bg-[#C491C0] rounded-xl w-full md:max-w-[700px]'>
  <div className='flex flex-col justify-center p-5'>
    <h2 className='text-[26px] md:text-[32px] text-black'>Ready to launch your career?</h2>
    {/* Form fields */}
    <form className='flex flex-col gap-3 mt-5 '>
      
      {/* First & Last Name */}
      <div className='flex flex-col sm:flex-row gap-2'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-[400]'>First Name *</label>
          <input type='text' placeholder="First Name" className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-[400]'>Last Name *</label>
          <input type='text' placeholder="Last Name" className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
        </div>
      </div>

      {/* Email */}
      <div className='flex flex-col gap-2'>
        <label className='font-[400]'>Email *</label>
        <input type='text' placeholder="Enter your email" className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
      </div>

      {/* Phone & Hybrid */}
      <div className='flex flex-col sm:flex-row gap-2'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-[400]'>Phone*</label>
          <input type='num' placeholder="Enter phone number" className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className='font-[400]'>Hybrid *</label>
          <select title='Select an option' className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
            <option>Select an option</option>
            <option>In-Person</option>
            <option>Online</option>                                 
          </select>
        </div>
      </div>

      {/* Course */}
      <div className='flex flex-col gap-2'>
        <label className='font-[400]'>What Course would you like to learn? *</label>
        <select title='Select an option' className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
          <option>Select a course</option>
          <option>AI</option>
          <option>Cybersecurity</option>
          <option>Digital Marketing</option>
          <option>Full Stack Development</option>
          <option>Data Analytics</option>
          <option>UI/UX Design</option>
        </select>
      </div>

      {/* Referral */}
      <div className='flex flex-col gap-2'>
        <label className='font-[400]'>How did you hear about Zeplus? *</label>
        <select title='Select an option' className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
          <option>Select an option</option>
          <option>Social Media</option>
          <option>Friend or Family</option>
          <option>Online Search</option>
          <option>Advertisement</option>
          <option>Other</option>
        </select>
      </div>

      {/* Hidden Curriculum Request Field */}
      <input type="hidden" name="curriculumRequest" value="Yes" />

      {/* Submit */}
      <button className='bg-black text-white py-2.5 font-[380] rounded-md w-40'>Submit</button>
    </form>
  </div>
</div>


          </div>
          </div>
        </section>

        {/* Contact Section */}
<div className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 px-6 md:px-20 py-10 text-white">
  <p className="text-center md:text-left text-[14px] sm:text-[15px] md:text-[16px] max-w-lg">
    Send us a message at info@zeplusacademy.com or chat with a Zeplus Advisor for instant guidance.
  </p>

  <img src={StraightLine} alt="line" className="hidden md:block" />

  <div className="flex flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-center items-center">
    <a
      href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Programs%20offered%20at%20Zeplus%20Academy."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-[200px]"
    >
      <div className="flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] w-full sm:w-[200px] px-6 py-2.5 rounded">
        <p className="font-[500]">Let's Talk</p>
        <span>
          <img src={whatsapp} alt="icon" className="w-4 h-4" />
        </span>
      </div>
    </a>

    <a
      href="#programs"
      className="flex items-center justify-center w-full sm:w-[200px] h-[40px] border-2 border-[#6C27FF] bg-white text-[#6C27FF] font-semibold font-inter text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#6C27FF] hover:text-white transition-all duration-200 whitespace-nowrap px-6"
    >
      Explore Courses
    </a>
  </div>
</div>

    </section>
  )
}

export default Home