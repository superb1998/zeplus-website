import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import cybersecurityheropic from '../assets/courses/cybersecurity.jpg'
import aiai from '../assets/courses/aiai.png'
import blackdot from '../assets/courses/blackdot.svg'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.png'
import calendar from '../assets/courses/date.svg'
import Tick from '../assets/img/tick.png'
import comptia from '../assets/courses/comptia.svg'
import  { useState, useRef } from 'react'

const Cybersecurity = () => {
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
                            <h1 className='md:text-[50px] text-4xl font-[600]'>Cybersecurity & Ethical Hacking Course with AI Tools</h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                 <h2 className='md:text-[40px] text-3xl font-[650] text-[#6c0c11]'>279,000 NGN </h2>
                                 <div className='flex flex-row gap-4'>
                                    <p className='font-[380] text-[14px] md:text-[16px]'>Protect the Future</p>
                                     <p className='font-[380] text-[14px] md:text-[16px]'>Defend the Digital World.</p>
                                 </div>
                                  <div className='md:max-w-[600px] '>
                                    <p className='font-[390]'>Gain the skills to secure systems, prevent cyber threats, and lead Africa’s next 
                                        generation of ethical hackers — powered by AI intelligence</p>
                                  </div>
                                  <div className="flex flex-row sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-start items-center">
            {/* LET'S TALK BUTTON */}
            <a
              href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Cybersecurity%20course%20at%20Zeplus%20Academy."
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
                    <div className='md:max-w-[600px] '>
                        <img src={cybersecurityheropic} alt="Digital Growth" className='w-full md:h-115 h-80 object-cover rounded' />
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
                <h2 className='md:text-[40px] font-[600] text-[28px] text-center'>Master Cyber Defense in 16 Weeks</h2>
                <div className='flex flex-col gap-3 items-center '>
                    <p className='md:text-[16px] text-[15px] text-center'>Learn how to identify vulnerabilities, protect networks, and detect attacks before they happen.</p>
                    <p className='md:text-[16px] text-[15px] text-center'>Our AI-powered cybersecurity course combines hands-on labs with expert mentorship to prepare you for the real world.</p>
                  
                </div>
             </div>
             </div>
          </div>

          {/* Career Opportunities */}
          <section className='mt-10 bg-gradient-to-br from-[#60070B] to-[#9C0E76] text-white font-poppins'>
                <div className='md:max-w-7xl mx-auto md:px-0 px-6 py-15'>
                    <div className='flex md:flex-row flex-col gap-10 items-center'>
                        {/* Left Side */}
                        <div className='md:max-w-[650px]'>
                            <div className='flex flex-col gap-5'>
                                <h2 className='md:text-[40px] text-2xl font-[550] '>AI-Powered Cyber Defense</h2>
                                <p className='md:text-[16px] text-[15px] font-[380]'>Today’s hackers use AI — and so will you.</p>
                                <p className='font-[390]'>Learn how AI strengthens defense systems, predicts threats, and enhances your security analysis.</p>
                                <div className='flex flex-col gap-4 mt-3 ml-10'>
                                    {/* 1st */}
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Network Security & Firewalls</p>
                                       
                                   </div>
                                   {/* 2nd */}
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Penetration Testing & Ethical Hacking</p>
                                       
                                   </div>
                                   {/* 3rd */}
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>AI Threat Detection Systems</p>
                                       
                                   </div>
                                      {/* 4th */}
                                      <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Incident Response & Risk Management</p>
                                       
                                   </div>
                                   {/* 5th */}
                                   <div className='flex flex-col gap-2.5'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[14px]'>Python</p>
                                       
                                   </div>
                                   <p className='md:text-[16px] text-[14px] font-[380] ml-8'>Wireshark, Kali Linux, Metasploit, ChatGPT for Threat Analysis</p>
                                  </div>
                                  
                                   
                                </div>
                                <div className='flex flex-col gap-3'>
                                   
                                        <p className='font-[390] md:text-[16px] text-[14px]'>Work on live simulations and real-world hacking labs to test your skills.</p>
                                  </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[600px]'>
                            <img src={aiai} alt='image' className='w-full md:h-105 h-70 object-cover' />
                        </div>
                    </div>
                </div>
          </section>

          {/* What You'll Learn */}
          <section className='md:mt-20 mt-15 font-poppins bg-white'>
                <div className='md:max-w-7xl mx-auto md:px-0 px-6 py-0 mb-20'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center mb-12'>
                        <h2 className='md:text-[40px] text-[25px] font-[600]'>What You'll Learn</h2>
                        <p className='font-[395]'>In this immersive 16-week program, you’ll gain the technical mastery and strategic confidence to protect  digital  
                                systems, defend networks, and outsmart cyber threats in a connected world.</p>
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
                                <p className='font-[500] text-[#6C0D11]'>Foundations of Cybersecurity</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Learn about digital threats and how they evolve</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Understand data protection and encryption principles.</p>
                                </div>
                               
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>Ethical Hacking</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Conduct safe penetration tests.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Simulate real-world attacks ethically.</p>
                                </div>
                                
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>AI & Automation</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Use AI tools for automated vulnerability scans.</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Predict and prevent future attacks using ML models</p>
                                </div>
                                
                            </div>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]'>Career & Portfolio</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-4 h-4 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Build a personal cybersecurity lab setup</p>
                                </div>
                                <div className='flex flex-row gap-2.5'>
                                    <span>
                                        <img src={blackdot} alt='dot' className='w-3 h-3 md:w-4 md:h-4 mt-0.5' />
                                    </span>
                                    <p className='font-[380] md:text-[15px] text-[13px]'>Prepare for global certifications like CompTIA Security+ or CEH.</p>
                                </div>
                                
                            </div>
                        </div>
                     </div>
           
                </div>
          </section>

          {/* Why choose Zeplus */}
          <section className='md:max-w-7xl mx-auto md:px-0 px-6 pt-10 md:pt-20 mb-30 font-poppins'>
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#7c1042] py-3 px-14 rounded font-poppins'>Download Brochure</h2>
                    </div>

                        {/* why choose */}
                        {/* NEW AI section */}
                <div className=' font-poppins bg-[#7c1042] md:rounded-2xl mt-20 text-white'>
                 <div className='flex flex-col md:flex-row justify-between gap-10 py-10 px-10'>
                        {/* Left Side */}
                        
                           <div className='md:max-w-[650px]'>
                             <div className='flex flex-col gap-10'>
                                 <div className='md:max-w-[600px]'>
                                    <h2 className='font-[500] text-[35px]'>Advance Your Career with an Internationally Recognized Certification</h2>
                                 </div>
                                 <p className='font-[390] text-ssm'>At the end of the training program, thanks to our structured program and practice exams, you will have 
                                    all the resources necessary to obtain your CompTIA Security+ certification.</p>
                            </div>
                          

                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[500px] md:mr-20'>
                           <div className='w-full h-full'>
                               <img src={comptia} alt='image' className='w-full h-full object-cover' />
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
                <h2 className='md:text-[45px] text-[30px] font-[650]'>Upcoming Sessions</h2>
                

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
                        <h2 className='text-white bg-[#7c1042] py-3 px-10 rounded font-poppins'>Enroll Now</h2>
                    </div>
               </div>
     </section>


       {/* Learn Anywhere */}
 <div className='bg-gradient-to-r from-[#60070B] to-[#9C0E76] py-8 md:py-12 px-4 md:px-12 lg:px-20 w-full  mt-8'>
  <h1 className='font-poppins text-[20px] sm:text-[24px] md:text-[35px] font-bold text-white text-center mb-4 md:mb-5 leading-tight'>
    Learn Anywhere
  </h1>
  <p className='font-inter font-light text-[14px] sm:text-[16px] md:text-[18px] text-white mb-5 md:mb-6 text-center'>
    Choose how you want to learn
  </p>

  <span className='text-white flex flex-col md:flex-row md:gap-4 gap-1 items-center justify-center mb-3 md:mb-4 font-inter font-light text-[14px] sm:text-[16px] md:text-[18px] text-center'>
    <img src={Tick} alt="tick" className='w-[20px] sm:w-[23px] h-[16px] sm:h-[19px]'/>
    <p><span className="font-semibold">In-Person:</span> Learn at any of our Lagos centers.</p>
  </span>

  <span className='text-white flex flex-col md:flex-row md:gap-4 gap-1 items-center justify-center font-inter font-light text-[14px] sm:text-[16px] md:text-[18px] text-center'>
    <img src={Tick} alt="tick" className='w-[20px] sm:w-[23px] h-[16px] sm:h-[19px]'/>
    <p><span className="font-semibold">Online:</span> Join live classes from anywhere.</p>
  </span>
