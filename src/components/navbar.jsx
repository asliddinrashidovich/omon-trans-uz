import { Select } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import Sidebar from "./sidebar";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "react-i18next";
import { navbarData } from "../data/data";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openSidebar, setOpenSideBar] = useState(false)
  const url = useLocation()
  const {t} = useTranslation()
  const navbarItems = navbarData(t)
  const pathname = "/" + url.pathname.split("/")[1]
  useEffect(() => {
        const handleScroll = () => {setScrolled(window.scrollY > 50);};
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)};
    }, []);

  const getTextColor = (path) => {
    if(scrolled) {
      if(pathname === path) {
        return "text-[#3E8EF4]"
      } else if(openSidebar) {
        return "text-[#1A1A1A]"
      } else {
        return "text-[#fff]"
      }
    } else {
      if(pathname === path) {
        return "text-[#3E8EF4]"
      } else {
        return "text-[#1A1A1A]"
      }
    }
  }
  const getSpanWidth = (path) => {
    if(pathname === path) {
      return "w-full"
    } else {
      return "w-0"
    }
  }
  return (
    <div className="py-6 px-5 fixed w-full">
      <div className={`max-w-[1200px] mx-auto ${scrolled ? "bg-black/40" : ""}  backdrop-blur-[4px] rounded-[12px] p-4 flex justify-between items-center`}>
        <a href="/" className="flex items-center gap-[10px]">
          <img src="/images/logo-mini.svg" alt="main-logo" />
          <p className={`font-[700] text-[18px] leading-[120%] ${scrolled ? "text-white" : "text-primary"}`}>OMON TRANS</p>
        </a>
        <ul className="hidden min-[950px]:flex items-center gap-6">
          {navbarItems.map(item => (
            <li key={item.slug} className=" cursor-pointer relative  inline-block group">
              <Link className={`p-[6px] font-[400] translate-all duration-300  text-[16px] ${getTextColor(item.slug)} group-hover:text-[#3E8EF4]  leading-[150%]`} to={item.slug}>{item.title}</Link>
              <span className={`absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] ${getSpanWidth(item.slug)}  bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}></span>
            </li>
          ))}
        </ul>
        <div className="min-[950px]:flex hidden">
          <LanguageSelector/>
        </div>
        <div onClick={() => setOpenSideBar(true)} className="w-[42px] h-[42px] min-[950px]:hidden flex  rounded-[12px] bg-black/5 cursor-pointer items-center justify-center">
          <img src="/images/menubar-dark.svg" alt="menu-bar" />
        </div>
      </div>
      <Sidebar getSpanWidth={getSpanWidth} getTextColor={getTextColor} setOpenSideBar={setOpenSideBar} openSidebar={openSidebar}/>
    </div>
  )
}

export default Navbar