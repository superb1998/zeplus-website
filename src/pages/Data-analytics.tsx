import { useState } from "react";
import { useRef } from 'react'

import Tick from '../assets/img/tick.png'
import Hero1 from "../assets/img/hero1.png"
import Hero1bg from "../assets/img/hero1bg.png"
import Image30 from "../assets/img/image30.png"
import Tunde from "../assets/img/tunde.png"
import Amarachi from "../assets/img/amarachi.png"
import Adaeze from "../assets/img/adaeze.png"
import Calendar from "../assets/img/calendar.png"
import whatsapp from '../assets/courses/whatsapp.png'


const Uiux = () => {
  const [interest, setInterest] = useState("");

  const formRef = useRef<HTMLElement | null>(null)
  
      const scrollToForm = () => {
          if (formRef.current) {
              formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
      }

   const faqs = [
    { question: "What is Zeplus Academy?", answer: "Zeplus Academy is a forward-thinking tech academy dedicated to empowering African youth with practical skills in product development, design, and technology. We train innovators to create solutions that drive Africa’s progress." },
    { question: "What courses are available?", answer: "We offer hands-on programs in: UI/UX Design with AI Skills, Data Analytics, Full Stack Development, Cybersecurity, Digital Marketing.    Each course is project-based and career-focused." },
    { question: "Do I need prior experience?", answer: "No experience required! Our beginner-friendly programs start from the basics and guide you step-by-step through practical projects." },
    { question: "Who can join Zeplus Academy?", answer: "Anyone aged 16–35 with a passion for innovation, creativity, and technology can apply—whether you’re a beginner or looking to advance your tech career." },
    { question: "How long do courses last?", answer: "Programs typically run 12–16 weeks, depending on the track. combining live classes, mentorship, and portfolio-building projects." },
    { question: " Is the training online or physical?", answer: "Zeplus Academy offers online and hybrid learning options, with sessions accessible anywhere and physical classes in Magodo, Lagos." },
    { question: "What makes Zeplus Academy different from other tech schools?", answer: "We don’t just teach skills — we mentor innovators. Our programs integrate real-life projects, leadership development, and access to Africa’s growing tech ecosystem." },
    { question: "How much do courses cost?", answer: "Course fees vary by program. We provide flexible payment options, installment plans, and occasional scholarship opportunities for outstanding applicants." },
    { question: "How can I apply or enroll?", answer: "Simply visit our website’s “Apply Now” section, choose your preferred course, and complete the short application form. Our admissions team will contact you within 48 hours." },
    { question: "Can organizations partner with Zeplus Academy?", answer: "Yes! We collaborate with companies, NGOs, and institutions to train and empower youth across Africa.   📧 partners@zeplusacademy.com" },
    {question: "Who can I contact for more information?",
    answer:"You can reach our support team via email at support@zeplusacademy.com, WhatsApp, or visit our office at Magodo Phase 2 Estate, Lagos."
}

  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='overflow-x-hidden'>

      {/* Hero1 */}
<section className="bg-cover bg-center bg-no-repeat w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 px-5 sm:px-10 md:px-20 py-6" style={{ backgroundImage: `url(${Hero1bg})` }}>

    {/* right column on mobile (image first) */}
    <img src={Hero1} alt="hero img" className="w-full md:w-auto object-contain order-2 md:order-2"/>

    {/* left column */}
    <div className="order-1 md:order-1 text-left md:text-left">

      <h1 className="font-poppins font-extrabold text-[26px] sm:text-[32px] md:text-[38px] leading-[38px] sm:leading-[45px] md:leading-[55px] mb-3">
        Data Analytics with AI and Visualization Tools
      </h1>

      <h1 className="font-poppins font-extrabold text-[26px] sm:text-[32px] md:text-[38px] text-[#6C0D11] mb-3">
        279,000 NGN
      </h1>

      <div className="flex items-center pb-4 gap-5 font-bold">
        <p>Turn Data into Decisions.</p>

      </div>

      <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] font-inter mb-3">
        Learn how to collect, analyze, and visualize data to uncover insights that drive real impact — powered by the latest AI tools and data visualization platforms.
      </p>

       <div className="flex flex-row sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-start items-center">
            {/* LET'S TALK BUTTON */}
            <a
              href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Data%20Analytics%20course%20at%20Zeplus%20Academy."
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

      <div className="mt-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={Tick} alt="tick" className="w-[25px] h-[21px]" />
            <p className="font-inter text-[14px] sm:text-[16px] md:text-[18px]"><b>Duration:</b> 16 weeks</p>
          </div>

          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={Tick} alt="tick" className="w-[25px] h-[21px]" />
            <p className="font-inter text-[14px] sm:text-[16px] md:text-[18px]"><b>Hybrid Learning:</b> Online or In Person</p>
          </div>

          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={Tick} alt="tick" className="w-[25px] h-[21px]" />
            <p className="font-inter text-[14px] sm:text-[16px] md:text-[18px]"><b>4 hours/week</b></p>
          </div>

          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={Tick} alt="tick" className="w-[25px] h-[21px]" />
            <p className="font-inter text-[14px] sm:text-[16px] md:text-[18px]"><b>Flexible schedules:</b> Day or Evening classes</p>
          </div>
        </div>
      </div>
    </div>
</section>


      {/* HERO 2 */}
<section className="bg-[#FEF2F2] py-5 sm:py-8 md:py-12 my-5 px-4 sm:px-8 md:px-16">
  <h1 className="font-poppins font-extrabold text-[18px] sm:text-[24px] md:text-[34px] text-left sm:text-left md:text-center leading-[24px] sm:leading-[32px] md:leading-[46px]">
    Become a Data-Driven Professional in 16 Weeks
  </h1>
  
  <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[17px] text-left sm:text-left md:text-center mt-4 sm:mt-5 mb-2 sm:mb-3">
    Master the analytical skills that make you indispensable in today’s data-first world
  </p>
  
  <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[17px] text-left sm:text-left md:text-center mt-2 sm:mt-4 mb-2 sm:mb-3">
    From Excel to Python, Power BI to AI analytics, you’ll learn to transform raw data into powerful insights and career opportunities
  </p>
</section>



{/* Hero 3 */}
<section className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-8 sm:py-10 md:py-12 px-4 sm:px-10 md:px-20 flex flex-col md:flex-row md:items-center">
  <div className="max-w-5xl mx-auto text-white">
    <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-bold mb-4 leading-[26px] sm:leading-[32px] md:leading-[40px] font-poppins">
      AI-Powered Data Analytics
    </h1>

    <div className="mb-4 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
      <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Smarter Insights.</p>
      <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Faster Results.</p>
      <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Greater Impact.</p>
    </div>

    <p className="mb-4 font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px] max-w-full md:max-w-xl">
      Learn how Artificial Intelligence is transforming the analytics landscape and how you can use it to work faster and smarter.
    </p>

    <p className="mb-4 font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px]">
      You’ll master tools and concepts like:
    </p>

    <ul className="space-y-3 sm:space-y-4 md:space-y-4">
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Excel, SQL, and Power BI</p>
          <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px]">For data organization and visualization.</p>
        </div>
      </li>

      <li className="flex items-start">
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Python (Pandas, NumPy, Matplotlib)</p>
          <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px]">For deeper analysis</p>
        </div>
      </li>

      <li className="flex items-start">
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>ChatGPT & Gemini for Data</p>
          <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px]">Leverage AI to clean, interpret, and visualize data</p>
        </div>
      </li>

      <li className="flex items-start">
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px]'>Machine Learning Basics</p>
          <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px]">Learn how predictive models work and when to apply them.</p>
        </div>
      </li>
    </ul>

    <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px] mt-4 sm:mt-5 max-w-full md:max-w-xl">
      Analyze real datasets from industries like finance, agriculture, and tech to build your professional portfolio
    </p>
  </div>

  <img src={Image30} alt="img" className="w-full sm:w-[320px] md:w-[480px] border-6 sm:border-8 border-white h-auto md:h-[420px] rounded-[10px] mx-auto mt-6 sm:mt-8 md:mt-0"/>
