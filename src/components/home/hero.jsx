import Button from "../ui/button";

function Hero() {
  return (
    <div className="flex px-5 min-[550px]:px-10 py-[10px] items-center hero min-[900px]:h-[100vh]">
      <div className="max-w-[1200px] pt-[150px] mx-auto min-[600px]:p-4 flex min-[900px]:flex-row flex-col justify-between items-center gap-6 min-[600px]:gap-8 min-[900px]:gap-[228px]">
        <div>
          <h1 className="text-white mb-3 min-[550px]:mb-6 text-[38px] min-[550px]:text-[56px] font-[600] leading-[120%]">
            Ishonchli yuk tashish – sizga kerakli joyga, kerakli vaqtda!
          </h1>
          <p className="text-[#FFFFFFCC] text-[18px] font-[500] leading-[150%]">
            OMON-TRANS – 20 yillik tajribaga ega xalqaro logistika kompaniyasi.
            Biz yuklaringizni xavfsiz, tez va samarali yetkazamiz.
          </p>
        </div>
        <form className="bg-[#fff] rounded-[12px] p-6 min-[900px]:max-w-[384px] w-full">
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
