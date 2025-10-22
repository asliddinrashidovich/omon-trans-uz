import Button from "../ui/button"
function AboutBlog() {
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex justify-between items-start">
        <div>
            <h2 className="max-w-[676px] header2 text-primary mb-6">Sizning biznesingiz uchun ishonchli va samarali transport</h2>
            <p className="max-w-[676px] paragraph-lg text-secondary mb-10">Tovarlarni kerakli joyga xavfsiz va o‘z vaqtida yetkazish — bizning ustuvor vazifamiz. Biz mahalliy va xalqaro miqyosda har qanday hajmdagi yuklar uchun ishonchli, samarali va nazorat ostidagi transport yechimlarini taqdim etamiz.</p>
            <h5 className="py-[11px] px-5 border-l-[2px] border-main header5 text-primary mb-10">Logistika nafaqat tovarlarni ko'chirish - bu biznesni aqlli, moslashtirilgan echimlar bilan oldinga siljitishdir."</h5>
            <h3 className="header3 text-primary mb-6">Sizning biznesingiz uchun mo'ljallangan</h3>
            <ul className="mb-10">
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Shaxsiylashtirilgan transport rejalari - Ixtisoslashgan yuklar uchun moslashtirilgan yuk echimlari.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Moslashuvchan saqlash va saqlash - inventarizatsiya va tarqatish ehtiyojlaringizga mos keladigan kengaytiriladigan variantlar.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Kengaytirilgan kuzatuv va hisobot - to'liq ta'minot zanjiri ko'rinishi uchun real vaqtda tushunchalar.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Optimallashtirilgan ta'minot zanjiri strategiyalari - samaradorlikni oshirish va xarajatlarni kamaytirish uchun moslashtirilgan echimlar.</span></li>
            </ul>
            <h3 className="header3 text-primary mb-6">Nima uchun logistika yechimlarimizni tanlaysiz?</h3>
            <ul className="mb-10">
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Sohaga oid ekspertiza - biznes sektoringiz uchun mo'ljallangan echimlar.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>To'liq ta'minot zanjiri nazorati - real vaqt rejimida tushuncha va kuzatuvga ega bo'ling.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Kengaytiriladigan va moslashuvchan xizmatlar - talab va bozor sharoitlarining o'zgarishiga moslash.</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>Tejamkor logistika - samarasizlikni kamaytirish va rentabellikni maksimal darajada oshirish.</span></li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-[12px] max-w-[408px] w-full">
            <h3 className="header3 text-primary mb-7">Savollaringiz bormi?</h3>
            <div className="flex items-center gap-3 mb-6">
                <img src="/images/blog/loc.svg" alt="location" />
                <p className="paragraph-lg text-primary">Toshkent, O’zbekiston</p>
            </div>
            <div className="flex items-center gap-3 mb-6">
                <img src="/images/blog/mail.svg" alt="mail" />
                <p className="paragraph-lg text-primary">omontrans@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mb-7">
                <img src="/images/blog/phone.svg" alt="phone" />
                <p className="paragraph-lg text-primary">+998 (90) 852-30-79</p>
            </div>
            <Button>Qo’ngi’roq qilish</Button>
        </div>
      </div>
    </div>
  )
}

export default AboutBlog
