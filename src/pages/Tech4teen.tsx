import { useState } from "react";
import { Link } from 'react-router-dom'


import PartnerHero1 from "../assets/img/partner-hero1.png"
import Hero1bg from "../assets/img/hero1bg.png"
import B from "../assets/img/b.png"
import BB from "../assets/img/bb.png"
import BBB from "../assets/img/bbb.png"
import BBBB from "../assets/img/bbbb.png"
import Tee from '../assets/img/tee.png'
import Settings from "../assets/img/settings.png"
import Books from "../assets/img/book.png"
import Cap from "../assets/img/cap.png"
import Offer from "../assets/img/offer.png"
import testImage from '../assets/img/testimonialimg.jpg'
import test1 from '../assets/img/test1.png'
import test2 from '../assets/img/test2.png'
import test3 from '../assets/img/test3.png'
import alumni1 from '../assets/img/alumni.png'
import alumni2 from '../assets/img/alumni2.png'
import alumni3 from '../assets/img/alumni3.png'
import StraightLine from "../assets/img/straight-line.png"
import whatsapp from '../assets/courses/whatsapp.png'





const Tech4teen = () => {
  

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
        Inspiring the Next Generation of  <br className="hidden lg:block" /> African Tech Builders
        </h1>

        <p className="font-normal text-[13px] sm:text-[15px] md:text-[17px] font-inter mb-3 mt-5">
        A 3-month weekend program designed to introduce teens (8–20 years) to coding, game development, and web creation  in a fun, project-based way.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-start mt-10">
        <a href="#apply-form" className="flex items-center justify-center bg-[#60070B] text-white w-full sm:w-[254px] h-[43px] rounded-sm" >
            Enroll Your Teen Now
        </a>
        <Link to="/school-partnership" className="flex items-center justify-center bg-white text-[#5E0BD1] border-[#5E0BD1] border-[1px] w-full sm:w-[254px] h-[43px] rounded-sm">
            Partner With Us (For Schools)
        </Link>
        </div>

        <p className="mt-10 text-[13px] sm:text-[14px] md:text-[15px]">
        Trusted by 100+ parents and schools across Nigeria
        </p>
    </div>
    </section>

    {/* Hero 2 */}
    <section className="bg-[#FAF6F6] flex flex-col items-center gap-5 text-center py-20 px-5 sm:px-10">
  <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[30px]">About the Program</h1>
  <p className="text-[14px] sm:text-[16px]">
    The Courses for Africa Teens Program is a 3-month weekend training designed
    <br className="hidden lg:block" />
    specially for young tech enthusiasts aged 8–20.
  </p>
  <p className="text-[14px] sm:text-[16px]">
    Our goal is to help African teens discover the power of technology early by
    <br className="hidden lg:block" />
    learning, building, and innovating through fun, practical, and creative projects.
  </p>
  <div className="font-semibold bg-[#F7E1E1F2] rounded-2xl px-6 sm:px-10 py-6 sm:py-10 border border-[#60070B] text-[12px] sm:text-[14px]">
    Classes hold Saturdays only (3 hours per week) — making it easy to balance
    <br className="hidden lg:block" />
    school and learning tech.
  </div>
</section>

    {/* Hero 3 */}
   <section className="bg-[#F7E3E3] flex flex-col items-center py-10 px-5 sm:px-10" id="programs">
  <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] text-center">
    Explore Our Exciting Courses for Teens
  </h1>
  <p className="text-[#1F1F38] mb-6 mt-3 text-center text-[14px] sm:text-[16px]">
    Choose from any of our exciting courses — each designed to spark curiosity and build real-world skills.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
    <div className="flex flex-col items-start gap-3 bg-white p-5 sm:p-7 rounded-lg shadow-md h-full">
      <img src={BBB} alt="laptop" className="w-[30px] h-[30px]" />
      <h2 className="font-bold text-[16px] sm:text-[18px]">Coding with Python</h2>
      <p className="text-[12px] sm:text-[14px] text-[#686882]">
        Learn programming fundamentals with real projects. Build
        <br className="hidden lg:block" />
        applications, solve problems, and understand the logic
        <br className="hidden lg:block" />
        behind coding.
      </p>
      <div className="flex justify-between items-center w-full pt-4">
        <p className="text-[#60070B] text-[12px] sm:text-[14px]">Ages 13-18</p>
        <a href="#apply-form" className="bg-[#60070B] text-[#FFF7E6] text-[12px] sm:text-[14px] px-6 py-2 rounded-full">
          Learn More
        </a>
      </div>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white p-5 sm:p-7 rounded-lg shadow-md h-full">
      <img src={B} alt="web" className="w-[30px] h-[30px]" />
      <h2 className="font-bold text-[16px] sm:text-[18px]">Web Development</h2>
      <p className="text-[12px] sm:text-[14px] text-[#686882]">
        Design and build your own websites from scratch.
        <br className="hidden lg:block" />
        Learn HTML, CSS, and JavaScript to create stunning web
        <br className="hidden lg:block" />
        experiences.
      </p>
      <div className="flex justify-between items-center w-full pt-4">
        <p className="text-[#60070B] text-[12px] sm:text-[14px]">Ages 12-18</p>
        <a href="#apply-form" className="bg-[#60070B] text-[#FFF7E6] text-[12px] sm:text-[14px] px-6 py-2 rounded-full">
          Learn More
        </a>
      </div>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white p-5 sm:p-7 rounded-lg shadow-md h-full">
      <img src={BB} alt="game-pad" className="w-[30px] h-[30px]" />
      <h2 className="font-bold text-[16px] sm:text-[18px]">Game Development</h2>
      <p className="text-[12px] sm:text-[14px] text-[#686882]">
        Create fun, interactive games with logic and design. Bring
        <br className="hidden lg:block" />
        your imagination to life through game programming.
      </p>
      <div className="flex justify-between items-center w-full pt-4">
        <p className="text-[#60070B] text-[12px] sm:text-[14px]">Ages 13-18</p>
        <a href="#apply-form" className="bg-[#60070B] text-[#FFF7E6] text-[12px] sm:text-[14px] px-6 py-2 rounded-full">
          Learn More
        </a>
      </div>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white p-5 sm:p-7 rounded-lg shadow-md h-full">
      <img src={BBBB} alt="puzzle" className="w-[30px] h-[30px]" />
      <h2 className="font-bold text-[16px] sm:text-[18px]">Coding with Scratch (Kids Edition)</h2>
      <p className="text-[12px] sm:text-[14px] text-[#686882]">
        A creative introduction for beginners. Visual programming that makes coding
        <br className="hidden lg:block" />
        fun and accessible for younger learners.
      </p>
      <div className="flex justify-between items-center w-full pt-4">
        <p className="text-[#60070B] text-[12px] sm:text-[14px]">Ages 11-14</p>
        <a href="#apply-form" className="bg-[#60070B] text-[#FFF7E6] text-[12px] sm:text-[14px] px-6 py-2 rounded-full">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    {/* Hero 4 */}
   <section className="bg-[#FAF6F6] flex flex-col items-center py-10 px-5 sm:px-10">
  <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] text-center mb-8">
    Program Details
  </h1>

  <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mb-10">
    {/* LEFT SIDE */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
      <div className="flex flex-col items-start gap-3 bg-[#FFF7E6] border border-[#F2A807] p-5 sm:p-7 rounded-lg shadow-md h-full">
        <h2 className="font-bold text-[16px] sm:text-[18px]">Duration</h2>
        <p className="text-[12px] sm:text-[14px] text-[#686882]">3 Months</p>
      </div>

      <div className="flex flex-col items-start gap-3 bg-[#FFF7E6] border border-[#F2A807] p-5 sm:p-7 rounded-lg shadow-md h-full">
        <h2 className="font-bold text-[16px] sm:text-[18px]">Schedule</h2>
        <p className="text-[12px] sm:text-[14px] text-[#686882]">Saturdays Only</p>
        <p className="text-[12px] sm:text-[14px] text-[#686882]">3 Hours/Week</p>
      </div>

      <div className="flex flex-col items-start gap-3 bg-[#FFF7E6] border border-[#F2A807] p-5 sm:p-7 rounded-lg shadow-md h-full">
        <h2 className="font-bold text-[16px] sm:text-[18px]">Mode</h2>
        <p className="text-[12px] sm:text-[14px] text-[#686882]">Online Live</p>
      </div>

      <div className="flex flex-col items-start gap-3 bg-[#FFF7E6] border border-[#F2A807] p-5 sm:p-7 rounded-lg shadow-md h-full">
        <h2 className="font-bold text-[16px] sm:text-[18px]">Age Range</h2>
        <p className="text-[12px] sm:text-[14px] text-[#686882]">11-19 years</p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] text-white rounded-xl w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center gap-4">
      <h1 className="text-center font-bold text-[18px] sm:text-[22px]">Why Join?</h1>
      <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 text-center md:text-left">
        <p>✅ Learn by doing — build real projects</p>
        <p>✅ Develop creativity, confidence, and problem-solving skills</p>
        <p>✅ Be mentored by expert designers and developers</p>
        <p>✅ Join a community of Africa's future innovators</p>
      </div>
    </div>
  </div>

  <button className="bg-[#A55AFF] px-20 py-3 text-white font-semibold rounded-lg text-[14px] sm:text-[16px]">
    FEE: N300,000
  </button>
