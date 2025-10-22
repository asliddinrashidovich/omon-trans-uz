function Hero() {
  return (
    <div className="flex px-5 min-[550px]:px-10 pt-[150px] pb-15">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6">
        <div className="rounded-[8px] p-10 bg-secondary flex items-center justify-center">
          <div>
            <h1 className="text-primary header1 mb-6">
              Harakatdagi ishonch — bizning xizmatlarimiz
            </h1>
            <p className="text-secondary paragraph-lg">
              Biz har bir mijoz uchun moslashtirilgan logistika yechimlarini taqdim etamiz. Mahalliydan xalqaro tashishgacha — yuklaringizni xavfsiz, tez va muammosiz yetkazamiz.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/services/services-bg.png" alt="services" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
