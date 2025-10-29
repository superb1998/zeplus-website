import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import aiheropic from '../assets/courses/aimachine.png'
import aiassist from '../assets/courses/aiassist.png'
import blackdot from '../assets/courses/blackdot.svg'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.png'
import calendar from '../assets/courses/date.svg'
import location from '../assets/courses/loc.svg'
import Whatsapp from '../assets/courses/whatsapp.png'
import  { useState, useRef } from 'react'

const Aimachine = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const formRef = useRef<HTMLElement | null>(null)

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

  const faqs = [
    {
      q: "What is Zeplus Academy?",
      a: "Zeplus Academy is a forward-thinking tech academy dedicated to empowering African youth with practical skills in product development, design, and technology. We train innovators to create solutions that drive Africa’s progress."
    },
    {
      q: "What courses are available?",
      // example with bullets — use HTML markup (will be rendered below)
      a: `<p>We offer hands-on programs in:</p>
          <ul class="list-disc ml-5">
            <li>UI/UX Design with AI Skills, Data Analytics, Full Stack Development, Cybersecurity</li>
            <li>Digital Marketing.    Each course is project-based and career-focused.</li>
            </ul>`
    },
    {
      q: "Who can join Zeplus Academy?",
      a: "Anyone aged 16–35 with a passion for innovation, creativity, and technology can apply—whether you’re a beginner or looking to advance your tech career."
    },
    {
      q: "Do I need prior experience?",
      a: "No experience required! Our beginner-friendly programs start from the basics and guide you step-by-step through practical projects."
    },
    {
      q: "How long do courses last?",
      a: "Programs typically run 12–16 weeks, depending on the track. combining live classes, mentorship, and portfolio-building projects."
    },
    {
      q: "Is the training online or physical?",
      a: "Zeplus Academy offers online and hybrid learning options, with sessions accessible anywhere and physical classes in Magodo, Lagos."
    },
    {
      q: "What makes Zeplus Academy different from other tech schools?",
      a: "We don’t just teach skills — we mentor innovators. Our programs integrate real-life projects, leadership development, and access to Africa’s growing tech ecosystem."
    },
    {
        q: "How much do courses cost?",
        a: "Course fees vary by program. We provide flexible payment options, installment plans, and occasional scholarship opportunities for outstanding applicants."
    },
    {
        q: "How can I apply or enroll??",
        a: "Simply visit our website’s “Apply Now” section, choose your preferred course, and complete the short application form. Our admissions team will contact you within 48 hours."
    },
     {
        q: "Can organizations partner with Zeplus Academy?",
        a: "Yes! We collaborate with companies, NGOs, and institutions to train and empower youth across Africa.   📧 partners@zeplusacademy.com"
    },
    {
        q: "How can I contact Zeplus Academy?",
        a: "You can reach our support team via email at support@zeplusacademy.com, WhatsApp, or visit our office at Magodo Phase 2 Estate, Lagos."
    },

  ]

  return (
    <section className='w-full bg-white'>
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
                        <div className='md:max-w-[550px] mb-5'>
                            <h1 className='md:text-[50px] text-4xl font-[600]'>AI & Machine Learning Mastery Program</h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                 <h2 className='md:text-[40px] text-3xl font-[650] text-[#6c0c11]'>279,000 NGN </h2>
                                  <p className='font-[500]'>Transform data into innovation.</p>
                                  <div className='md:max-w-[600px] '>
                                    <p className='font-[390]'>Master the intelligence that powers the world’s smartest
                                     systems — and become part of Africa’s next generation of AI innovators.</p>
                                  </div>
                                   <div className='flex flex-row gap-3 mt-2'>
                                    <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20AI%20&%20Machine%20Learning%20course%20at%20Zeplus%20Academy."
        target="_blank"
        rel="noopener noreferrer"
      >
    <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-10 py-2.5 rounded'>
    <p className='font-[500] '>Let's Talk</p>
    <span>
      <img src={Whatsapp} alt='icon' className='w-4 h-4 ' />
    </span>
  </div>
</a>
                                    <p onClick={scrollToForm} role="button" tabIndex={0} className='cursor-pointer text-black border border-[#5E0BD1] md:px-10 md:py-3 py-2.5 px-5
                                     font-[500] rounded'>Download Brochure</p>
                                  </div>
        
                                     {/* Duration */}
                                  <div className='md:max-w-[650px] mt-4'>
                                    <div className='flex md:flex-row flex-col md:gap-10 gap-2'>
                                    {/* 1st */}
                                    <div className='flex flex-row gap-2'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[390]'><span className='font-[600]'>Duration:</span> 16 weeks</p>
                                    </div>
                                    {/* 2nd */}
                                    <div className='flex flex-row gap-2'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[390]'><span className='font-[600]'>Hybrid Learning:</span> Online or in-Person</p>
                                    </div>
                                   
                                  </div>
                                  <div className='flex md:flex-row flex-col md:gap-18 gap-2 md:mt-3 mt-2'>
                                     {/* 3rd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[600]'>4 hours/week</p>
                                    </div>
                                    {/* 4th */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[390]'><span className='font-[600]'>Flexible Schedules:</span> Day or Evening Classes</p>
                                    </div>
                                  </div>

                                  </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='md:max-w-[600px] '>
                        <img src={aiheropic} alt="Digital Growth" className='w-full md:h-115 h-80 object-cover rounded' />
                    </div>
              </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className='bg-white w-full font-poppins'>
          {/* Course Overview */}
          <div className='mt-10 bg-[#FEF2F2]'>
             <div className='md:max-w-4xl mx-auto md:px-0 px-6 py-10'>
                <div className='flex flex-col gap-8 items-center justify-center'>
                <h2 className='md:text-[40px] font-[600] text-[28px] text-center'>Become a Certified AI & Machine Learning Expert in Just 16 Weeks</h2>
                <div className='flex flex-col gap-3 items-center '>
                    <p className='md:text-[16px] text-[15px] text-center'>Launch your tech career with skills that blend logic, data, and creativity.</p>
                    <p className='md:text-[16px] text-[15px] text-center'>Learn to build intelligent systems, train machine learning models, and create real-world solutions that impact industries.</p>
                  
                </div>
             </div>
             </div>
          </div>

          {/* Career Opportunities */}
          <section className='mt-10 bg-gradient-to-br from-[#60070B] to-[#9C0E76] text-white font-poppins'>
                <div className='md:max-w-7xl mx-auto md:px-0 px-6 py-15'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* Left Side */}
                        <div className='md:max-w-[650px]'>
                            <div className='flex flex-col gap-5'>
                                <h2 className='md:text-[40px] text-2xl font-[550]'>Future-Focused AI & Machine Learning Course</h2>
                                <div className='flex flex-row gap-3 '>
                                 <p className='font-[400]'>Code smarter</p>
                                 <p className='font-[400]'>Think deeper</p>
                                 <p className='font-[400]'>Build intelligently. </p>
                                </div>
                                <p className='font-[390]'>Learn to use AI to automate systems, make predictions, and enhance human decision-making — with tools and frameworks such as:</p>
                                <div className='flex flex-col gap-4 mt-3 ml-10'>
                                    {/* 1st */}
                                <div className='flex flex-col gap-1'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Python</p>
                                       
                                   </div>
                                    <p className='font-[390] ml-8 md:text-[16px] text-[14px]'>Your foundation for data science and AI development.</p>
                                   </div>
                                   {/* 2nd */}
                                   <div className='flex flex-col gap-1'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>TensorFlow & PyTorch</p>
                                       
                                   </div>
                                    <p className='font-[390] ml-8 md:text-[16px] text-[14px]'>Build and train deep learning models.</p>
                                   </div>
                                   {/* 3rd */}
                                   <div className='flex flex-col gap-1'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Scikit-learn</p>
                                       
                                   </div>
                                    <p className='font-[390] ml-8 md:text-[16px] text-[14px]'>Simplify predictive analytics and machine learning pipelines.</p>
                                   </div>
                                      {/* 4th */}
                                      <div className='flex flex-col gap-1'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>ChatGPT & AI Assistants</p>
                                       
                                   </div>
                                    <p className='font-[390] ml-8 md:text-[16px] text-[14px]'>Build and train deep learning models.</p>
                                   </div>
                                  
                                  
                                   
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-[390] md:text-[16px] text-[14px]'>Build real-world projects that prove your ability to solve global challenges 
                                        through data and automation.</p>
                                        <p className='font-[390] md:text-[16px] text-[14px]'>Get ready to lead the next wave of AI-driven innovators in Africa.</p>
                                  </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[600px]'>
                            <img src={aiassist} alt='image' className='w-full md:h-105 h-70 object-cover' />
                        </div>
                    </div>
                </div>
          </section>

          {/* What You'll Learn */}
          <section className='md:mt-20 mt-15 font-poppins bg-white'>
                <div className='md:max-w-7xl mx-auto md:px-0 px-6 py-0 mb-20'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center mb-12'>
                        <h2 className='md:text-[40px] text-[25px] font-[550]'>What You'll Learn</h2>
                        <p className='font-[395]'>In this immersive 16-week program, you’ll gain both the technical mastery and 
                     creative confidence to bring AI solutions to life.</p>
                      </div>

                      {/* Learning Modules */}
                     <div className='flex flex-col gap-5'>
                        {/* Modules list */}
                        {/* 1st */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2.5'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>AI Foundations</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Understand the core concepts of Artificial Intelligence and Machine Learning.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Learn data collection, preprocessing, and modeling techniques.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Master key algorithms — from regression to neural networks.</p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>Machine Learning in Practice</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Work with real datasets to create predictive models.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Train, test, and optimize models for accuracy and scalability.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Build intelligent systems that adapt and learn from data.</p>
                                </div>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>Deep Learning & Automation</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Explore neural networks, computer vision, and natural language processing (NLP).</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Integrate AI into business and tech workflows.</p>
                                </div>
                                
                            </div>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>Portfolio & Real Projects</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Solve real business challenges with mentorship from data scientists and AI engineers.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Develop 3–4 AI-powered projects for your professional portfolio.</p>
                                </div>
                                
                            </div>
                        </div>
                     </div>
           
                </div>
          </section>

          {/* Why choose Zeplus */}
          <section className='md:max-w-6xl mx-auto md:px-0 px-6 pt-10 md:pt-20 mb-10 font-poppins'>
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#5e0bd1] py-3 px-14 rounded font-poppins'>Download Brochure</h2>
                    </div>

                        {/* why choose */}
                        <div className='bg-gradient-to-br from-[#60070B] to-[#9C0E76] text-white font-poppins mt-10  rounded-lg'>
                            <div className='md:py-10 py-10 md:px-0 px-6'>
                              <div className='flex flex-col gap-4 items-center justify-center text-center md:max-w-4xl mx-auto'>
                                      <h2 className='md:text-[40px] text-[22px] font-[700]'>Why Choose Zeplus Academy?</h2>
                                     <p className='font-[390] md:text-[16px] text-[14px]'>Zeplus Academy isn’t just a tech school—it’s a movement. We empower Africa's next generation of
                                         digital leaders through hands - on training, mentorship, and a powerful community network.</p>
                                     

                               
                              </div>
                              <div className='md:max-w-4xl mx-auto mnd:px-0 px-5 mt-6 items-center justify-center flex font-poppins'>
                                     {/* lists */}
                                     <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                        {/* 1st */}
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2.5 items-center'>
                                                <span>
                                                    <img src={mark} alt='icon' className='w-4 h-4 invert' />
                                                </span>
                                                <p className='md:text-[16px] text-[14px] font-[550]'>Project-Based Learning</p>
                                            </div>
                                            <div className='ml-5'>
                                                <p className='md:text-[16px] text-[14px]'>Build skills through hands-on coding and real data.</p>
                                            </div>
                                        </div>
                                        {/* 2nd */}
                                         <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2.5 items-center'>
                                                <span>
                                                    <img src={mark} alt='icon' className='w-4 h-4  invert' />
                                                </span>
                                                <p className='md:text-[16px] text-[14px] font-[550]'>Mentorship-Driven</p>
                                            </div>
                                            <div className='ml-5'>
                                                <p className='md:text-[16px] text-[14px]'>Learn directly from AI experts and data scientists.</p>
                                            </div>
                                        </div>
                                        {/* 3rd */}
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2.5 items-center'>
                                                <span>
                                                    <img src={mark} alt='icon' className='w-4 h-4  invert' />
                                                </span>
                                                <p className='md:text-[16px] text-[14px] font-[550]'>Community Support</p>
                                            </div>
                                            <div className='ml-5'>
                                                <p className='md:text-[16px] text-[14px]'>Connect with innovators shaping the African tech revolution.</p>
                                            </div>
                                        </div>
                                        {/* 4th */}
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row gap-2.5 items-center'>
                                                <span>
                                                    <img src={mark} alt='icon' className='w-4 h-4  invert' />
                                                </span>
                                                <p className='md:text-[16px] text-[14px] font-[550]'>AI-Powered Curriculum</p>
                                            </div>
                                            <div className='ml-5'>
                                                <p className='md:text-[16px] text-[14px]'>Stay ahead of trends with tools used by global AI teams.</p>
                                            </div>
                                        </div>
                                     </div>
                                    
                                    </div>
                         
                              </div>
                             </div>
                        
          </section>

           {/* ALumni */}

          <section className='bg-[#F7E3E3] font-poppins w-full mb-10 py-10 font-poppins'>
  <div className='bg-gradient-to-br from-[#60070B] to-[#9C0E76]  '>
    <div className='md:max-w-7xl mx-auto py-10 md:px-0 px-6'>
        <div className='md:max-w-3xl mx-auto items-center justify-center text-white mb-10'>
            <h2 className='md:text-[30px] text-[25px] font-[650] text-center'>Here’s why people just like you choose 
                     Zeplus Academy for Digital Marketing</h2>
            </div>

            {/*  grids */}
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center'>
                {/* 1st */}
                <div className='bg-white rounded-lg '>
                    <div className='flex flex-col gap-5 p-6'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni} alt='image' className='w-16 h-16 rounded-full object-cover' />
                            <h3 className='font-[400]'>Tunde</h3>
                        </div>
                        <div className='mb-5.5'>
                            <p className='font-[390] text-[15px]'>“Zeplus Academy transformed how I approach technology and problem-solving. The instructors 
                                were not just teachers — they were mentors who guided me every step of the way. Every project challenged me to 
                                think deeper and create smarter. It’s more than a school; it’s a launchpad for anyone serious about a tech career.”</p>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className='bg-white rounded-lg '>
                    <div className='flex flex-col gap-5 p-6'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni2} alt='image' className='w-16 h-16 rounded-full object-cover' />
                            <h3 className='font-[400]'> Adaeze</h3>
                        </div>
                        <div>
                            <p className='font-[390] text-[15px]'>Before joining Zeplus Academy, I doubted my ability to thrive in tech. But the
                                 structured learning path, interactive classes, and supportive community changed that. I went from a beginner to confidently working on real
                                 projects that make impact. The experience gave me the confidence to build and lead in the digital space.”</p>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className='bg-white rounded-lg '>
                    <div className='flex flex-col gap-5 p-6'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni3} alt='image' className='w-16 h-16 rounded-full object-cover' />
                            <h3 className='font-[400]'>Amarachi</h3>
                        </div>
                        <div className='mb-11'>
                            <p className='font-[390] text-[15px]'>What stood out to me most about Zeplus Academy was how practical everything felt.
                                 We didn’t just learn theories — we applied them immediately. From hands-on cybersecurity labs
                                 to teamwork simulations, it felt like real industry work. I left feeling ready for any challenge.”</p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  </div>
