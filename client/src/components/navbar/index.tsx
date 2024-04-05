import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex h-24 items-center justify-between lg:container-lg px-4 lg:px-0">
      <div className="flex gap-4 items-center w-[60%]">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-8 object-cover" />
          <span className="font-bold text-[20px] sm:hidden md:block">
            UFOEstate
          </span>
        </div>
        <a href="" className="menu-item hidden sm:block">
          Home
        </a>
        <a href="" className="menu-item hidden sm:block">
          About
        </a>
        <a href="" className="menu-item hidden sm:block">
          Contacts
        </a>
        <a href="" className="menu-item hidden sm:block">
          Agents
        </a>
      </div>
      <div className="flex items-center justify-end w-[40%] px-4 md:bg-[#fcf5f3] h-full">
        <div className="hidden w-full sm:flex items-center justify-end h-full gap-2">
          <Button color="primary" variant="text">
            Sign In
          </Button>
          <Button color="primary" variant="contained">
            Sign Up
          </Button>
        </div>

        <div
          className="sm:hidden z-30"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <CloseIcon fontSize="large" className="text-white" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>

        <div
          className={`fixed bg-black h-screen w-[70%] transition-all duration-500 z-10 ${
            open ? 'right-0' : '-right-[70%]'
          } top-0 flex flex-col items-center justify-center gap-12 font-bold text-[24px]`}
        >
          <a href="" className="text-white">
            Home
          </a>
          <a href="" className="text-white">
            About
          </a>
          <a href="" className="text-white">
            Contacts
          </a>
          <a href="" className="text-white">
            Agents
          </a>
          <div className="flex flex-col items-center justify-center gap-4 px-8 w-full mt-8">
            <Button color="primary" fullWidth variant="contained">
              Sign Up
            </Button>
            <Button color="primary" fullWidth variant="text">
              Sign In
            </Button>
          </div>
        </div>
        <div
          onClick={() => setOpen(false)}
          className={`bg-black/20 h-screen w-[30%] z-30 ${
            open ? 'fixed' : 'hidden'
          } top-0 left-0 `}
        ></div>
      </div>
    </nav>
  )
}

export default Navbar
