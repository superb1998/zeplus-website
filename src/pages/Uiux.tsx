import { useState } from "react";
import { useRef } from 'react'

import Tick from '../assets/img/tick.png'
import Hero1 from "../assets/img/hero1.png"
import Hero1bg from "../assets/img/hero1bg.png"
import Hero3 from "../assets/img/hero3.png"
import Tunde from "../assets/img/tunde.png"
import Amarachi from "../assets/img/amarachi.png"
import Adaeze from "../assets/img/adaeze.png"
import Calendar from "../assets/img/calendar.png"
import Vector1 from "../assets/img/Vector1.png"
import Vector2 from "../assets/img/Vector2.png"
import Vector3 from "../assets/img/Vector3.png"
import Vector4 from "../assets/img/Vector4.png"
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
        UI/UX Design With <br />AI Skills
      </h1>

      <h1 className="font-poppins font-extrabold text-[26px] sm:text-[32px] md:text-[38px] text-[#6C0D11] mb-3">
        300,000 NGN
      </h1>

      <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] font-inter mb-3">
        Transform your creativity into impact.
      </p>

      <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] font-inter mb-3">
        Master the art of creating intuitive, user-centered designs that <br />shape the digital
        experiences of tomorrow — powered by the intelligence of AI.
      </p>

      <div className="flex flex-row sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-start items-center">
            {/* LET'S TALK BUTTON */}
            <a
              href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20UI/UX%20course%20at%20Zeplus%20Academy."
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
<section className="bg-[#FEF2F2] py-5 my-5 px-4 sm:px-8 md:px-16">
  <h1 className="font-poppins font-extrabold text-[24px] sm:text-[32px] md:text-[38px] text-left md:text-center leading-[32px] sm:leading-[42px] md:leading-[50px] whitespace-nowrap">
    Become a certified UI/UX Designer <br />in just 16 Weeks
  </h1>
  <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] text-left md:text-center mt-5 mb-3">
    Launch your design career with a skillset that blends creativity, innovation, and technology.
  </p>
  <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] text-left md:text-center">
    Learn to design intuitive digital products, master industry tools, and gain the confidence to
    <br className="hidden sm:block" />stand out in the global design market.
  </p>
</section>


{/* Hero 3 */}
<section className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-10 sm:py-12 px-6 flex flex-col md:flex-row md:items-center">
  <div className="max-w-5xl mx-auto text-white">
    <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold mb-4 leading-[34px] sm:leading-[40px] md:leading-[44px] font-poppins">
      New! AI - Powered UI/<br />UX Design Course
    </h1>

    <div className="mb-4 flex flex-wrap gap-2 sm:gap-4">
      <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Design smarter.</p>
      <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Create faster.</p>
      <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Think bolder.</p>
    </div>

    <p className="mb-6 font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
      Experience the future of design with cutting-edge AI tools <br />that amplify your creativity and speed up your workflow.
    </p>

    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="inline-block w-2.5 h-2.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Figma AI</p>
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">Auto-generate layouts and ideas faster.</p>
        </div>
      </li>

      <li className="flex items-start">
        <span className="inline-block w-2.5 h-2.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Framer AI</p>
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">Prototype and publish smarter, with precision.</p>
        </div>
      </li>

      <li className="flex items-start">
        <span className="inline-block w-2.5 h-2.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
        <div>
          <p className='font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px]'>Builder.io</p>
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">Build and design responsive sites with ease.</p>
        </div>
      </li>
    </ul>

    <p className="mb-4 font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] mt-6">Build projects that impress, powered by real-world innovation.</p>
    <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">Get ready to lead the next generation of creative problem solvers in Africa.</p>
  </div>

  <img src={Hero3} alt="img" className="w-full sm:w-[380px] md:w-[480px] h-auto md:h-[420px] rounded-[10px] mx-auto mt-8 md:mt-0"/>
</section>

{/* Hero 4 */}
<section className='bg-white px-6 sm:px-10 md:px-20 py-10'>
  <h1 className='font-poppins font-bold text-[24px] sm:text-[30px] md:text-[34px] text-center mb-4'>
    What You'll Learn
  </h1>

  <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-center mb-8'>
    In this immerse 16-weeks journey, you'll go from design beginner to confident creator, capable of
    <br />turning users needs into delightful experiences
  </p>

  <div>
    <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
      <img src={Tick} alt="tick"  className='w-[18px] sm:w-[22px] h-[16px] sm:h-[18px]'/>
      <p className='font-inter font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#6C0D11]'>
        User Experience (UX)
      </p>
    </div>

    <ul className="space-y-3 text-black pl-4 sm:pl-10">
      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Understand what makes an experience intuitive and engaging.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Master the end-to-end UX process: research, ideation, wireframing, testing, and iteration.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Develop empathy by uncovering user motivations, frustrations, and goals.
        </p>
      </li>
    </ul>
  </div>

  <div className='mt-6'>
    <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
      <img src={Tick} alt="tick"  className='w-[18px] sm:w-[22px] h-[16px] sm:h-[18px]'/>
      <p className='font-inter font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#6C0D11]'>
        User Interface (UI)
      </p>
    </div>

    <ul className="space-y-3 text-black pl-4 sm:pl-10">
      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Learn visual hierarchy, color theory, and typography for digital design.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Create polished interfaces that communicate clarity and purpose.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Master Figma and Framer for real-world design execution.
        </p>
      </li>
    </ul>