</section>


     <section className='md:max-w-7xl mx-auto mt-10 font-poppins' >
               <div className='flex flex-col items-center gap-5 justify-center mb-10'>
                <h2 className='md:text-[45px] text-[30px] font-[650]'>Course Schedule</h2>
                <p className='font-[390] md:text-[16px] text-[15px] text-center'>Join any of our upcoming sessions and begin your path to becoming an AI expert:</p>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#630811] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] '>November 2025</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-3 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-4 h-4 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, November 8, 2025</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 2nd */}
                            <div className='bg-[#630811] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] '>December 2025</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-3 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-4 h-4 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, December 6, 2025</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 3rd */}
                            <div className='bg-[#630811] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] '>January 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-3 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-4 h-4 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420]'>Saturday, January 10, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                      </div>
                      <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#5e0bd1] py-3 px-10 rounded font-poppins'>Enroll Now</h2>
                    </div>
               </div>
     </section>


      {/* Location Section */}
       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-gradient-to-br from-[#60070B] to-[#9C0E76] text-white md:rounded-lg'>
        <div className='md:p-10 md:max-w-2xl max-w-[400px] mx-auto p-6'>
            <div className='flex flex-col gap-1 items-center mb-4'>
                  <h2 className='text-white font-[600] md:text-[45px] text-[30px]'>Learn Anywhere</h2>
                  <p className='font-[380] md:text-[16px] text-[14px]'>Choose From</p>
            </div>
             <div className='flex md:flex-row flex-col gap-10 items-center'>
                {/* left side */}
                <div className='md:max-w-[650px] max-w-[400px] md:border-r border-white ssm:border-b md:pr-6 pb-6'>
                   <div className='grid grid-cols-2 gap-10'>
                    {/* 1st */}
                     <div className='flex flex-row gap-4 items-center'>
                        <span>
                            <img src={location} alt='icon' className='w-5 h-5 ' />
                        </span>
                        <p className='font-[550] md:text-[24px] text-[16px]'>Magodo</p>
                     </div>
                        {/* 2nd */}
                         <div className='flex flex-row gap-4 items-center'>
                        <span>
                            <img src={location} alt='icon' className='w-5 h-5 ' />
                        </span>
                        <p className='font-[550] md:text-[24px] text-[16px]'>Yaba</p>
                     </div>
                     {/* 3rd */}
                      <div className='flex flex-row gap-4 items-center'>
                        <span>
                            <img src={location} alt='icon' className='w-5 h-5 ' />
                        </span>
                        <p className='font-[550] md:text-[24px] text-[16px]'>Festac</p>
                     </div>
                        {/* 4th */}
                         <div className='flex flex-row gap-4 items-center'>
                        <span>
                            <img src={location} alt='icon' className='w-5 h-5 ' />
                        </span>
                        <p className='font-[550] md:text-[24px] text-[16px]'>Ikeja</p>
                     </div>
                   </div>
                </div>
                {/* right side */}
                <div className='md:max-w-[400px] flex items-center'>
                    <div className=''>
                        <h2 className='font-[380]'>Online learning hub</h2>
                    </div>
                </div>
             </div>
        </div>
       </section>


       <section className='md:max-w-7xl mx-auto mt-10 font-poppins bg-[#F6F7FD] rounded-lg'>
            <div className='md:max-w-4xl mx-auto md:px-0 py-15 px-6 flex flex-col gap-5 items-center'>
                <h2 className='font-[600] md:text-[45px] text-[25px]'>Ready to Defend the Future?</h2>
                <p className='font-[400] text-[14px] md:text-[16px]'>Become a certified cybersecurity professional with AI 
                    skills — and help build a safer digital Africa.</p>
                    <div className='flex flex-row gap-5'>
                        <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#5E0BD1] py-3 px-10 rounded font-poppins'>Apply Now</h2>
                    </div>
                         <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20AI%20&%20Machine%20Learning%20course%20at%20Zeplus%20Academy."
        target="_blank"
        rel="noopener noreferrer"
      >
    <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-10 py-2.5 rounded'>
    <p className='font-[500] '>Let's Talk</p>
    <span>
      <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
    </span>
  </div>
</a>
                    </div>
            </div>
       </section>

     

         {/*input form section */}
         
            
             {/* form */}
             <section ref={formRef} className='md:max-w-7xl mx-auto md:mt-20 mt-10 md:px-0 px-8 font-poppins' id="apply-form">
                     <div className=' text-center'>
                            <h2 className='text-2xl font-[500]'>Fill out the form below to receive the program that you're interested in.</h2>
                     </div>
                     {/* Form fields */}
                     <form className='flex flex-col gap-10 mt-10 mb-20  md:max-w-[500px] mx-auto'>
                         <div className='flex flex-row gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>First Name *</label>
                              <input placeholder='First Name' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>Last Name *</label>
                              <input placeholder='Last Name' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                              <input placeholder='Email' type='text' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Phone*</label>
                              <input placeholder='Phone' type='number' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>How did you hear about Zeplus? *</label>
                              <select title="How did you hear about Zeplus?" className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select an option</option>
                                   <option>Social Media</option>
                                   <option>Friend or Family</option>
                                   <option>Online Search</option>
                                   <option>Advertisement</option>
                                   <option>Other</option>
                              </select>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Hybrid *</label>
                              <select title='Hybrid' className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select an option</option>
                                   <option>In-Person</option>
                                   <option>Online</option>                                 
                              </select>
                         </div>
                         <button className='bg-black text-white py-2.5  font-[380] rounded-md mb-20 w-40'>Submit</button>
                     </form>
             </section>
         

         {/* Best Instructors */}
          <section className='md:max-w-6xl mx-auto mt-10 mb-20 bg-gradient-to-br from-[#60070B] to-[#9C0E76] md:rounded-2xl font-poppins' >
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 p-10'>
                {/* left side */}
                <div className='md:max-w-[600px]'>
                  <div className='flex flex-col gap-5 '>
                    <h2 className='md:text-[32px] text-[24px] font-[500] text-white'>Learn with highly-qualified instructors</h2>
                    <p className='text-white'>In addition to being experts in their fields, they are mentors at heart and focus on each student’s needs.</p>
                     <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20AI%20&%20Machine%20Learning%20course%20at%20Zeplus%20Academy."
        target="_blank"
        rel="noopener noreferrer"
      >
    <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-10 py-2.5 rounded'>
    <p className='font-[500] '>Let's Talk</p>
    <span>
      <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
    </span>
  </div>
</a>
                  </div>
                </div>
                {/** right side */}
                <div className='md:max-w-[600px] hidden md:block'>
                    <div className='w-full h-full'>
                        <img src={instructor} alt='instructors' className='rounded md:w-110 md:h-80 w-full  object-contain' />
                    </div>
                </div>
            </div>
          </section>

         {/* GOT QUESTIONS? */}
         <section className=' px-6 py-16 bg-[#FEF2F2]'>
            <div className='md:max-w-3xl mx-auto'>
           <div className='text-center mb-8'>
             <h2 className='text-[32px] md:text-[40px] font-[700]'>Got Questions? We're Here to Help!</h2>
             <p className='text-[15px] text-gray-600 mt-2'>Get quick answers to what parents often ask:</p>
           </div>

           <div className='space-y-4'>
             {faqs.map((item, idx) => {
               const open = openIndex === idx
               return (
                 <div key={idx} className='bg-white rounded-xl shadow-sm overflow-hidden'>
                   <button
                     onClick={() => setOpenIndex(open ? null : idx)}
                     aria-expanded={open}
                     aria-controls={`faq-${idx}`}
                     className='w-full flex items-center justify-between p-5 text-left'
                   >
                     <span className='font-[400] md:text-[15px] text-[13px] '>{item.q}</span>
                     <span className='text-[#7C1042] font-[390] text-ssm'>{open ? '−' : '+'}</span>
                   </button>

                   {open && (
                     <div
                       id={`faq-${idx}`}
                       className='px-5 pb-5 transition-opacity duration-200 ease-in-out'
                       role='region'
                       aria-labelledby={`faq-button-${idx}`}
                     >
                      {/* render HTML markup (bullets) when present */}
                      <div
                        className='text-[13px] text-gray-700 font-[390]'
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                     </div>
                   )}
                 </div>
               )
             })}
           </div>
           </div>
         </section>

      </section>
    </section>
  )
}
export default Aimachine