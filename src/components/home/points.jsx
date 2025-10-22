function PointsSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="header6">Fikrlar</h3>
          </div>
          <h2 className="header2 mb-6 text-primary">
            Mijozlar biz haqimizda nima deydi
          </h2>
          <p className="font-[500] text-[18px] leading-[150%] mb-8 text-secondary">
            Logistika sohasida ajoyib xizmat va ishonchlilik, yukingiz samarali
            boshqarilishini va o'z vaqtida yetkazib berilishini ta'minlaydi.
          </p>
          <div className="flex gap-4 items-center ">
            <div className="p-1">
              <img src="/images/arrow-up.svg" alt="arrow-up" />
            </div>
            <div className="p-1">
              <img src="/images/arrow-down-big.svg" alt="arrow-up" />
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-[5px] h-full flex flex-col gap-6">
            <div className="bg-primary cursor-pointer w-[5px] rounded-[60px] h-full"></div>
            <div className="bg-[#E5E7EB] cursor-pointer w-[5px] rounded-[60px] h-full"></div>
            <div className="bg-[#E5E7EB] cursor-pointer w-[5px] rounded-[60px] h-full"></div>
            <div className="bg-[#E5E7EB] cursor-pointer w-[5px] rounded-[60px] h-full"></div>
            <div className="bg-[#E5E7EB] cursor-pointer w-[5px] rounded-[60px] h-full"></div>
          </div>
          <div className="flex w-full flex-col gap-6">
            <div className="p-6 rounded-[12px] bg-white">
              <div className="flex justify-between items-start mb-5">
                <img src="/images/quoto.svg" alt="quoto" />
                <p className="text-[14px] leading-[150%] font-[400] text-secondary">
                  25 May 2025
                </p>
              </div>
              <p className="text-[16px] leading-[150%] font-[400] text-secondary mb-5">
                “Yuklarimizni doim o‘z vaqtida yetkazishadi. Xizmat sifati va
                aloqa madaniyati juda yuqori — ishonch bilan hamkorlik qilamiz.”
              </p>
              <p className="text-[16px] leading-[150%] font-[400] text-secondary mb-[10px]">
                Jasur Karimov
              </p>
              <h4 className="text-[20px] leading-[130%] font-[500] text-secondary">
                Global Trade
              </h4>
            </div>
            <div className="p-6 rounded-[12px] bg-white">
              <div className="flex justify-between items-start mb-5">
                <img src="/images/quoto.svg" alt="quoto" />
                <p className="text-[14px] leading-[150%] font-[400] text-secondary">
                  1 Iyun 2025
                </p>
              </div>
              <p className="text-[16px] leading-[150%] font-[400] text-secondary mb-5">
                “Har bir yuk uchun kuzatuv tizimi juda qulay. Muhim yuklarimizni
                bemalol ishonib topshiramiz.”
              </p>
              <p className="text-[16px] leading-[150%] font-[400] text-secondary mb-[10px]">
                Malika Raxmonova
              </p>
              <h4 className="text-[20px] leading-[130%] font-[500] text-secondary">
                Asia Textile
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointsSection;
