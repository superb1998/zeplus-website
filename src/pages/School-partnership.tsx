import { useState } from "react";


import PartnerHero1 from "../assets/img/partner-hero1.png"
import Hero1bg from "../assets/img/hero1bg.png"
import Vid from "../assets/img/vid.png"
import Tunde from "../assets/img/tunde.png"
import Amarachi from "../assets/img/amarachi.png"
import Adaeze from "../assets/img/adaeze.png"
import A from "../assets/img/a.png"
import AA from "../assets/img/aa.png"
import AAA from "../assets/img/aaa.png"
import AAAA from "../assets/img/aaaa.png"
import AAAAA from "../assets/img/aaaaa.png"
import AAAAAA from "../assets/img/aaaaaa.png"



const SchoolPartnership = () => {

   const faqs = [
    { question: "What are classes like?", answer: "Our classes are interactive, engaging, and project-based. Students work on real coding projects while learning fundamental concepts. Each session includes live instruction, hands-on practice, and collaborative activities with peers." },
    { question: "Who teaches the classes?", answer: "What makes us truly unique is the quality of our instructors. We’re highly selective—we hire only the top 2% of applicants. Our instructors bring a rare blend of friendly, effective teaching and deep programming expertise." },
    { question: "What makes Zeplus Academy different?", answer: "Unlike one-off coding courses, Zeplus Academy offers a structured, step-by-step program that takes students from beginners to advanced levels. Each course builds on the last, ensuring real skill development, clear milestones, purposeful outcomes, and a real-world internship at the end." },
    { question: "Which course should my child enroll in?", answer: "We’re here to help you find the perfect starting point! Just answer a few quick questions about your child’s age, experience, and goals—and we’ll give you a personalized program recommendation instantly. Find the right program for your child." },
    { question: "How much does it cost?", answer: "Tuition is ₦300,000 for the full 3-month session." },
    { question: "Can schools partner with Zeplus Academy", answer: "Yes! We’re open to partnerships with schools to help train their students in Tech and AI. Schools can contact us directly to discuss collaboration." },
    { question: "What if my teen doesn’t enjoy the program? ✅", answer: "We’re confident your teen will love Zeplus Academy. But if after the first four sessions you’re not satisfied, we offer a 100% Satisfaction Guarantee — full refund" },

  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='overflow-x-hidden'>

      {/* Hero1 */}
<section className="bg-cover bg-[#9533FC1A] bg-center bg-no-repeat w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 px-5 sm:px-10 md:px-20 pt-6"
  style={{ backgroundImage: `url(${Hero1bg})` }}
>
  {/* right column on mobile (image first) */}
  <img
    src={PartnerHero1}
    alt="hero img"
    className="w-full md:w-[50%] lg:w-[45%] object-contain order-1 md:order-2"
  />

  {/* left column */}
  <div className="order-2 md:order-1 text-left md:text-left md:w-[50%]">

    <h1 className="font-poppins font-extrabold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[55px] mb-3 break-words">
      Empower Your Students with <br className="hidden lg:block" /> Future Ready Tech Skills
    </h1>

    <p className="font-normal text-[13px] sm:text-[15px] md:text-[17px] font-inter mb-3 mt-5">
      Partner with Zeplus Academy to equip your students (ages 11–18) with coding, AI, and digital
      innovation skills that prepare them for the future.
    </p>

    <div className="flex flex-row sm:flex-row gap-3 sm:justify-center md:justify-start mt-10">
       <a href="#apply-form" className="bg-[#60070B] text-white w-full sm:w-[254px] h-[43px] rounded-sm flex justify-center items-center">
        Apply Now
      </a>
      <a href="#apply-form" className="flex justify-center items-center bg-white text-[#5E0BD1] border-[#5E0BD1] border-[1px] w-full sm:w-[254px] h-[43px] rounded-sm">
        Download Brochure
      </a>
    </div>

    <p className="mt-10 text-[13px] sm:text-[14px] md:text-[15px]">
      Trusted by 100+ parents and schools across Nigeria
    </p>
  </div>
</section>


      {/* HERO 2 */}
<section className="bg-white py-5 sm:py-8 md:py-12 my-5 px-4 sm:px-8 md:px-16">
  <h1 className="font-poppins font-extrabold text-[18px] sm:text-[24px] md:text-[34px] text-left sm:text-left md:text-center leading-[24px] sm:leading-[32px] md:leading-[46px]">
    Why Partner with Zeplus
  </h1>
  
  <p className="font-inter font-normal text-[12px] sm:text-[12px] md:text-[15px] text-left sm:text-left md:text-center mt-2 sm:mt-2 mb-8 sm:mb-10">
    Join Africa's leading tech education platform and give your students the competitive edge they need.
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-20">
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={A} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Structured Curriculum</h3>
        <p className="font-normal text-[12px]">Aligned with global tech standards for youth.</p>
    </div>
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={AA} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Expert Instructors</h3>
        <p className="font-normal text-[12px]">Certified facilitators with real-world experience.</p>
    </div>
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={AAA} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Flexible Options</h3>
        <p className="font-normal text-[12px]">Learn at your school, Zeplus campus, or virtually.</p>
    </div>
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={AAAA} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Hands-On Projects</h3>
        <p className="font-normal text-[12px]">Students build real-life digital solutions.</p>
    </div>
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={AAAAA} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Future-Ready Certificate</h3>
        <p className="font-normal text-[12px]">Recognized by Zeplus Academy & partners.</p>
    </div>
    <div className="bg-[#FFF7E6] h-[160px] flex flex-col text-center items-center justify-center px-5 rounded-md">
        <img src={AAAAAA} alt="a" className="bg-[#60070B] rounded-md p-2 mb-2"/>
        <h3 className="font-bold text-[16px] mb-1">Recognition Badge</h3>
        <p className="font-normal text-[12px]">Showcase your school as a Future-Ready Partner.</p>
    </div>
  </div>  
</section>

{/* HERO 2 Contd */}
<section className="bg-[#FFF7E6] py-10">
    <h1 className="font-poppins font-extrabold text-[18px] sm:text-[24px] md:text-[34px] text-left sm:text-left md:text-center leading-[24px] sm:leading-[32px] md:leading-[46px] px-5">
    How It Works
  </h1>
  
  <p className="px-5 font-inter font-normal text-[12px] sm:text-[12px] md:text-[15px] text-left sm:text-left md:text-center mt-2 sm:mt-2 mb-8 sm:mb-10">
    Simple steps to get your school partnership started
  </p>

  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center text-center px-4 sm:px-10 md:px-20 gap-4">
  {/* Step 1 */}
  <div className="flex flex-col items-center w-full sm:w-auto">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-[#60070B] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
      <div className="w-10 sm:w-16 h-1 bg-[#60070B]"></div>
    </div>
    <h3 className="text-[16px] font-bold my-3">Register Your School</h3>
    <p className="text-[12px] max-w-[200px]">
      Complete our partnership enrollment form with your school details.
    </p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center w-full sm:w-auto">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-[#60070B] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
      <div className="w-10 sm:w-16 h-1 bg-[#60070B]"></div>
    </div>
    <h3 className="text-[16px] font-bold my-3">Get a Partnership Call</h3>
    <p className="text-[12px] max-w-[200px]">
      Our team schedules a consultation to discuss your needs and goals.
    </p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center w-full sm:w-auto">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-[#60070B] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
      <div className="w-10 sm:w-16 h-1 bg-[#60070B]"></div>
    </div>
    <h3 className="text-[16px] font-bold my-3">Enroll Students</h3>
    <p className="text-[12px] max-w-[200px]">
      Register your students and choose the best learning format for your school.
    </p>
  </div>

  {/* Step 4 */}
  <div className="flex flex-col items-center w-full sm:w-auto">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-[#60070B] rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
      <div className="w-10 sm:w-16 h-1 bg-[#60070B]"></div>
    </div>
    <h3 className="text-[16px] font-bold my-3">Launch the Program</h3>
    <p className="text-[12px] max-w-[200px]">
      Begin transforming your students into confident tech innovators.
    </p>
  </div>
</div>
</section>


{/* Hero 3 */}
<section className="bg-[#F7E3E3] py-12 px-4 sm:px-10 md:px-20 flex flex-col md:flex-row items-start md:items-center gap-10">
  {/* Left Text Section */}
  <div className="md:w-1/2 flex flex-col gap-6">
    <h2 className="font-poppins font-extrabold text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-[#111827]">
      Join Africa's Tech Revolution Start With Your School
    </h2>
    <p className="font-inter text-[12px] sm:text-[14px] md:text-[14px] text-gray-600">
      Backed by experienced instructors, proven learning outcomes, and an engaging curriculum tailored for African teens.
    </p>
    <ul className="flex flex-col gap-2">
      <li className="flex items-center gap-2 text-gray-800 text-[12px] sm:text-[14px] md:text-[14px]">
        <span className="w-4 h-4 bg-[#60070B] rounded-full flex-shrink-0"></span>
        500+ teens trained across Africa
      </li>
      <li className="flex items-center gap-2 text-gray-800 text-[12px] sm:text-[14px] md:text-[14px]">
        <span className="w-4 h-4 bg-[#60070B] rounded-full flex-shrink-0"></span>
        10+ partner schools in 3 states
      </li>
      <li className="flex items-center gap-2 text-gray-800 text-[12px] sm:text-[14px] md:text-[14px]">
        <span className="w-4 h-4 bg-[#60070B] rounded-full flex-shrink-0"></span>
        95% student satisfaction rate
      </li>
    </ul>
  </div>

  {/* Form Section */}
  <form className="w-full md:w-1/2 bg-white rounded-xl p-4 sm:p-6 md:p-10 shadow-lg flex flex-col gap-4 text-[12px] sm:text-[14px] md:text-[14px]" id="apply-form">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-semibold mb-1">School Name *</label>
      <input type="text" placeholder="Enter school name" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"/>
    </div>
    <div className="flex flex-col">
      <label className="font-semibold mb-1">School Type *</label>
      <select className="border rounded-md p-2 bg-gray-200 text-[12px] sm:text-[14px] w-full">
        <option>Select school type</option>
        <option>Primary</option>
        <option>Junior Secondary</option>
        <option>Senior Secondary</option>
      </select>
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-semibold mb-1">School Address *</label>
    <textarea placeholder="Enter school address" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"></textarea>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Contact Person *</label>
      <input type="text" placeholder="Principal/Administrator name" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"/>
    </div>
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Email Address *</label>
      <input type="email" placeholder="school@example.com" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"/>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Phone Number *</label>
      <input type="tel" placeholder="+234 xxx xxx xxxx" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"/>
    </div>
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Number of Students *</label>
      <select className="border rounded-md p-2 bg-gray-200 text-[12px] sm:text-[14px] w-full">
        <option>Select range</option>
        <option>1-50</option>
        <option>51-100</option>
        <option>101-200</option>
        <option>200+</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Preferred Learning Mode *</label>
      <select className="border rounded-md p-2 bg-gray-200 text-[12px] sm:text-[14px] w-full">
        <option>Select mode</option>
        <option>Onsite</option>
        <option>Virtual</option>
        <option>Hybrid</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Preferred Schedule *</label>
      <select className="border rounded-md p-2 bg-gray-200 text-[12px] sm:text-[14px] w-full">
        <option>Select schedule</option>
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-semibold mb-1">Preferred Start Date</label>
    <input type="date" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"/>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-semibold mb-1">Additional Comments</label>
    <textarea placeholder="Optional" className="border rounded-md p-2 text-[12px] sm:text-[14px] w-full"></textarea>
  </div>

  <button type="submit" className="bg-[#60070B] text-white font-bold py-3 mt-4 rounded-md text-[14px] sm:text-[16px] w-full">
    Submit School Enrollment
  </button>
</form>
</section>


{/* Hero 5 */}
<section className='bg-white pt-10'>
  <div className='flex flex-col items-center w-full py-14 px-6 sm:px-10 md:px-20'>
    <p className="bg-[#5e0bd1] px-8 text-white py-2 rounded-sm mb-2">Testimonials</p>
    <h1 className="text-[32px] sm:text-[36px] md:text-[40px] text-center md:text-left mb-2">Partner Impact & Success Stories</h1>
    <p className="mb-5 text-center md:text-left">See how schools across Africa are transforming their students' futures</p>
    <img src={Vid} alt="vid" className="mb-10 w-full max-w-[800px] object-cover"/>

    <div className='flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 md:gap-14 items-center md:items-start justify-center max-w-[1200px] mx-auto'>
      
      {/* Card 1 */}
      <div className='text-black bg-[#F6F7FD] rounded-[11.4px] w-full sm:w-[320px] h-auto sm:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
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
      <div className='text-black bg-[#F6F7FD] rounded-[11.4px] w-full sm:w-[320px] h-auto sm:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
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
      <div className='text-black bg-[#F6F7FD] rounded-[11.4px] w-full sm:w-[320px] h-auto sm:h-[229px] flex flex-col items-center justify-center px-5 py-4 shadow-md'>
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
</section>


{/* Hero 6 */}
  {/* FAQ Section */}
  <section className="w-full flex flex-col items-center text-center px-4 mt-5 py-10 bg-[#F3E3E3]">
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






    


    </div>
  )
}

export default SchoolPartnership 