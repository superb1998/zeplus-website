import heroImage from '../assets/img/img1.png'
import { Link } from 'react-router-dom'
import cyber from '../assets/img/cyber.svg'
import dataIcon from '../assets/img/data.svg'
import aiIcon from '../assets/img/ai.svg'
import uiuxIcon from '../assets/img/uiuxsvg.svg'
import gridicon from '../assets/img/gridicon.svg'
import grid2icon from '../assets/img/gridicon2.svg'
import grid3icon from '../assets/img/gridicon3.svg'
import grid4icon from '../assets/img/gridicon4.svg'
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




const Home = () => {
  return (
    <section className='w-full font-poppins'>
    <div className='md:max-w-[1350px] mx-auto md:px-0 px-5 py-10 md:py-0 pt-2 md:pt-0 items-center justify-center'>
      <div className='flex flex-col md:flex-row '>
         <div className='flex-1 flex flex-col justify-center gap-6 order-2 md:order-1'>
             <h2 className='md:text-5xl text-3xl font-[800] pt-5 font-poppins'>Become a <br/>Future-Ready Teach Leader in less than 5 Months </h2>
             <div className='md:text-ssm text-sm text-gray-600 md:max-w-[450px]'>

                <p className=''>We equip African youth with the most in-demand skills in UI/UX Design, Data Analystics, Full stack Development, Cybersecurity, and AI.</p>
             </div>
             <div className='flex flex-row gap-4'>
                 <Link to='/' className=' bg-[#5e0bd1] py-3 px-6 text-white rounded text-sm'>Start Your Journey Today</Link>
                 <Link to='/' className=' border border-[#5e0bd1] py-3 px-6 rounded text-sm text-[#5e0bd1]'>View Curriculum</Link>
             </div>
         </div>

         {/* Right: image */}
     <div className='flex-1 flex items-center justify-center order-1 md:order-2 relative'>
       <img src={heroImage} alt='Hero' className='md:w-143 md:h-146 w-76 h-76 mr-6 object-cover rounded-lg' />

       {/* Badges */}
       <div className='absolute -top-4 left-9 md:top-56 top-30 md:left-8  px-3 py-2 rounded-lg flex items-center gap-2'>
         <img src={cyber} alt='Cybersecurity' className='w-full h-10 md:w-full md:h-18' />
         
       </div>

       <div className='absolute bottom-6 left-3 md:bottom-8 md:left-6  px-3 py-2 rounded-lg  flex items-center gap-2'>
         <img src={dataIcon} alt='Data' className='w-full h-10 md:w-full md:h-16' />
         
       </div>

       <div className='absolute top-1/2 right-3 md:top-85 md:right-2 transform -translate-y-1/2  px-3 py-2  flex items-center gap-2'>
         <img src={aiIcon} alt='AI' className='w-full h-10 md:w-full md:h-18' />
         
       </div>

       <div className='absolute bottom-2 right-15 md:bottom-6 md:right-20  p-2 rounded-lg flex items-center justify-center'>
         <img src={uiuxIcon} alt='UI/UX' className='w-full h-14 md:w-full md:h-20' />
       </div>
     </div>
      </div>
    </div>


    {/* Why Zplus section */}
    <section className='w-full bg-[#FEF2F2]'>
       <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-20 pb-10'>
               <div className='text-center  md:max-w-[500px] mx-auto'>
                     <h2 className='font-Sora md:text-4xl text-2xl font-[490] mb-1'>Why Zeplus Academy</h2>
                     <div className='md:max-w-[300px] mx-auto'>
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

    {/* Programs Section */}
    <section className='w-full bg-white '>
  <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-20'>
      <div className='text-center flex flex-col items-center'>
        <div>
          <h2 className=' mb-1 font-Sora md:text-4xl text-2xl font-[490]'>Programs to Power Your Future</h2>
          <div className=''>
      <p className='md:text-[17px] text-[13px] font-[300]'>Choose your path. Explore new possibilities. Land the career you deserve.</p>
          </div>
        </div>
      <div className='flex flex-row md:space-x-20 space-x-6.5 justify-center mt-6'>
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-[7px]'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text- text-[14px]'>40 to 360 hours</p>
            </div>
            {/* 2 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text- text-[14px]'>Live classes</p>
            </div>
            {/* 3 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4' />
              <p className='md:text- text-[14px]'>On site or online</p>
            </div>
        </div>
      </div>
  </div>

      {/* Images Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mt-20 md:px-30 px-5'>
  {/* Card 1 */}
  <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '0ms' }}>
         <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard} alt='image' className='max-h-full w-[100%]' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-8 py-1.5 rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>UI/UX Design Career Accelerator</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Master user experience, interface design, and product strategy through hands-on projects.Build
                   a design portfolio and learn modern tools</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <Link to='/' className='text-ssm '>View course</Link>
                   </div>
               </div>

        </div>
  {/* Card 2 */}
   <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '120ms' }}>
          <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard2} alt='image' className='max-h-full w-[100%]' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-8 py-1.5 rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>Data Analytics Career Track</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Learn to analyze, visualize, and make data-driven decisions. Work with real datasets using Excel,
 SQL, Power BI, and Python for analytics.</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <Link to='/' className='text-ssm '>View course</Link>
                   </div>
               </div>

        </div>
  {/* Card 3 */}
   <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '240ms' }}>
          <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard3} alt='image' className='max-h-full w-full ' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>Full Stack Development Bootcamp</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Become a professional web developer capable  of building scalable digital products from scratch.</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] mt-5.5'>
                     <Link to='/' className='text-ssm '>View course</Link>
                   </div>
               </div>

        </div>
  {/* Card 4 */}
   <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '360ms' }}>
          <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard4} alt='image' className='max-h-full w-[100%]' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-8 py-1.5 rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>Cybersecurity Bootcamp</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Master the essentials of network defense, ethical hacking, and data protection. Train with simulated