</div>


       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-[#F6F7FD] rounded-lg'>
            <div className='md:max-w-4xl mx-auto md:px-0 py-15 px-6 flex flex-col gap-5 items-center'>
                <h2 className='font-[600] md:text-[45px] text-[25px]'>Ready to Defend the Future?</h2>
                <p className='font-[400] text-[14px] md:text-[16px]'>Become a certified cybersecurity professional with AI 
                    skills — and help build a safer digital Africa.</p>
                    <div className='flex flex-row gap-5'>
                        <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#7c1042] py-3 px-10 rounded font-poppins'>Apply Now</h2>
                    </div>
                         <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Cybersecurity%20course%20at%20Zeplus%20Academy."
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
         
            
             <section ref={formRef} className='md:max-w-6xl mx-auto font-poppins my-20 bg-[]'>
             <div className='bg-[#7c1042] md:rounded-2xl text-white'>
                     <div className='flex flex-col items-center justify-center py-10 md:px-0 px-5 '>
                             <div className='md:max-w-[700px] text-center px-5 mb-10'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550]'>Want to join the Cybersecurity training?</h2>
                             </div>
                             <div className='flex flex-col md:flex-row md:gap-40 gap-5 mt-'>
                                    <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p>Receive program details</p>
                                    </div>
                                    {/* 2 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p>Discover our methodology</p>
                                    </div>
                                    {/* 3 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-4 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p>Progress in your learning project</p>
                                    </div>
                             </div>
                     </div>
             </div>
             {/* form */}
             <div className='md:max-w-[550px] mx-auto mt-20 font-poppins ' id="apply-form">
                     <div className='md:max-w-[450px] mx-auto text-center'>
                            <h2 className='text-2xl font-[500]'>Fill out the form to receive the full program</h2>
                     </div>
                     {/* Form fields */}
                     <form className='flex flex-col gap-10 mt-10 mb-20 md:px-0 px-8'>
                         <div className='flex flex-row gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>First Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>Last Name *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                              <input type='text' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Phone*</label>
                              <input type='num' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
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

                         <button className='bg-black text-white py-2.5  font-[380] rounded-md mb-20'>Submit</button>
                     </form>
             </div>
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
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Cybersecurity%20course%20at%20Zeplus%20Academy."
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
export default Cybersecurity