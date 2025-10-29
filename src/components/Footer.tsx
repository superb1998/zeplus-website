import WhiteLogo from "../assets/img/logo-white.png"
import Twitter from "../assets/img/twitter.png"
import Instagram from "../assets/img/instagram.png"
import Linkedin from "../assets/img/linkedin.png"
import Youtube from "../assets/img/youtube.png"


const Footer = () => {
  return (
    <section>
  

  {/* Footer */}
  <div className='bg-[#121212] px-10 py-20 flex flex-col items-center'>
    <img src={WhiteLogo} alt="logo" className="w-[130px] h-[30px] mb-6"/>
    <div className="flex gap-3">
      <div className="bg-white w-[30px] h-[30px] flex items-center justify-center">
        <img src={Twitter} alt="twitter" className="w-[14px] h-[14px]" />
      </div>
      <div className="bg-white w-[30px] h-[30px] flex items-center justify-center">
        <img src={Instagram} alt="instagram" className="w-[14px] h-[14px]" />
      </div>
      <div className="bg-white w-[30px] h-[30px] flex items-center justify-center">
        <img src={Linkedin} alt="linkedin" className="w-[14px] h-[14px]" />
      </div>
      <div className="bg-white w-[30px] h-[30px] flex items-center justify-center">
        <img src={Youtube} alt="youtube" className="w-[14px] h-[14px]" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Footer