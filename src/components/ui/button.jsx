import { ArrowUpRight } from "lucide-react"

function Button({className, children, icon = true, type="primary"}) {
  if(type == "secondary") {
    return (
      <button className={`${className} bg-secondary border-[1px] border-[#3E8EF4] text-third font-[600] text-[16px] leading-[130%] py-4 px-8 cursor-pointer transition-all duration-200 rounded-[60px] flex items-center justify-center gap-[12px]`}>
          {children}
          {icon && <ArrowUpRight size={18} className="text-third"/>}
      </button>
    )
  } 
  return (
    <button className={`${className} bg-primary text-white font-[600] text-[16px] leading-[130%] py-4 px-8 cursor-pointer transition-all duration-200 rounded-[60px] flex items-center justify-center gap-[12px]`}>
        {children}
        {icon && <ArrowUpRight size={18}/>}
    </button>
  )

}

export default Button