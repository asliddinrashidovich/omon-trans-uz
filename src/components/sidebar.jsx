import { X } from "lucide-react"
import { Link } from "react-router-dom"
import LanguageSelector from "./languageSelector"
import { useTranslation } from "react-i18next"
import { navbarData } from "../data/data"

function Sidebar({setOpenSideBar, openSidebar, getTextColor, getSpanWidth}) {
    const {t} = useTranslation()
    const navbarItems = navbarData(t)
  return (
    <div className="min-[1250px]:hidden flex">
        <div className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-[100%]"} transition-liniar duration-200  right-0 bottom-0 menu bg-[#fff] w-full md:w-[40%] z-30 p-[37px]`}>
            <div className="flex items-center justify-between">
                <LanguageSelector/>
                <button onClick={() => setOpenSideBar(false)}> 
                    <X className="cursor-pointer"/>
                </button>
            </div>
            <ul className="flex flex-col items-center gap-6 mt-7">
                {navbarItems.map(item => (
                    <li key={item.slug} className="cursor-pointer relative  inline-block group">
                        <Link className={`p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor(item.slug)}`} to={item.slug}>{item.title}</Link>
                        <span className={`absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full ${getSpanWidth(item.slug)}`}></span>
                    </li>
                ))}
            </ul>
        </div>
        {openSidebar && <div onClick={() => setOpenSideBar(false)} className="fixed top-0 left-0 bottom-0 bg-black/50 w-[100%] brightness-50 z-20"></div>}
        </div>
  )
}

export default Sidebar