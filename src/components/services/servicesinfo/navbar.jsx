import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="py-6 px-5 fixed w-full">
      <div className="max-w-[1200px] mx-auto bg-[#FFFFFF0D] backdrop-blur-[4px] rounded-[12px] p-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-[10px]">
          <img src="/images/logo-mini.svg" alt="main-logo" />
          <p className="font-[700] text-[18px] leading-[120%] text-white">OMON TRANS</p>
        </a>
        <ul className="hidden min-[950px]:flex items-center gap-6">
          <li className=" cursor-pointer relative  inline-block group">
            <Link className="p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] text-white leading-[150%]" to={"/"}>Bosh sahifa</Link>
            <span className="absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link className="p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] text-white leading-[150%]" to={"/about"}>Biz haqimizda</Link>
            <span className="absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link className="p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] text-white leading-[150%]" to={"/services"}>Xizmatlar</Link>
            <span className="absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link className="p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] text-white leading-[150%]" to={"/blog"}>Blog</Link>
            <span className="absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link className="p-[6px] font-[400] translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] text-white leading-[150%]" to={"/avtopark"}>AvtoPark</Link>
            <span className="absolute left-0 bottom-[-2px] rounded-[2px] h-[1px] w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <select className="min-[950px]:flex hidden" name="lang" id="lang">
          <option value="uz">uz</option>
          <option value="ru">ru</option>
        </select>
        <div className="w-[42px] h-[42px] min-[950px]:hidden flex  rounded-[12px] bg-white/20 cursor-pointer items-center justify-center">
          <img src="/images/menu-bar.svg" alt="menu-bar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar