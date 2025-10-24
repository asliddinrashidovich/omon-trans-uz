import { ArrowUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Button({className, children, url="#", icon = true, type="primary"}) {
  const navigate = useNavigate()
  if(type == "secondary") {
    return (
      <button onClick={() => navigate(url)} className={`${className} bg-secondary border-[1px] border-[#3E8EF4] text-third font-[600] text-[16px] leading-[130%] py-3 min-[600px]:py-4 px-6 min-[600px]:px-8 cursor-pointer transition-all duration-200 rounded-[60px] flex items-center justify-center gap-[12px]`}>
          {children}
          {icon && <ArrowUpRight size={18} className="text-third"/>}
      </button>
    )
  } 
  return (
    <button onClick={() => navigate(url)} className={`${className} bg-primary text-white font-[600] text-[16px] leading-[130%] py-3 min-[600px]:py-4 px-6 min-[600px]:px-8 cursor-pointer transition-all duration-200 rounded-[60px] flex items-center justify-center gap-[12px]`}>
        {children}
        {icon && <ArrowUpRight size={18}/>}
    </button>
  )

}

export default Button