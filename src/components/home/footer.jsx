function Footer() {
  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6 mb-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-start flex-col">
            <h5 className="text-secondary text-[16px] font-[400] leading-[150%] mb-4">
              Xizmatlar
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Shaharlararo tashish
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Xalqaro yuk
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Tezkor yetkazish
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Maxsus yuklar
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Sklad xizmati
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary text-[16px] font-[400] leading-[150%] mb-4">
              Sahifalar
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Bosh sahifa
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Biz haqimizda
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Xizmatlar
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Blog
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Avtopark
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary text-[16px] font-[400] leading-[150%] mb-4">
              Aloqa
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                +998 (xx) xxx-xx-xx
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                omontrans@gmail.com
              </li>
              <li className="text-primary cursor-pointer text-[18px] font-[500] leading-[150%]">
                Toshkent, O’zbekiston
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary text-[16px] font-[400] leading-[150%] mb-4">
              Ijtimoiy tarmoqlar
            </h5>
            <div className="flex gap-2">
              <div className="p-[2px]">
                <img src="/images/instagram.svg" alt="instagram" />
              </div>
              <div className="p-[2px]">
                <img src="/images/telegram.svg" alt="instagram" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="flex gap-[10px] items-center mb-6">
            <img src="/images/logo-mini.svg" alt="logo" />
            <p className="font-[700] text-primary text-[18px] leading-[120%]">
              OMON TRANS
            </p>
          </a>
          <h2 className="text-primary font-[500] text-[48px] leading-[120%]">
            Sizning yukingiz – bizning mas’uliyatimiz
          </h2>
        </div>
      </div>
      <hr className="border-main max-w-[1200px] mx-auto mb-10" />
      <div className="max-w-[1200px] mx-auto flex justify-between gap-6">
        <p className="font-[400] text-[16px] leading-[150%] text-secondary">
          © 2025 OMON-TRANS. Barcha huquqlar himoyalangan.
        </p>
        <p className="font-[400] text-[16px] leading-[150%] text-secondary">
          Design and developed by Creva Agenc
        </p>
      </div>
    </div>
  );
}

export default Footer;
