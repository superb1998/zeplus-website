import { Routes, Route } from 'react-router-dom'
// COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppBubble from './components/WhatsAppBubble'

// PAGES
import Home from './pages/Home'
import Uiux from './pages/Uiux'
import Fullstack from './pages/Full-stack'
import DataAnalytics from './pages/Data-analytics'
import SchoolPartnership from './pages/School-partnership'
import Aimachine from './pages/Aimachine'
import Digital from './pages/Digital'
import Cybersecurity from './pages/Cybersecurity'
import Tech4teen from './pages/Tech4teen'


const App = () => {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/full-stack" element={<Fullstack />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/aimachine" element={<Aimachine />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />


        {/* pages */}
        <Route path="/school-partnership" element={<SchoolPartnership />} />
        <Route path="/tech4teen" element={<Tech4teen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App