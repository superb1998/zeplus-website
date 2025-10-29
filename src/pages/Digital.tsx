import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import heropic from '../assets/courses/heropic.png'
import aiassist from '../assets/courses/aiassist.png'
import blackdot from '../assets/courses/blackdot.svg'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.png'
import  { useState, useRef } from 'react'

const Digital = () => {
    const [interest, setInterest] = useState("");
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
                            <h1 className='md:text-[50px] text-4xl font-[600]'>Master the Art of Digital Growth in the Age of AI</h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                 <h2 className='md:text-[40px] text-3xl font-[650] text-[#6c0c11]'>150,000 NGN </h2>
                                  <p className='font-[500]'>Turn clicks into customers.</p>
                                  <p className='font-[500]'>Build brands that matter</p>
                                  <p className='font-[500]'>Lead Africa’s digital future.</p>
                                  <div className="flex flex-row sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-start items-center">
            {/* LET'S TALK BUTTON */}
            <a
              href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[220px] h-[45px] flex flex-row items-center justify-center gap-2.5 cursor-pointer bg-[#27D366] rounded font-medium text-[15px]"
            >
              <p className="whitespace-nowrap text-center">Let's Talk</p>
              <img src={whatsapp} alt="icon" className="w-4 h-4" />
            </a>

            {/* DOWNLOAD BROCHURE BUTTON */}
            <a
  href="#apply-form"
  onClick={() => setInterest("Brochure Download")}
  className="w-full sm:w-[220px] h-[45px] flex items-center justify-center border-2 border-[#6C27FF] bg-white text-[#6C27FF] rounded font-medium text-[15px] hover:bg-[#6C27FF] hover:text-white transition-all duration-200 whitespace-nowrap"
>
  Download Brochure
</a>

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
                    <div className='md:max-w-[600px]'>
                        <img src={heropic} alt="Digital Growth" className='w-full md:h-115 h-80 object-cover rounded' />
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
                <h2 className='md:text-[40px] font-[600] text-[25px]'>Course Overview</h2>
                <div className='flex flex-col gap-3'>
                    <p className='md:text-[16px] text-[14px]'>Welcome to the <span className='font-[600]'> Zeplus Academy Digital Marketing with
                         AI Skills Course,</span> where creativity meets data, and strategy meets technology.</p>
                    <p className='md:text-[16px] text-[14px] '>in just<span className='font-[600]'> 3 transformative months,</span> you’ll learn to 
                    design and execute digital marketing campaigns powered by<span className='font-[600]'> AI, analytics, and
                         automation —</span> the same tools shaping the world’s most successful brands.</p>
                    <p className='md:text-[16px] text-[14px]'>Whether you dream of becoming a<span className='font-[600]'> digital strategist,
                         growth marketer, or entrepreneur,</span> this course 
                        equips you with hands-on skills to<span className='font-[600]'> drive engagement, boost sales, and
                             scale brands</span> in Africa’s fast-evolving digital economy.</p>
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
                            <div className='flex flex-col gap-4'>
                                <h2 className='md:text-[40px] text-2xl font-[550]'>Career Pathways</h2>
                                <p className='font-[390]'>This course opens multiple high-growth career opportunities across industries and entrepreneurship:</p>
                                <div className='flex flex-col gap-4 mt-3 ml-10'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>Digital Marketing Strategist</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>Social Media Manager</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>Growth Hacker / Marketing Analyst</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>SEO/SEM Specialist</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>Brand Communication Consultant</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400]'>Freelance Digital Marketer / Entrepreneur</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[600px]'>
                            <img src={aiassist} alt='image' className='w-full h-105 object-cover' />
                        </div>
                    </div>
                </div>
          </section>

          {/* What You'll Learn */}
          <section className='md:mt-20 mt-15 font-poppins bg-white'>
                <div className='md:max-w-7xl mx-auto md:px-0 px-6 py-0 mb-20'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center mb-12'>
                        <h2 className='md:text-[40px] text-[25px] font-[550]'>What You'll Learn</h2>
                        <p className='font-[395]'>Our practical, result-driven curriculum blends marketing psychology, storytelling, and 
                          technology to give you a complete growth toolkit:</p>
                      </div>

                      {/* Learning Modules */}
                     <div className='flex flex-col gap-8'>
                        {/* Module 1 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 1: Foundations of Digital Marketing</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-4'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-3 h-3  mt-1.5' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Understand how marketing works in the digital world</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-3 h-3  mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Learn SEO, SEM, content marketing, and brand positioning.</p>
                            </div>
                            <div className='flex flex-row gap-4 '>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-3 h-3  mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Master the tools that power online growth — from Google Analytics to Meta Ads.</p>
                            </div>
                        </div>
                        </div>
                        {/* Module 2 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 2: Social Media Mastery</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1 object-contain' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Build engaging content that connects with audiences on Instagram, TikTok, LinkedIn, and X.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Learn social media strategy, ad targeting, and influencer collaboration.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Analyze performance using AI-powered insights.</p>
                            </div>
                        </div>
                        </div>
                        {/* Module 3 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 3: Email & Content Marketing Automation</h3>
                        <div className='flex flex-col gap-4 md:ml-10 ml-5'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Craft high-converting email campaigns using AI tools like Mailchimp and HubSpot.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Build content funnels that turn leads into loyal customers.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Automate workflows for consistency and performance.</p>
                            </div>
                        </div>
                        </div>
                        {/* Module 4 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 4: Performance Marketing & Analytics</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Learn paid ads strategy on Google, Meta, and TikTok.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Use data to optimize campaigns for better ROI.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Translate numbers into actionable growth insights.</p>
                            </div>
                        </div>
                        </div>
                        {/* Module 5 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 5: AI in Digital Marketing</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Discover how ChatGPT, Jasper, and Midjourney can supercharge your content.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Use AI for predictive analytics, ad copy, and marketing automation.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Stay ahead of the competition with intelligent campaign design.</p>
                            </div>
                        </div>
                        </div>
                        {/* Module 6 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 6: Capstone Project</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Create a full digital marketing campaign for a real brand.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Present and pitch your strategy to industry mentors.</p>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <span>
                                    <img src={blackdot} alt='dot' className='w-2.5 h-2.5 md:w-4 md:h-4 mt-1' />
                                </span>
                                <p className='font-[395] md:text-[15px] text-[13px]'>Graduate with a <span className='font-[600]'>professional portfolio</span> ready to show employers and clients</p>
                            </div>
                        </div>
                        </div>
                     </div>
           
                </div>
          </section>

          {/* Why choose Zeplus */}
          <section className='md:max-w-6xl mx-auto md:px-0 px-6 pt-10 md:pt-25 mb-10'>
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#5e0bd1] py-3 px-14 rounded font-poppins'>Download Brochure</h2>
                    </div>

                        {/* why choose */}
                        <div className='bg-gradient-to-br from-[#60070B] to-[#9C0E76] text-white font-poppins mt-10  rounded'>
                            <div className='md:py-10 py-10 md:px-0 px-6'>
                              <div className='flex flex-col gap-4 items-center justify-center text-center md:max-w-4xl mx-auto'>
                                      <h2 className='md:text-[40px] text-[22px] font-[700]'>Why Choose Zeplus Academy?</h2>
                                      <p className='font-[390] md:text-ssm text-sm '>Because at Zeplus, we don’t just teach skills — we build leaders.</p>
                                     <div className='md:max-w-xl'>
                                         <p className='font-[400] md:text-ssm text-sm'>Our mission is to empower African youth with digital excellence and 
                                            AI innovation to shape the continent’s digital economy.</p>
                                     </div>

                               
                              </div>
                              <div className='md:max-w-4xl mx-auto mnd:px-0 px-5 mt-6 items-center justify-center flex'>
                                     {/* lists */}
                                    <div className='flex flex-col md:gap-3 gap-4 mt-2 '>
                                            {/* 1st */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-ssm text-sm'>AI-Powered Learning</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:ml-14 ml-5'>Stay relevant with AI tools integrated into every lesson</p>
                                            </div>
                                            {/* 2nd */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-ssm text-sm'>Hands-on Projects</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:ml-18 ml-5'>Work on real brand campaigns and data-driven growth tasks.</p>
                                            </div>
                                            {/* 3rd */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-ssm text-sm'>Expert Instructors</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:ml-20 ml-5'>Learn from professionals transforming Africa’s digital space.</p>
                                            </div>
                                            {/* 4th */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-ssm text-sm'>Career Mentorship</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:ml-18 ml-5'>Get 1:1 coaching and portfolio reviews.</p>
                                            </div>
                                            {/* 5th */}
                                             <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1 '>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-ssm text-sm'>Community of Innovators</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:mr-0 ml-5'>Join a thriving ecosystem of creative minds and tech leaders.</p>
                                            </div>
                                    </div>
                              </div>
                             </div>
                        </div>
          </section>

           {/* ALumni */}

          <section className='bg-[#F7E3E3] font-poppins w-full mb-10 py-10'>
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


     <section className='md:max-w-6xl mx-auto mt-10 bg-gradient-to-br from-[#60070B] to-[#9C0E76] md:rounded-2xl font-poppins' >
            <div className='py-10  md:px-0 px-6 flex flex-col gap-6 items-center justify-center text-white'>
                   <h2 className='font-[550] text-[35px]'>Who Can Enroll?</h2>
                   <div className='flex flex-col md:gap-2.5 gap-4'>
                    {/* 1st */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[390] text-[15px] md:text-[16px]'>Aspiring marketers and entrepreneurs.</p>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[390] text-[15px] md:text-[16px]'>Graduates or professionals looking to upskill.</p>
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[390] text-[15px] md:text-[16px]'>Creators who want to scale their online presence.</p>
                    </div>
                    {/* 4th */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                        </span>
                        <p className='font-[390] text-[15px] md:text-[16px]'>Anyone ready to build a profitable career in the digital space.</p>
                    </div>
                   </div>
            </div>
     </section>


      {/* Program highlights details */}
      <section className='md:max-w-7xl mx-auto bg-[#FEF2F2] mb-10 pt-10 pb-15 mt-15 font-poppins md:rounded-lg'>
        <div className='bg-[#D7D9E5] '>
            <div className='py-10 md:max-w-4xl flex flex-col gap-6 items-center justify-center md:px-0 px-6 mx-auto'>
                     <h2 className='md:text-[30px] text-[25px] font-[550]'>Program Details</h2>

                     {/* lists */}
                     <div className='flex flex-col gap-2.5'>
                        {/* 1st */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[15px] md:text-[16px]'><span className='font-[600]'>Durations:</span> 3 months</p>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[15px] md:text-[16px]'><span className='font-[600]'>Schedule:</span>Weekends — Sunday (10 AM – 1 PM or 2 PM – 6 PM)</p>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[15px] md:text-[16px]'><span className='font-[600]'>Location:</span> Hybrid (Online + Zeplus Studio, Magodo Phase 2, Lagos)</p>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[15px] md:text-[16px]'><span className='font-[600]'>Next Session:</span> November 28</p>
                        </div>
                     </div>
            </div>
        </div>

        {/* Your Journey start here */}
        <div className='md:max-w-7xl mx-auto pt-30 '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <div>
                    <h2 className='md:text-[35px] text-[25px] font-[550] text-center'>Your Journey at Zeplus Academy</h2>
                </div>
                {/* steps */}
                <div className='flex flex-col gap-3 md:mt-10 mt-6 md:max-w-4xl mx-auto md:px-0 px-8'>
                    {/* 1st */}
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex flex-col gap-2 border-b pb-4 md:px-0 px-6 items-center cursor-pointer'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2>Apply Now</h2>
                        <p className='text-center text-[15px] md:text-[16px]'>Submit your interest and reserve your seat.</p>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-col gap-2 border-b pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2>Join Orientation</h2>
                        <p className='text-center text-[15px] md:text-[16px]'>Get introduced to our vibrant learning community.</p>
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-col gap-2 border-b pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className=''>Learn by Doing</h2>
                        <p className='text-center text-[15px] md:text-[16px]'>Experience immersive, project-based sessions.</p>
                    </div>
                    {/* 4th */}
                    <div className='flex flex-col gap-2 border-b pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2>Build Your Brand</h2>
                        <p className='text-center text-[15px] md:text-[16px]'>Create campaigns that get results.</p>
                    </div>
                    {/* 5th */}
                    <div className='flex flex-col gap-2 border-b pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2>Graduate & Launch</h2>
                        <p className='text-center text-[15px] md:text-[16px]'>Access job placement and freelancing opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/*  Bonus and Benefits section */}
         <section className='md:max-w-6xl mx-auto py-10 font-poppins'>
            <div className='flex items-center justify-center mb-6'>
                <h2 className='text-[25px] md:text-[40px] font-[550]'>Bonuses & Benefits</h2>
            </div>
            {/* bonus lists */}
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:px-0 px-10 pt-5'>
                {/* 1st */}
                <div className='border-2 border-[#5e0bd1] text-center p-6 rounded-2xl'>
                    <h2 className='text-[15px]'>Lifetime access to the Zeplus Alumni Network.</h2>
                </div>
                {/* 2nd */}
                <div className='border-2 border-[#5e0bd1] text-center p-6 rounded-2xl'>
                    <h2 className='text-[15px]'>Opportunity to work with Zeplus partner brands</h2>
                </div>
                {/* 3rd */}
                <div className='border-2 border-[#5e0bd1] text-center p-6 rounded-2xl'>
                    <h2 className='text-[15px]'>Portfolio showcase at Zeplus Demo Day.</h2>
                </div>
                {/* 4th */}
                <div className='border-2 border-[#5e0bd1] text-center p-6 rounded-2xl'>
                    <h2 className='text-[15px]'>Access to AI tools and templates.</h2>
                </div>
            </div>

            <div className='bg-[#F6F7FD] rounded mt-15 md:px-0 px-6'>
                <div className='md:max-w-4xl py-20 mx-auto items-center flex justify-center'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[35px] font-[600] text-center'>Are you ready to own the digital space?</h2>
                        <p className='text-center'>Join Zeplus Academy and become one of Africa’s next digital growth leaders.</p>
                            <div className='flex flex-row md:gap-10 gap-4 justify-center mt-3'>
                            <div>
                                <h2 onClick={scrollToForm} role="button" tabIndex={0} className='bg-[#5e0bd1] py-3 md:px-16 px-8 text-[15px] text-white rounded cursor-pointer'>Apply Now</h2>
                            </div>
                               <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
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
                     <form className='flex flex-col gap-5 mt-10 mb-20  md:max-w-[500px] mx-auto'>
                         <div className='flex flex-row gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>First Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>Last Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Phone*</label>
                              <input type='number' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>What Course would you like to learn? *</label>
                              <select className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select a course</option>
                                   <option>AI</option>
                                   <option>Cybersecurity</option>
                                   <option>Digital Marketing</option>
                                   <option>Full Stack Development</option>
                                   <option>Data Analytics</option>
                                   <option>UI/UX Design</option>
                              </select>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>How did you hear about Zeplus? *</label>
                              <select className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
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
                              <select className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Select an option</option>
                                   <option>In-Person</option>
                                   <option>Online</option>                                 
                              </select>
                         </div>
                         <input type="hidden" name="interest" value={interest} />

                         <button className='bg-[#5E0BD1] text-white py-2.5  font-[380] rounded-md mb-20'>Submit</button>
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
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
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
export default Digital