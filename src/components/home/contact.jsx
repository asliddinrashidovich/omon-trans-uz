import Button from "../ui/button";

function ContactSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[950px]:grid-cols-2 gap-6">
        <div className="flex w-full rounded-[12px] max-[650px]:h-[360px] max-[950px]:h-[500px] overflow-hidden">
          <img src="/images/img.png" className="object-cover max-[950px]:object-bottom-left w-full" alt="truck" />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">Aloqa</h6>
          </div>
          <h2 className="header2 text-primary mb-6">
            Biz bilan bog‘laning
          </h2>
          <p className="paragraph-lg text-secondary mb-6">
            Savollaringiz bormi? Mutaxassislarimiz sizga tez orada javob beradi.
          </p>

          <form className=" w-full">
            <label htmlFor="name">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                Ism
              </span>
              <input
                type="text"
                placeholder="Ismingizni kiriting"
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              />
            </label>
            <label htmlFor="phone">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                Telefon raqam
              </span>
              <input
                type="text"
                placeholder="+998-94-609-24-01"
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              />
            </label>
            <label htmlFor="name">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                Izoh
              </span>
              <textarea
                type="text"
                placeholder="Savollaringiz bo‘lsa, shu yerga yozib qoldiring..."
                rows={6}
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              ></textarea>
            </label>
            <Button className={"max-[950px]:w-full"}>
              Yuborish
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
