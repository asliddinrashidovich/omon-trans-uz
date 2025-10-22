function Hero() {
  return (
    <div className="flex px-5 min-[550px]:px-10 pt-[150px] pb-15">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6">
        <div className="rounded-[8px] p-10 bg-secondary flex items-center justify-center">
          <div>
            <h1 className="text-primary header1 mb-6">
              Har bir yetkazuvda tezlik va ishonch
            </h1>
            <p className="text-secondary paragraph-lg">
              Biz mijozlarimizga xavfsiz, tezkor va ishonchli logistika
              yechimlarini taklif etamiz. Tajribali jamoamiz bilan yuk tashishni
              soddalashtirib, sizning biznesingizga vaqt va ishonch qo‘shamiz.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/about/about-bg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