</section>



{/* Hero 4 */}
<section className='bg-white px-6 sm:px-10 md:px-20 py-10'>
  <h1 className='font-poppins font-bold text-[20px] sm:text-[26px] md:text-[30px] text-center mb-4'>
  What You'll Learn
</h1>

<p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-center mb-8'>
  In this immersive 16-week program, you’ll gain the analytical power and storytelling confidence to turn raw data into business-changing insights
</p>

<div>
  <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
    <img src={Tick} alt="tick" className='w-[16px] sm:w-[20px] h-[14px] sm:h-[16px]'/>
    <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-[#6C0D11]'>
      Data Fundamentals
    </p>
  </div>

  <ul className="space-y-3 text-black pl-4 sm:pl-10">
    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Understand how data flows in modern organizations
      </p>
    </li>

    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Learn how to clean, structure, and validate data for accuracy.
      </p>
    </li>
  </ul>
</div>

<div className='mt-6'>
  <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
    <img src={Tick} alt="tick" className='w-[16px] sm:w-[20px] h-[14px] sm:h-[16px]'/>
    <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-[#6C0D11]'>
      Data Visualization
    </p>
  </div>

  <ul className="space-y-3 text-black pl-4 sm:pl-10">
    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Build stunning dashboards using Power BI and Tableau
      </p>
    </li>

    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Tell stories through data that inspire decisions.
      </p>
    </li>
  </ul>
</div>

<div className='mt-6'>
  <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
    <img src={Tick} alt="tick" className='w-[16px] sm:w-[20px] h-[14px] sm:h-[16px]'/>
    <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-[#6C0D11]'>
      AI-Enhanced Analytics
    </p>
  </div>

  <ul className="space-y-3 text-black pl-4 sm:pl-10">
    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Automate repetitive tasks using AI tools.
      </p>
    </li>

    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Discover patterns using machine learning models.
      </p>
    </li>
  </ul>
</div>

<div className='mt-6'>
  <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
    <img src={Tick} alt="tick" className='w-[16px] sm:w-[20px] h-[14px] sm:h-[16px]'/>
    <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-[#6C0D11]'>
      Career & Portfolio
    </p>
  </div>

  <ul className="space-y-3 text-black pl-4 sm:pl-10">
    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Work on 3 real-world projects with mentorship
      </p>
    </li>

    <li className="flex items-start">
      <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <p className='font-inter font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] text-left'>
        Create a professional data portfolio that attracts recruiters
      </p>
    </li>
  </ul>
</div>

<div className="flex justify-center mt-14 mb-10">
  <button className="font-inter font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] bg-[#5E0BD1] w-[240px] sm:w-[300px] md:w-[330px] py-2 sm:py-2 rounded-[6px] flex items-center justify-center hover:bg-[#4a09a6] transition-all duration-200">
    See Full Course Outline
  </button>
</div>


<div className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-10 px-4 flex flex-col rounded-xl">
  <h1 className='font-poppins text-[26px] sm:text-[32px] md:text-[38px] font-bold text-white text-center leading-[34px] sm:leading-[42px]'>
    Why Choose Zeplus Academy?
  </h1>

  <p className='font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[26px] text-white text-left mt-4 max-w-3xl mx-auto'>
    Because we’re not just teaching you data — we’re empowering you to solve Africa’s biggest problems through it.
  </p>

  <div className='mt-8 px-2 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 max-w-5xl mx-auto'>

    {/* Item 1 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Project-Based Learning</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
         Real data, real decisions.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Mentorship-Driven</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
        Learn from data scientists and industry experts.
      </p> 
    </div>

    {/* Item 3 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Career Support</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
         Access Zeplus’ job-matching and career acceleration network
      </p> 
    </div>

    {/* Item 4 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>AI-Powered Training</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
         Use tomorrow’s tools today
      </p> 
    </div>

  </div>

</div> 
</section>

{/* Hero 5 */}
<section className='bg-[#FEF2F2] py-10'>

  <div className='bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-14 px-6 md:px-20'>
    <h1 className='font-poppins text-[22px] md:text-[32px] font-bold text-white text-center mb-10 leading-tight'>
      Here’s why people just like you choose <br />Zeplus Academy for Data Analytics
    </h1>

    <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center max-w-[1200px] mx-auto'>
      
      {/* Card 1 */}
      <div className='text-black bg-white rounded-[11.4px] w-[300px] md:w-[320px] h-auto md:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
        <div className='flex space-x-3 md:space-x-4 items-center mb-3'>
          <img src={Tunde} alt="tunde" className='w-[40px] h-[40px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[12px] md:text-[14px] font-semibold'>Tunde</h1>
          </div>
        </div>
        <p className='text-left font-inter text-[12px] md:text-[13px] leading-[16px] md:leading-[18px]'>
          “Zeplus Academy transformed how I approach technology and problem-solving. The instructors were not just teachers — they were mentors who guided me every step of the way. Every project challenged me to think deeper and create smarter. It’s more than a school; it’s a launchpad for anyone serious about a tech career.”
        </p>
      </div>

      {/* Card 2 */}
      <div className='text-black bg-white rounded-[11.4px] w-[300px] md:w-[320px] h-auto md:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
        <div className='flex space-x-3 md:space-x-4 items-center mb-3'>
          <img src={Adaeze} alt="adaeze" className='w-[40px] h-[40px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[12px] md:text-[14px] font-semibold'>Adaeze</h1>
          </div>
        </div>
        <p className='text-left font-inter text-[12px] md:text-[13px] leading-[16px] md:leading-[18px]'>
          “Before joining Zeplus Academy, I doubted my ability to thrive in tech. But the structured learning path, interactive classes, and supportive community changed that. I went from a beginner to confidently working on real projects that make impact. The experience gave me the confidence to build and lead in the digital space.”
        </p>
      </div>

      {/* Card 3 */}
      <div className='text-black bg-white rounded-[11.4px] w-[300px] md:w-[320px] h-auto md:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
        <div className='flex space-x-3 md:space-x-4 items-center mb-3'>
          <img src={Amarachi} alt="Amarachi" className='w-[40px] h-[40px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[12px] md:text-[14px] font-semibold'>Amarachi</h1>
          </div>
        </div>
        <p className='text-left font-inter text-[12px] md:text-[13px] leading-[16px] md:leading-[18px]'>
          “What stood out to me most about Zeplus Academy was how practical everything felt. We didn’t just learn theories — we applied them immediately. From hands-on cybersecurity labs to teamwork simulations, it felt like real industry work. I left feeling ready for any challenge.”
        </p>
      </div>

    </div>
</div>
</section>


{/* Hero 6 */}
<section className='flex flex-col items-center py-10 px-4 sm:px-6 md:px-10 lg:px-20'>

  {/* Course Schedule */}
  <h1 className='font-poppins font-bold text-[24px] sm:text-[26px] md:text-[32px]'>Next Session</h1>
  <p className='font-inter font-normal text-[14px] sm:text-[15px] md:text-[18px] leading-[22px] mt-5 text-center max-w-[900px]'>
    Join any of our upcoming sessions and start your journey into the world of digital design
  </p>

  <div className='mt-10 flex flex-col md:flex-row gap-6 md:gap-10 flex-wrap justify-center'>
    {/* November */}
    <div className='bg-[#F6F7FD] border-t-[8px] md:border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-6 py-6 md:px-7 md:py-8 w-full sm:w-[280px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[18px] md:text-[22px] mb-5 md:mb-6'>November 2025</h1>
      <hr className='w-full border-gray-300 mb-5 md:mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[14px] md:text-[16px]'>
          <img src={Calendar} alt="calendar" className='w-[22px] md:w-[28px] h-[22px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[14px] md:text-[16px] mt-2'>
          Saturday, November 8, 2025
        </p>
      </div>
    </div>

    {/* December */}
    <div className='bg-[#F6F7FD] border-t-[8px] md:border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-6 py-6 md:px-7 md:py-8 w-full sm:w-[280px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[18px] md:text-[22px] mb-5 md:mb-6'>December 2025</h1>
      <hr className='w-full border-gray-300 mb-5 md:mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[14px] md:text-[16px]'>
          <img src={Calendar} alt="calendar" className='w-[22px] md:w-[28px] h-[22px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[14px] md:text-[16px] mt-2'>
          Saturday, December 6, 2025
        </p>
      </div>
    </div>

    {/* January */}
    <div className='bg-[#F6F7FD] border-t-[8px] md:border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-6 py-6 md:px-7 md:py-8 w-full sm:w-[280px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[18px] md:text-[22px] mb-5 md:mb-6'>January 2026</h1>
      <hr className='w-full border-gray-300 mb-5 md:mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[14px] md:text-[16px]'>
          <img src={Calendar} alt="calendar" className='w-[22px] md:w-[28px] h-[22px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[14px] md:text-[16px] mt-2'>
          Saturday, January 10, 2026
        </p>
      </div>
    </div>
  </div>

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

  {/* Learn Anywhere */}
 <div className='bg-gradient-to-r from-[#60070B] to-[#9C0E76] py-8 md:py-12 px-4 md:px-12 lg:px-20 w-full rounded-lg mt-8'>
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



  {/* Ready to Redesign */}
  <div className="w-full bg-[#F6F7FD] rounded-xl px-4 sm:px-6 md:px-12 py-10 sm:py-12 flex flex-col items-center text-center gap-5 mt-10 mx-auto max-w-[1133px]">
    <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-[700] leading-[38px] sm:leading-[44px] md:leading-[46px] font-poppins">
      Ready to Redesign the Future?
    </h2>

    <p className="text-black max-w-2xl text-[14px] sm:text-[16px] md:text-[18px] font-inter font-normal leading-[22px] sm:leading-[24px] md:leading-[26px]">
      Whether you’re a creative beginner or a professional looking to upgrade your skills, this course will unlock your potential to design for impact
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 text-[12px] sm:text-[14px] md:text-[16px]">
      <div className="flex items-center gap-2">
        <img src={Tick} alt="tick" className="w-[20px] sm:w-[23px] h-[16px] sm:h-[19px]" />
        <span>Join the movement</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={Tick} alt="tick" className="w-[20px] sm:w-[23px] h-[16px] sm:h-[19px]" />
        <span>Turn data into change.</span>
      </div>
    </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center items-center">
     <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Data%20Analytics%20course%20at%20Zeplus%20Academy."
        target="_blank"
        rel="noopener noreferrer"
      >
    <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-10 py-3.5 rounded'>
    <p className='font-[500] '>Talk to an Addvisor</p>
    <span>
      <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
    </span>
  </div>
</a>
   
    <button className="w-full sm:w-[345px] h-[50px] border border-[#6C27FF] text-black rounded-md font-semibold text-[16px] md:text-[18px]" onClick={scrollToForm}>
      Download Brochure
    </button>
  </div>
  </div>

  {/* FAQ Section */}
  <section className="w-full flex flex-col items-center text-center px-4 mt-16">
    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[700] font-poppins">
      Got Questions? We're Here to Help!
    </h2>
    <p className="text-[#555] text-[15px] sm:text-[16px] mt-2">
      Get quick answers to what parents often ask
    </p>

    {/* Accordion */}
    <div className="w-full max-w-3xl mx-auto mt-10 flex flex-col gap-4">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="border border-[#6C0D11] rounded-lg px-4 py-3 cursor-pointer transition"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <p className="font-medium text-[15px] sm:text-[16px]">
              {item.question}
            </p>
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {openIndex === index && (
            <div className="mt-2 text-sm text-gray-600 leading-[1.6]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>

    <p className="text-[22px] sm:text-[26px] lg:text-[30px] font-[700] font-poppins mt-5">
      Still Have Questions?
    </p>
    <p className="text-[#555] text-[15px] sm:text-[16px]">
      We’re happy to help!
    </p>
  </section>

</section>





    


    </div>
  )
}

export default Uiux