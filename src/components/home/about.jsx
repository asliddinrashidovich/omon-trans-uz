import Button from "../ui/button";

function AboutSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[600px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto bg-[#FFFFFF0D] flex flex-col min-[900px]:flex-row justify-between gap-6 min-[900px]:gap-[237px] mb-10">
        <div className="flex flex-row min-[900px]:flex-col justify-between">
          <div className="flex items-center gap-2 ">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px]">
              Biz haqimizda
            </h3>
          </div>
          <Button className={"max-[600px]:hidden"}>Batafsil</Button>
        </div>
        <div className="max-w-[792px]">
          <h2 className="text-primary text-[32px] min-[600px]:text-[48px] font-[500] leading-[120%] mb-6">
            <span className="text-secondary">Biz faqat</span> yuk tashimaymiz{" "}
            <span className="text-secondary">— biz</span> ishonch yetkazamiz.
          </h2>
          <Button className={"min-[600px]:hidden mb-7"}>Batafsil</Button>
          <p className="FONT-[400PX] min-[600px]:font-[500] text-[16px] min-[600px]:text-[18px] text-secondary leading-[150%]">
            OMON-TRANS — logistika sohasida yillar davomida mijozlar ishonchini
            qozongan kompaniya. Bizning maqsadimiz — yuklaringizni xavfsiz, tez
            va optimal narxda manzilga yetkazish. Innovatsion texnologiyalar
            yordamida har bir mijoz uchun individual yechimlar taklif qilamiz.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto bg-[#FFFFFF0D] flex min-[600px]:flex-row flex-col-reverse justify-between gap-4 min-[550px]:gap-[142px]">
        <div className="flex min-[550px]:hidden min-[900px]:flex flex-col justify-end gap-2">
          <div className="rounded-[60px] bg-white w-full flex items-center gap-3 p-2">
            <div className="bg-secondary w-10 h-10 text-center rounded-full flex items-center justify-between">
              <p className="text-primary text-center text-third text-[21px] mx-auto">
                1
              </p>
            </div>
            <h4 className="text-[16px] leading-[130%] font-semibold">
              Professional yondashuv
            </h4>
          </div>
          <div className="rounded-[60px] bg-white w-full flex items-center gap-3 p-2">
            <div className="bg-secondary w-10 h-10 text-center rounded-full flex items-center justify-between">
              <p className="text-primary text-center text-third text-[21px] mx-auto">
                2
              </p>
            </div>
            <h4 className="text-[16px] leading-[130%] font-semibold">
              Ishonchli tajriba
            </h4>
          </div>
          <div className="rounded-[60px] bg-white w-full flex items-center gap-3 p-2">
            <div className="bg-secondary w-10 h-10 text-center rounded-full flex items-center justify-between">
              <p className="text-primary text-center text-third text-[21px] mx-auto">
                3
              </p>
            </div>
            <h4 className="text-[16px] leading-[130%] font-semibold">
              Innovatsion yechimlar
            </h4>
          </div>
        </div>
        <div className="rounded-[12px] min-[900px]:max-w-[792px] w-full">
          <img src="/images/image.png" alt="truck" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
