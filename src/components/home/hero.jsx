import Button from "../ui/button";

function Hero() {
  return (
    <div className="flex items-center hero h-[100vh]">
      <div className="max-w-[1200px] mx-auto p-4 flex justify-between items-center gap-[228px]">
        <div>
          <h1 className="text-white mb-[24px] text-[56px] font-[600] leading-[120%]">
            Ishonchli yuk tashish – sizga kerakli joyga, kerakli vaqtda!
          </h1>
          <p className="text-[#FFFFFFCC] text-[18px] font-[500] leading-[150%]">
            OMON-TRANS – 20 yillik tajribaga ega xalqaro logistika kompaniyasi.
            Biz yuklaringizni xavfsiz, tez va samarali yetkazamiz.
          </p>
        </div>
        <form className="bg-[#fff] rounded-[12px] p-6 max-w-[384px] w-full">
            <h2 className="text-primary mb-2 font-[500] text-[22px] leading-[130%]">Bog’lanish uchuh ariza qoldiring</h2>
            <p className="text-secondary text-[18px] font-[500] leading-[150%] mb-6">Yuk tashish kerakmi? Unda ariza qoldiring</p>
            <label htmlFor="name">
                <span className="text-secondary ml-[14px] font-[400] leading-[150%] text-[14px]">Ism</span>
                <input type="text" placeholder="Ismingizni kiriting" className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"/>
            </label>
            <label htmlFor="phone">
                <span className="text-secondary ml-[14px] font-[400] leading-[150%] text-[14px]">Telefon raqam</span>
                <input type="text" placeholder="+998-94-609-24-01" className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"/>
            </label>
            <Button className={"w-full"} icon={false}>Yuborish</Button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
