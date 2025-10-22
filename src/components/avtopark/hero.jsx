function Hero() {
  return (
    <div className="flex px-5 min-[550px]:px-10 pt-[150px] pb-15">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6">
        <div className="rounded-[8px] p-10 bg-secondary flex items-center justify-center">
          <div>
            <h1 className="text-primary header1 mb-6">
              Bizning avtopark – ishonchli yetkazuv garantiyasi
            </h1>
            <p className="text-secondary paragraph-lg">
              Zamonaviy va ishonchli avtoparkimiz yuklaringizni xavfsiz va o‘z vaqtida yetkazishni ta’minlaydi. Har bir transport vositasi muntazam texnik ko‘rikdan o‘tadi.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/avtopark/avtoPark-bg.png" alt="services" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
