import logo from '../assets/img/logo.svg'
import exitIcon from '../assets/img/exit.png'
import menuIcon from '../assets/img/menu.png'
import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!mobileRef.current) return
      if (e.target instanceof Node) {
        // ignore clicks that happen inside mobile panel or on the toggle button itself
        if (mobileRef.current.contains(e.target)) return
        if (toggleRef.current && toggleRef.current.contains(e.target)) return
        setMobileOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <section className='w-full border-b h-20 border-b-gray-300 bg-[#f7e3e3] font-poppins sticky top-0 z-50'>
      <nav className='md:max-w-7xl w-full mx-auto text-[16.5px]'>
        <div className='flex items-center justify-between md:px-0 px-4 py-5 w-full text-sm'>
          {/* Left: logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={logo} alt='logo' className='h-8 w-39 object-contain' />
            </Link>
          </div>

          {/* Center: main links (centered on md+) */}
          <div className='hidden md:flex flex-1 justify-center space-x-8'>
            {/* Courses with dropdown */}
            <CoursesDropdown />

            <NavLink to='/tech4teen' className={({ isActive }) => `font-poppins underline-offset-2 ${isActive ? 'text-[#650917]' : 'text-black'} hover:underline hover:decoration-[#650917]`}>Tech4Teen</NavLink>
            <a href="#testimonials"
              className="font-poppins text-black underline-offset-2 hover:underline hover:decoration-[#650917]">  Testimonials</a>


            <PartnersDropdown />
          </div>

          {/* Right: actions (aligned right on md+) */}
          <div className='hidden md:flex items-center space-x-6'>
            <a 
              href="https://wa.me/2348123456789?text=Hello%20I%20am%20interested%20in%20your%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline-offset-2 text-[#5e0bd1] hover:underline hover:decoration-[#650917]"
            >
              Contact Us
            </a>

            <a href="#apply-form" className='bg-[#5e0bd1] py-2 px-4 text-white rounded text-sm'>
  Apply Now
</a>


          </div>

          {/* Mobile: hamburger */}
          <div className='md:hidden flex items-center'>
            <button 
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
              ref={toggleRef}
              className='w-10 h-10 p-2 rounded-md inline-flex items-center justify-center  '
            >
              <span className='relative w-6 h-6 block'>
                <img src={menuIcon} alt='open' className={`absolute inset-0 w-6 h-6 object-contain transition-opacity duration-150 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                <img src={exitIcon} alt='close' className={`absolute inset-0 w-6 h-6 object-contain transition-opacity duration-150 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          ref={mobileRef}
          className={`md:hidden fixed inset-x-0 top-20 z-50 ${mobileOpen ? 'max-h-[50vh] visible' : 'max-h-0 overflow-hidden invisible'}`}
        >
          <div className='pt-6 px-6 py-6 space- bg-[#60070B] text-white rounded-b-md overflow-auto' style={{ maxHeight: '50vh' }}>
            <CoursesDropdownMobile onNavigate={() => setMobileOpen(false)} />
            <Link to='/tech4teen' onClick={() => setMobileOpen(false)} className='block py-2 text-white'>Tech4Teen</Link>
            <a href="#testimonials" onClick={() => setMobileOpen(false)}
              className="block py-2 text-white underline-offset-2 hover:underline hover:decoration-[#650917]"> Testimonials
            </a>

            <PartnersDropdownMobile onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar

function CoursesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current)
        closeTimer.current = undefined
      }
    }
  }, [])

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  const isInside = (node: Node | null, target: EventTarget | null) => {
    return Boolean(node && target instanceof Node && node.contains(target))
  }

  return (
    <div className='relative cursor-pointer' ref={ref}>
      <button
        aria-haspopup='true'
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => { setOpen(v => !v) }}
        onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false) } }}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the menu, don't close
          if (isInside(menuRef.current, e.relatedTarget)) return
          // delay close slightly to allow smooth movement into menu
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className='flex items-center space-x-1 focus:outline-none cursor-pointer'
      >
        <span className='cursor-pointer'>Courses</span>
        <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div
        role='menu'
        aria-label='Courses'
        ref={menuRef}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the button, don't close
          if (isInside(buttonRef.current, e.relatedTarget)) return
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className={
          `absolute left-0 top-full z-50 w-56 bg-[#F7E3E3] border border-gray-200 rounded shadow-lg transition-all duration-150 ` +
          (open ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none')
        }
      >
        <div className='py-2 '>
          <Link to='/uiux' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700  0' role='menuitem'>UI/UX Design</Link>
          <Link to='/data-analytics' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>Data Analytics</Link>
          <Link to='/full-stack' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>Full Stack Development</Link>
           <Link to='/cybersecurity' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>Cybersecurity</Link>
            <Link to='/digital' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>Digital Marketing</Link>
             <Link to='/aimachine' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>AI & Machine Learning</Link>
        </div>
      </div>
    </div>
  )
}