attacks and learn how to secure modern systems.</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%]'>
                     <Link to='/' className='text-ssm '>View course</Link>
                   </div>
               </div>

        </div>
  {/* Card 5 */}
   <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '480ms' }}>
         <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard5} alt='image' className='max-h-full w-[100%]' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              <div className='flex flex-row space-x- items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-8 py-1.5 rounded-full text-white'>
                <img src={withai} alt='icon' className='w-8 h-6' />
                  <p className='text-sm'>with AI Skills</p>
              </div>
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>Digital Marketing</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Solve complex problems with data and machine learning.</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] mt-5.5'>
                     <Link to='/' className='text-ssm '>Learn more</Link>
                   </div>
               </div>

        </div>
  {/* Card 6 */}
   <div className='border-l border-r border-gray-200 p-5 transform transition duration-300  hover:shadow-lg cursor-pointer animate-slide-in opacity-0' style={{ animationDelay: '600ms' }}>
         <div className='w-full h-52 mb-5 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center'>
  <img src={imgcard6} alt='image' className='max-h-full w-[100%]' />
</div>
          <div className='flex flex-row space-x-5 mb-4'>
              <div className='bg-[#828A92] text-white px-4 py-2 rounded-full'>
                <h3 className='text-sm'>Career change</h3>
              </div>
              
          </div>
               {/* card text */}
               <div className='flex flex-col'>
                <h2 className='text-ssm font-[700] mb-3'>AI & Machine Learning Engineering Career Track</h2>
                <p className='font-light text-ssm mb-3 text-gray-600'>Shape the future with cutting-edge artificial intelligence.</p>
                   <div className='text-white bg-black text-center py-3 rounded cursor-pointer hover:bg-gray-800 transition-colors duration-300 w-[90%] mt-5.5'>
                     <Link to='/' className='text-ssm '>Learn more</Link>
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
                          <Link to='/' className='bg-[#5E0BD1] px-10 py-2.5'>Enroll Now</Link>
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
        <section className='w-full bg-white '>
            <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-10 pb-10'>
                   <div className='text-center items-center justify-center mx-auto'>
                   <div className='bg-[#5E0BD1] w-40 rounded items-center justify-center mx-auto mb-3'>
                     <h2 className='py-2 px-4 text-white'>TESTIMONIALS</h2>
                   </div>
                    <p className='font-Sora text-3xl md:text-[50px] mb-4'>Hear what they say about us.</p>
                   </div>
                   {/* gradient taller than image */}
                   <div
                    className='relative rounded-lg overflow-hidden py-3'
                  >
                    <img
                      src={testImage}
                      alt='image'
                      className='max-w-[100%] mx-auto md:rounded-xl block'
                    />

                    {/* gradient overlay (on top of the image) */}
                    <div
                      className='absolute inset-0'
                      style={{
                        background:
                          'linear-gradient(180deg, #3B1B6C80 0%, #00000066 50%, #3B1B6C80 100%)',
                        zIndex: 10
                      }}
                    />

                    {/* centered text overlay above the gradient */}
                    <div
                      className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none md:mt-25 mt-10'
                      style={{ zIndex: 20 }}
                    >
                      <p className='text-white text-center px-4 md:px-8 text-ssm font-light md:text-2xl font-Sora md:mb-3'>
                        “I had an amazing experience at Zeplus Academy.”
                      </p>
                      <h2 className='text-white md:text-[22px] text-sm font-light font-sora md:mb-3'>-</h2>
                      <h2 className='text-white md:text-[22px] text-sm font-light font-sora'>UIUX Designer, Nigeria</h2>
                    </div>
                  </div>

                  {/* the 3 below testimonials images */}
                  <div className='flex flex-col md:flex-row gap-6 mt-10'>
                    {/* Testimonial 1 with overlay text */}
                    <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
                      <img src={test1} alt='testimonial1' className='w-full md:h-56 h-auto object-cover' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0 md:h-56 md:rounded-lg'
                        style={{
                          background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-20 px-4' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[19px] font-light font-Sora'>Joe</p>
                        <h2 className='text-white text-ssm font-sora font-light'>Product Designer, USA</h2>
                      </div>
                    </div>
                    {/* Testimonial 2 with overlay text */}
                    <div className='relative w-full max-w-[400px] mx-auto rounded-lg overflow-hidden'>
                      <img src={test2} alt='testimonial1' className='w-fit h-65 block' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0'
                        style={{
                          background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-30 px-4 py-6' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Mosope</p>
                        <h2 className='text-white text-ssm font-sora font-light'>Product Designer, United Kingdom</h2>
                      </div>
                    </div>
                    {/* Testimonial 3 with overlay text */}
                    <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
                      <img src={test3} alt='testimonial1' className='w-full md:h-56 h-auto block' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0 md:h-56 md:rounded-lg'
                        style={{
                          background: 'linear-gradient(180deg, rgba(59,27,108,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(59,27,108,0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-20 px-4 py-6' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Rebecca</p>
                        <h2 className='text-white text-ssm font-sora font-light '>Product Designer, Nigeria</h2>
                      </div>
                    </div>
                  </div>

                  
            </div>
             {/* Alumni Section */}
                   <div className='md:px-30 px-6 mt-10 '>
                       
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-5 items-center justify-center '>
                    {/* Alumni 1 */}
                    <div className='bg-[#F6F7FD] rounded-lg px-6 pt-8 pb-10 flex flex-col text-[#6D0C29] '>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni1} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2>Tunde</h2>
                          <p>UI/UX Designer</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px]'>
                        <p>“Learning design at Zeplus transformed my career — I went from beginner to job-ready in just four months.”</p>
                       </div>
                    </div>
                    {/* Alumni 2 */}
                    <div className='bg-[#F6F7FD] rounded-lg px-6 pt-8 pb-10 flex flex-col text-[#6D0C29] '>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni2} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2>Adaeze</h2>
                          <p>Product Designer @ Fintech Startup</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px] text-[#6D0C29]'>
                        <p>“Zeplus gave me the confidence to create designs that solve real problems. The mentorship and AI modules were game-changers.”</p>
                       </div>
                    </div>
                    {/* Alumni 3 */}
                    <div className='bg-[#F6F7FD] rounded-lg px-6 pt-8 pb-10 flex flex-col text-[#6D0C29]'>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni3} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2>Amarachi</h2>
                          <p>Freelancer, Alumni</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px]'>
                        <p>“Zeplus gave me the confidence to pursue design as a real career path. The mentorship and projects changed everything.”</p>
                       </div>
                    </div>
                  </div>
                   </div>

        </section>

        {/* Apply Now Section */}
        <section className='w-full bg-gradient-to-br from-[#60070B] to-[#9C0E76] mt-20'>
            <div className='md:max-w-7xl w-full mx-auto md:px-0 px-5 md:py-25 py-10'>
          <div className='flex flex-col md:flex-row gap-10 text-white items-center justify-center'>
                {/* Left */}
                 <div className='flex flex-col md:max-w-[600px] gap-6'>
                  <div>
                    <h2 className='text-[26px] font-[400]'>At Zeplus Academy, our mission is to empower you with future-ready Tech and AI skills</h2>
                  </div>
                  <div>
                    <h2 className='text-[26px] font-[400]'>The perfect blend of creativity, strategy, and technology you need to stand out,
                      build impact-driven products, and thrive in today’s competitive job market. </h2>
                  </div>
                  <div>
                    <p className='text-[17px] font-[400]'>We don’t just train designers; we shape innovators and problem-solvers ready to lead Africa’s digital transformation</p>
                  </div>
                 </div>
                  {/* Right */}
                 <div className='md:max-w-[600px] bg-[#C491C0] rounded-xl'>
                   <div className='flex flex-col  justify-center p-6'>
                     <h2 className='text-xl mb-4 text-black'>Ready to launch your career?</h2>
                     <div className='flex flex-col gap-2 w-95'>
                      <label className='text-xs font-semibold text-[#0d0333] uppercase tracking-wide'>Select your program *</label>
                      <select className='font-light text-gray-400 text-sm bg-white px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-bg-white'>
                        <option value='' disabled selected>Please select...</option>
                        <option className='text-gray-600'>UI/UX Design</option>
                        <option className='text-gray-600'>Data Analytics</option>
                        <option className='text-gray-600'>Fullstack Development</option>
                        <option className='text-gray-600'>Cybersecurity</option>
                      </select>
                     </div>

                     {/* Email input */}
                     <div className='flex flex-col gap-2 mt-4 w-95'>
                       <label className='text-xs font-semibold text-[#0d0333] uppercase tracking-wide'>Email Address *</label>
                       <input type='email' className='font-light text-gray-800 text-sm bg-white px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-bg-white' placeholder='Please enter email' />
                     </div>
                      {/* Button */}
                      <div className='mt-4'>
                        <button className='w-30 bg-[#5E0BD1] text-white text-sm py-2 rounded hover:bg-[#5E0BD1] transition'>
                          Apply Now
                        </button>
                      </div>
                   </div>
                 </div>

          </div>


            </div>



        </section>
    </section>
  )
}

export default Home