</div>

  <div className='mt-6'>
    <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
      <img src={Tick} alt="tick"  className='w-[18px] sm:w-[22px] h-[16px] sm:h-[18px]'/>
      <p className='font-inter font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#6C0D11]'>
        AI for Designers
      </p>
    </div>

    <ul className="space-y-3 text-black pl-4 sm:pl-10">
      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Use AI to brainstorm, create wireframes, and test faster.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Discover how intelligent tools enhance—not replace—your creative vision.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Build future-ready design workflows with automation and precision.
        </p>
      </li>
    </ul>
</div>

  <div className='mt-6'>
    <div className='flex items-center space-x-3 sm:space-x-5 mb-4'>
      <img src={Tick} alt="tick"  className='w-[18px] sm:w-[22px] h-[16px] sm:h-[18px]'/>
      <p className='font-inter font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#6C0D11]'>
        Portfolio & Real Projects
      </p>
    </div>

    <ul className="space-y-3 text-black pl-4 sm:pl-10">
      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Complete real-world projects with mentorship from industry experts.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Build a portfolio that gets you noticed by recruiters and design agencies.
        </p>
      </li>

      <li className="flex items-start">
        <span className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p className='font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-left'>
          Take part in a <b>four-week externship</b> where you work on live client projects.
        </p>
      </li>
    </ul>
</div>

<div className="flex justify-center mt-14 mb-10">
  <button className="font-inter font-semibold text-white text-[18px] sm:text-[20px] md:text-[22px] bg-[#5E0BD1] w-[260px] sm:w-[320px] md:w-[350px] py-3 sm:py-4 rounded-[6px] flex items-center justify-center hover:bg-[#4a09a6] transition-all duration-200">
    See Full Course Outline
  </button>
</div>

<div className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-10 px-4 flex flex-col rounded-xl">
  <h1 className='font-poppins text-[26px] sm:text-[32px] md:text-[38px] font-bold text-white text-center leading-[34px] sm:leading-[42px]'>
    Why Choose Zeplus Academy?
  </h1>

  <p className='font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[26px] text-white text-center mt-4 max-w-3xl mx-auto'>
    Zeplus Academy isn’t just a tech school—it’s a movement. We empower Africa's next 
    generation of digital leaders through hands-on training, mentorship, and a powerful 
    community network.
  </p>

  <div className='mt-8 px-2 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 max-w-5xl mx-auto'>

    {/* Item 1 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Project-Based Learning</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
        Learn by doing, not memorizing.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Mentorship-Driven</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
        Work 1-on-1 with designers and coaches who guide your growth.
      </p> 
    </div>

    {/* Item 3 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>Community Support</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
        Join a network of creators and innovators shaping Africa’s digital future.
      </p> 
    </div>

    {/* Item 4 */}
    <div>
      <div className='flex space-x-3 sm:space-x-4 items-center'>
        <img src={Tick} alt="tick" className='w-[16px] h-[14px] sm:w-[20px] sm:h-[18px]'/>
        <p className='font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white'>AI-Powered Curriculum</p>
      </div>
      <p className='font-inter font-normal text-[13px] sm:text-[15px] md:text-[16px] text-white ml-8 sm:ml-10 mt-1 leading-[20px] sm:leading-[24px]'>
        Stay ahead of the curve with next-gen design practices.
      </p> 
    </div>

  </div>

</div> 
</section>