</section>

    {/* Hero 5 */}
    <section className="bg-[#F7E3E3] flex flex-col items-center py-10 px-5 sm:px-10">
  <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] text-center mb-3">
    Program Benefits
  </h1>
  <p className="text-[#1F1F38] text-center text-[14px] sm:text-[16px]">
    Everything your teen needs to thrive included at no extra cost!
  </p>
  <p className="text-[#1F1F38] mb-2 mt-2 text-center text-[14px] sm:text-[16px]">
    At Zeplus Academy, we believe every young African deserves access to the best tools, mentors, and resources to <br className="hidden sm:block" /> succeed in tech.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl bg-white p-6 sm:p-8 md:p-10">
    <p>✅ Interactive Live Classes</p>
    <p>✅ Structured, Comprehensive Curriculum</p>
    <p>✅ Daily Homework Help</p>
    <p>✅ Hands-on, Project-Based Learning</p>
    <p>✅ 1-on-1 Office Hours <br className="hidden md:block" />(Advanced Courses)</p>
    <p>✅ Downloadable Class Slides</p>
    <p>✅ Video Recordings of Every Class</p>
    <p>✅ Weekly Progress Reports</p>
    <p>✅ Certified, Experienced Instructors</p>
    <p>✅ 24/7 Access to Our Learning Platform</p>
    <p>✅ Supportive Student Community</p>
    <p>✅ 4-Session Money-Back Guarantee</p>
  </div>