function CoursesDropdownMobile({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className='w-full flex items-center space-x-1 focus:outline-none cursor-pointer text-white'
      >
        <span>Courses</span>
        <svg className={`w-4 h-4 transform ${open ? 'rotate-180' : ''}`} viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div className={`${open ? 'block' : 'hidden'} pl-4 w-[40%]`}>
        <Link to='/uiux' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white'>UI/UX</Link>
        <Link to='/full-stack' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white whitespace-nowrap'>Web Development</Link>
        <Link to='/data-analytics' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white whitespace-nowrap'>Data Analytics</Link>
        <Link to='/cybersecurity' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white'>Cybersecurity</Link>
        <Link to='/aimachine' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white'>AI & Machine Learning</Link>
        <Link to='/digital' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white'>Digital Marketing</Link>
      </div>
    </div>
  )
}



function PartnersDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current)
        closeTimer.current = undefined
      }
    }
  }, [])

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  const isInside = (node: Node | null, target: EventTarget | null) => {
    return Boolean(node && target instanceof Node && node.contains(target))
  }

  return (
    <div className='relative cursor-pointer' ref={ref}>
      <button
        aria-haspopup='true'
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => { setOpen(v => !v) }}
        onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false) } }}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the menu, don't close
          if (isInside(menuRef.current, e.relatedTarget)) return
          // delay close slightly to allow smooth movement into menu
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className='flex items-center space-x-1 focus:outline-none cursor-pointer'
      >
        <span className='cursor-pointer'>Partners</span>
        <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div
        role='menu'
        aria-label='Courses'
        ref={menuRef}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the button, don't close
          if (isInside(buttonRef.current, e.relatedTarget)) return
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className={
          `absolute left-0 top-full z-50 w-56 bg-[#F7E3E3] border border-gray-200 rounded shadow-lg transition-all duration-150 ` +
          (open ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none')
        }
      >
          <div className='py-2 '>
            <Link to='/become-a-partner' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700  0' role='menuitem'>Become a Partner</Link>
          <Link to='/school-partnership' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-gray-700 ' role='menuitem'>School Partnership</Link>

        </div>
      </div>
    </div>
  )
}

function PartnersDropdownMobile({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className='w-full flex items-center space-x-1 focus:outline-none cursor-pointer text-white'
      >
        <span>Partners</span>
        <svg className={`w-4 h-4 transform ${open ? 'rotate-180' : ''}`} viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div className={`${open ? 'block' : 'hidden'} pl-4 w-[40%]`}>
        <Link to='/become-a-partner' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white whitespace-nowrap'>Become a Partner</Link>
        <Link to='/school-partnership' onClick={() => { setOpen(false); onNavigate && onNavigate() }} className='block py-1 text-white whitespace-nowrap'>School Partnership</Link>

      </div>
    </div>
  )
}