{/* Hero 5 */}
<section className='bg-[#FEF2F2] py-10'>

  <div className='bg-gradient-to-r from-[#60070B] to-[#9C0E76] w-full py-14 px-6 md:px-20'>
    <h1 className='font-poppins text-[25px] md:text-[38px] font-bold text-white text-center mb-10 leading-tight'>
      Here’s why people just like you choose <br />Zeplus Academy for UI/UX design
    </h1>

    <div className='flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start justify-center max-w-[1200px] mx-auto'>
      
      {/* Card 1 */}
      <div className='text-black bg-white rounded-[11.4px] w-[320px] h-[229px] flex flex-col items-center justify-center px-5 shadow-md'>
        <div className='flex space-x-4 items-center mb-3'>
          <img src={Tunde} alt="tunde" className='w-[45px] h-[45px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[14px] font-semibold'>Tunde</h1>
            <p className='font-inter text-[11px]'>UI/UX Designer</p>
          </div>
        </div>
        <p className='text-center font-inter text-[13px] leading-[18px]'>
          “Learning design at Zeplus transformed my career — I went from beginner to job-ready in just four months.”
        </p>
      </div>

      {/* Card 2 */}
      <div className='text-black bg-white rounded-[11.4px] w-[320px] h-[229px] flex flex-col items-center justify-center px-5 shadow-md'>
        <div className='flex space-x-4 items-center mb-3'>
          <img src={Adaeze} alt="adaeze" className='w-[45px] h-[45px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[14px] font-semibold'>Adaeze</h1>
            <p className='font-inter text-[11px]'>Product Designer @ Fintech</p>
          </div>
        </div>
        <p className='text-center font-inter text-[13px] leading-[18px]'>
          “Zeplus gave me the confidence to create designs that solve real problems. The mentorship and AI modules were game-changers.”
        </p>
      </div>

      {/* Card 3 */}
      <div className='text-black bg-white rounded-[11.4px] w-[320px] h-[229px] flex flex-col items-center justify-center px-5 shadow-md'>
        <div className='flex space-x-4 items-center mb-3'>
          <img src={Amarachi} alt="Amarachi" className='w-[45px] h-[45px] rounded-full'/>
          <div>
            <h1 className='font-inter text-[14px] font-semibold'>Amarachi</h1>
            <p className='font-inter text-[11px]'>Freelancer (Alumni)</p>
          </div>
        </div>
        <p className='text-center font-inter text-[13px] leading-[18px]'>
          “Zeplus gave me the confidence to pursue design as a real career path. The mentorship and projects changed everything.”
        </p>
      </div>

    </div>
  </div>

  <h1 className='font-poppins font-bold text-[25px] md:text-[38px] mt-20 mb-10 text-center'>
    Your Journey, Simplified
  </h1>

  {[
    {
      title: "Learn the Fundamentals",
      desc: "Get grounded in user-centered design principles and global design standards."
    },
    {
      title: "Apply & Build",
      desc: "Create real-world projects with mentorship support and peer feedback."
    },
    {
      title: "Get Certified & Job-Ready",
      desc: "Graduate with a professional certificate and portfolio employers will love."
    },
    {
      title: "Career Launch Support (6 Months)",
      desc: "Access resume reviews, portfolio polish sessions, mock interviews, and referrals through our Career Launch Program."
    }
  ].map((step, i) => (
    <div key={i} className='flex flex-col items-center justify-center px-6 md:px-0 mb-6'>
      <img src={Tick} alt="tick" className='w-[22.92px] h-[19.26px] mb-3'/>
      <h1 className='font-inter font-bold text-[18px] md:text-[22px] mb-3 text-center'>
        {step.title}
      </h1>
      <p className='font-inter font-normal text-[14px] md:text-[16px] mb-3 text-center max-w-[779px]'>
        {step.desc}
      </p>
      {i !== 3 && <hr className='border-t border-gray-300 w-full md:w-[779px]' />}
    </div>
  ))}

</section>


{/* Hero 6 */}
<section className='flex flex-col items-center py-10'>
  <h1 className='font-poppins font-bold text-[28px] md:text-[38px]'>Course Schedule</h1>
  <p className='font-inter font-normal text-[16px] md:text-[20px] leading-[26px] mt-5 text-center px-4 md:px-0 max-w-[900px]'>
    Join any of our upcoming sessions and start your journey into the world of digital design
  </p>

  <div className='mt-10 flex flex-col md:flex-row gap-10 md:gap-14'>
    {/* November */}
    <div className='bg-[#F6F7FD] border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-7 py-8 w-[300px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[20px] md:text-[24px] mb-6'>November 2025</h1>
      <hr className='w-full border-gray-300 mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[16px] md:text-[18px]'>
          <img src={Calendar} alt="calendar" className='w-[24px] md:w-[28px] h-[24px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[16px] md:text-[18px] mt-2'>
          Saturday, November 8, 2025
        </p>
      </div>
    </div>

    {/* December */}
    <div className='bg-[#F6F7FD] border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-7 py-8 w-[300px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[20px] md:text-[24px] mb-6'>December 2025</h1>
      <hr className='w-full border-gray-300 mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[16px] md:text-[18px]'>
          <img src={Calendar} alt="calendar" className='w-[24px] md:w-[28px] h-[24px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[16px] md:text-[18px] mt-2'>
          Saturday, December 6, 2025
        </p>
      </div>
    </div>

    {/* January */}
    <div className='bg-[#F6F7FD] border-t-[10px] border-[#6C0D11] flex flex-col items-center justify-start px-7 py-8 w-[300px] md:w-[330px] shadow-sm'>
      <h1 className='font-inter font-bold text-[20px] md:text-[24px] mb-6'>January 2026</h1>
      <hr className='w-full border-gray-300 mb-6'/>
      <div className='flex flex-col'>
        <span className='flex items-center gap-2 font-inter text-[16px] md:text-[18px]'>
          <img src={Calendar} alt="calendar" className='w-[24px] md:w-[28px] h-[24px] md:h-[28px]'/>Start Date
        </span>
        <p className='font-inter font-medium text-[16px] md:text-[18px] mt-2'>
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
 <div className='bg-gradient-to-r from-[#60070B] to-[#9C0E76] py-8 md:py-12 px-4 md:px-12 lg:px-20 w-full mt-8'>
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