</section>


    {/* Hero 6 */}
   <section className='w-full bg-gradient-to-br from-[#60070B] to-[#9C0E76]'>
  <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] text-center mb-3 text-white pt-10">
    Your Student Will Experience
  </h1>
  
  <div className='md:max-w-6xl w-full mx-auto md:px-0 px-5 md:py-15 py-10'>
    <div className='flex flex-col md:flex-row gap-10 text-white'>
      
      {/* Left */}
      <div className='flex-1 flex flex-col md:max-w-[550px] order-2 md:order-1 gap-5'>
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-white rounded-md p-6">
          <img src={Cap} alt="cap" className="w-12 h-12 sm:w-auto sm:h-auto" />
          <div>
            <h3 className="text-[#1F1F38]">3 Hours of Live Instruction</h3>
            <p className="text-[#1F1F38] text-[14px] sm:text-[16px]">Weekly interactive sessions with expert instructors</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-white rounded-md p-6">
          <img src={BBB} alt="laptop" className="w-12 h-12 sm:w-auto sm:h-auto" />
          <div>
            <h3 className="text-[#1F1F38]">12 Total Projects</h3>
            <p className="text-[#1F1F38] text-[14px] sm:text-[16px]">4 class projects + 8 homework projects to build your portfolio</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-white rounded-md p-6">
          <img src={Settings} alt="settings" className="w-12 h-12 sm:w-auto sm:h-auto" />
          <div>
            <h3 className="text-[#1F1F38]">Development Environment</h3>
            <p className="text-[#1F1F38] text-[14px] sm:text-[16px]">Fully unlocked tools and platforms for hands-on learning</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-white rounded-md p-6">
          <img src={Books} alt="books" className="w-12 h-12 sm:w-auto sm:h-auto" />
          <div>
            <h3 className="text-[#1F1F38]">Beyond-Classroom Support</h3>
            <p className="text-[#1F1F38] text-[14px] sm:text-[16px]">Including live homework help and mentorship</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className='flex-1 flex flex-col gap-10 md:max-w-[600px] items-center justify-center order-1 md:order-2'>
        <div className='relative w-full h-64 sm:h-72 md:h-96'>
          <img
            src={Tee}
            alt='Hero'
            className='w-full h-full object-cover rounded-lg'
            style={{ filter: 'blur(1px)' }}
          />
        </div>

        <a href="#apply-form" className="bg-[#9533FC] px-12 py-3 sm:px-20 sm:py-4 md:px-28 md:py-5 lg:px-40 lg:py-6 rounded-md text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
          Enroll Your Teen Today →
        </a>
      </div>

    </div>
  </div>
</section>


    {/* Hero 7 */}
   <section className="bg-[#EEE8DF] py-10">
  <h1 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] text-center mb-3">
    Partner With Zeplus Academy Empower Your <br className="hidden sm:block" />Students in Tech
  </h1>

  <p className="text-[#1F1F38] text-center text-[14px] sm:text-[16px] px-5 sm:px-0">
    Are you a Junior or Senior Secondary School passionate about giving your <br className="hidden sm:block" />students an edge in digital skills? Partner with Zeplus Academy to bring our "Tech <br className="hidden sm:block" />for Teens" program directly to your school.
  </p>

  <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-10 px-5 md:px-20">
    {/* Left */}
    <div className="text-center md:text-left w-full md:w-1/2">
      <h1 className="font-bold mb-5 text-[20px]">We offer:</h1>
      <p className="mb-3">🤝 Custom partnership packages for school clubs or weekend <br className="hidden sm:block" />sessions</p>
      <p className="mb-3">👨‍🏫 Expert Zeplus-certified instructors</p>
      <p className="mb-3">💻 Flexible on-site or online learning options</p>
      <p className="mb-3">📊 Student progress reports and certifications</p>
      <p className="mb-3">🏆 Opportunities for school-wide innovation challenges and exhibitions</p>

      <a href="#apply-form"  className="bg-[#60070B] text-[#FFF7E6] text-[12px] sm:text-[14px] px-6 py-2 rounded-full mt-4">
        Partner With Us →
      </a>

      <p className="text-[12px] mt-4">
        Let's equip your students for a tech-driven future together.
      </p>
    </div>

    {/* Right */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img src={Offer} alt="offer" className="w-full max-w-[420px] object-contain" />
    </div>
  </div>
</section>

    {/* Hero 8 */}
    {/* Testimonials */}
  <section id='testimonials' className='w-full bg-white'>
  <div className='bg-[#5E0BD1] w-40 rounded flex items-center justify-center mx-auto mb-5 mt-10'>
    <h2 className='py-2 px-4 text-white text-center'>TESTIMONIALS</h2>
  </div>

  <div className='mx-auto px-6 sm:px-10 md:px-20 pt-10 pb-10 bg-[#F7E1E1F2]'>
    <div className='text-center items-center justify-center mx-auto'>
      <p className='font-Sora text-2xl sm:text-3xl md:text-[40px] mb-4 px-2'>
        Hear what they say about us.
      </p>
    </div>

    {/* gradient taller than image */}
    <div className='relative rounded-lg overflow-hidden py-3'>
      <img
        src={testImage}
        alt='image'
        className='w-full h-auto md:rounded-xl block'
      />

      {/* gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(180deg, #3B1B6C80 0%, #00000066 50%, #3B1B6C80 100%)',
          zIndex: 10
        }}
      />

      {/* centered text overlay */}
      <div
        className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none md:mt-20 mt-10 px-4'
        style={{ zIndex: 20 }}
      >
        <p className='text-white text-center text-[14px] sm:text-[16px] md:text-2xl font-light font-Sora md:mb-3'>
          “I had an amazing experience at Zeplus Academy.”
        </p>
        <h2 className='text-white md:text-[22px] text-sm font-light font-sora md:mb-3'>
          -
        </h2>
        <h2 className='text-white md:text-[22px] text-sm font-light font-sora'>
          UIUX Designer, Nigeria
        </h2>
      </div>
    </div>

    {/* 3 smaller testimonials */}
    <div className='flex flex-col md:flex-row gap-6 mt-10'>
      {/* Testimonial 1 */}
      <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
        <img
          src={test1}
          alt='testimonial1'
          className='w-full h-56 object-cover block'
        />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
            zIndex: 10
          }}
        />
        <div
          className='absolute inset-0 flex flex-col items-baseline justify-end px-4 pb-5'
          style={{ zIndex: 20 }}
        >
          <p className='text-white text-[14px] md:text-[19px] font-light font-Sora'>
            Joe
          </p>
          <h2 className='text-white text-ssm font-sora font-light'>
            Product Designer, USA
          </h2>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className='relative w-full max-w-[400px] mx-auto rounded-lg overflow-hidden'>
        <img src={test2} alt='testimonial2' className='w-full h-56 object-cover block' />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
            zIndex: 10
          }}
        />
        <div
          className='absolute inset-0 flex flex-col items-baseline justify-end px-4 pb-5'
          style={{ zIndex: 20 }}
        >
          <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>
            Mosope
          </p>
          <h2 className='text-white text-ssm font-sora font-light'>
            Product Designer, United Kingdom
          </h2>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
        <img
          src={test3}
          alt='testimonial3'
          className='w-full h-56 object-cover block'
        />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(59,27,108,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(59,27,108,0.6) 100%)',
            zIndex: 10
          }}
        />
        <div
          className='absolute inset-0 flex flex-col items-baseline justify-end px-4 pb-5'
          style={{ zIndex: 20 }}
        >
          <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>
            Rebecca
          </p>
          <h2 className='text-white text-ssm font-sora font-light'>
            Product Designer, Nigeria
          </h2>
        </div>
      </div>
    </div>
  </div>

  {/* Alumni Section */}
  <div className='md:px-30 px-6 bg-[#F7E1E1F2] pb-10'>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-5 items-center justify-center '>
      {/* Alumni 1 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni1} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2>Tunde</h2>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className='md:max-w-[350px]'>
          <p>
            “Learning design at Zeplus transformed my career — I went from beginner
            to job-ready in just four months.”
          </p>
        </div>
      </div>

      {/* Alumni 2 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni2} alt='alumni2' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2>Adaeze</h2>
            <p>Product Designer @ Fintech Startup</p>
          </div>
        </div>
        <div className='md:max-w-[350px]'>
          <p>
            “Zeplus gave me the confidence to create designs that solve real
            problems. The mentorship and AI modules were game-changers.”
          </p>
        </div>
      </div>

      {/* Alumni 3 */}
      <div className='bg-[#F6F7FD] rounded-lg px-6 pt-10 pb-10 flex flex-col'>
        <div className='flex flex-row gap-3 mb-5'>
          <img src={alumni3} alt='alumni3' className='w-12 h-12 object-cover rounded-full' />
          <div className='flex flex-col'>
            <h2>Amarachi</h2>
            <p>Freelancer, Alumni</p>
          </div>
        </div>
        <div className='md:max-w-[350px]'>
          <p>
            “Zeplus gave me the confidence to pursue design as a real career path.
            The mentorship and projects changed everything.”
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Hero 9 */}
{/* Apply Now Section */}
  <section id='apply-now' className='w-full bg-gradient-to-br from-[#60070B] to-[#9C0E76]'>
  <div className='md:max-w-[1300px] mx-auto md:px-0 px-5 md:py-10 py-10'>
    <div className='flex flex-col md:flex-row gap-6 text-white items-center justify-center'>
      {/* Left */}
      <div className='flex flex-col md:max-w-[750px] gap-6 w-full'>
        <div className='md:max-w-[500px] w-full'>
          <h2 className='text-[16px] font-[400]'>At Zeplus Academy,  we inspire young minds to explore, create, and lead with technology. </h2>
        </div>
        <div className='md:max-w-[500px] w-full'>
          <h2 className='text-[16px] font-[400]'>Our goal is to equip teens with future  ready Tech and AI skills through hands on learning that blends creativity, innovation, and problem solving. </h2>
        </div>
        <div className='w-full'>
          <p className='text-[17px] font-[400]'>We don’t just teach tech we nurture young innovators ready to shape Africa’s digital future.</p>
        </div>
      </div>

      {/* Right */}
      <div className='bg-[#C491C0] rounded-xl w-full md:max-w-[700px]' id="apply-form">
        <div className='flex flex-col justify-center p-5'>
          <h2 className='text-[26px] md:text-[22px] text-black'>Give Your Teen a Head Start in Tech</h2>
          {/* Form fields */}
          <form className='flex flex-col gap-3 mt-5'>
            <div className='flex flex-col md:flex-row gap-2'>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-[400] text-black'>First Name <span className="text-[#D1180C]">*</span></label>
                <input type='text' placeholder="First Name" className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-[400] text-black'>Last Name <span className="text-[#D1180C]">*</span></label>
                <input type='text' placeholder="Last Name" className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-[400] text-black'>Email <span className="text-[#D1180C]">*</span></label>
              <input type='text' placeholder="Please enter email" className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
            </div>

            <div className='flex flex-col md:flex-row gap-2'>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-[400] text-black'>Phone Number <span className="text-[#D1180C]">*</span></label>
                <input type='num' placeholder="Please type" className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-[400] text-black'>Select your program <span className="text-[#D1180C]">*</span></label>
              <select className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                <option>Please Select...</option>
                <option>AI</option>
                <option>Cybersecurity</option>
                <option>Digital Marketing</option>
                <option>Full Stack Development</option>
                <option>Data Analytics</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-10">
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-[400] text-black'>HOW DID YOU HEAR ABOUT OUR PROGRAM <span className="text-[#D1180C]">*</span></label>
                <select className='border border-gray-300 bg-white text-[#67706B] p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                  <option>Please Select...</option>
                  <option>Social Media</option>
                  <option>Friend or Family</option>
                  <option>Online Search</option>
                  <option>Advertisement</option>
                  <option>Other</option>
                </select>
              </div>

              <button className='bg-[#5E0BD1] text-white py-2.5 font-[380] rounded-md w-full md:w-60'>Enrol Now</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Hero 10 */}
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



  {/* Contact Section */}
  <div className="bg-gradient-to-r from-[#60070B] to-[#9C0E76] flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 px-6 md:px-20 py-10 text-white">
    <p className="text-center md:text-left text-[14px] sm:text-[15px] md:text-[16px] max-w-lg">
      Send us a message at info@zeplusacademy.com or chat with a Zeplus Advisor for instant guidance.
    </p>
    
    <img src={StraightLine} alt="line" className="hidden md:block" />

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-center items-center">
      <a
        href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Teen%20Program%20at%20Zeplus%20Academy."
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
      <a href='#programs' className="flex items-center justify-center w-full sm:w-[200px] h-[40px] border-2 border-[#6C27FF] bg-white text-[#6C27FF] font-semibold font-inter text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#6C27FF] hover:text-white transition-all duration-200 whitespace-nowrap">
        Explore Courses
      </a>
    </div>
  </div>


    


    </div>
  )
}

export default Tech4teen 