<h1 className='font-poppins font-bold text-[24px] md:text-[35px] text-center mt-10 md:mt-20 mb-10 px-4'>
  Experience the Zeplus Way
</h1>



<div className='flex flex-col md:flex-row gap-10 md:gap-20 px-4 md:px-0'>
  <div className='bg-[#FEF2F2] py-10 pl-8 pr-8 md:pl-10 md:pr-40 rounded-md w-full md:w-[532px] h-auto md:h-[340px]'>
    <img src={Vector1} alt="vector" className='mb-8 w-[47px] h-[47px]'/>
    <h3 className='font-inter font-bold text-[20px] md:text-[24px] mb-5'>Interactive Learning</h3>
    <p className='text-[14px] md:text-[16px]'>
      Progress through exercises and real <br />challenges that make learning fun.
    </p>
  </div> 
  <div className='bg-[#FEF2F2] py-10 pl-8 pr-8 md:pl-10 md:pr-40 rounded-md w-full md:w-[532px] h-auto md:h-[340px]'>
    <img src={Vector2} alt="vector" className='mb-8 w-[47px] h-[47px]'/>
    <h3 className='font-inter font-bold text-[20px] md:text-[24px] mb-5'>Hybrid Flexibility</h3>
    <p className='text-[14px] md:text-[16px]'>
      Study online or on-site with total <br />freedom.
    </p>
  </div>  
</div>

<div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:mt-20 px-4 md:px-0'>
  <div className='bg-[#FEF2F2] py-10 pl-8 pr-8 md:pl-10 md:pr-40 rounded-md w-full md:w-[532px] h-auto md:h-[340px]'>
    <img src={Vector3} alt="vector" className='mb-8 w-[47px] h-[47px]'/>
    <h3 className='font-inter font-bold text-[20px] md:text-[24px] mb-5'>Events & Meetups</h3>
    <p className='text-[14px] md:text-[16px]'>
      Network, collaborate, and grow with <br />like-minded designers
    </p>
  </div> 
  <div className='bg-[#FEF2F2] py-10 pl-8 pr-8 md:pl-10 md:pr-40 rounded-md w-full md:w-[532px] h-auto md:h-[340px]'>
    <img src={Vector4} alt="vector" className='mb-8 w-[47px] h-[47px]'/>
    <h3 className='font-inter font-bold text-[20px] md:text-[24px] mb-5'>Empowerment</h3>
    <p className='text-[14px] md:text-[16px] whitespace-nowrap'>
      Join a movement that equips African <br />youth with digital power for the future.
    </p>
  </div>  
</div>

<div className="w-full bg-[#F6F7FD] rounded-xl px-6 py-12 flex flex-col items-center text-center gap-6 mt-10 mx-auto max-w-[1133px]">
  <h2 className="text-[32px] md:text-[38px] font-[700] leading-[46px] font-poppins">
    Ready to Redesign the Future?
  </h2>

  <p className="text-black max-w-2xl text-[16px] md:text-[18px] font-inter font-normal leading-[26px]">
    Whether you're a creative beginner or a professional looking to upgrade your
    skills, this course will unlock your potential to design for impact.
  </p>

  <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
    <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
      <img src={Tick} alt="tick" className="w-[23px] h-[19px]" />
      <span>Join the movement</span>
    </div>
    <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
      <img src={Tick} alt="tick" className="w-[23px] h-[19px]" />
      <span>Become a certified UI/UX Designer with AI Skills.</span>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center items-center">
     <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20UI/UX%20course%20at%20Zeplus%20Academy."
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



<section className="w-full flex flex-col items-center text-center px-4 mt-16">
      
      {/* Heading */}
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
    </section>

</section>




    


    </div>
  )
}

export default Uiux