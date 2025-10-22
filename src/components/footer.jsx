function Footer() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-[900px]:grid-cols-1 gap-6  mb-8 min-[550px]:mb-10">
        <div className="max-w-[624px] grid grid-cols-1 min-[500px]:grid-cols-2 gap-6">
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              Xizmatlar
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Shaharlararo tashish
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Xalqaro yuk
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Tezkor yetkazish
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Maxsus yuklar
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Sklad xizmati
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              Sahifalar
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Bosh sahifa
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Biz haqimizda
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Xizmatlar
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Blog
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Avtopark
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              Aloqa
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                +998 (xx) xxx-xx-xx
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                omontrans@gmail.com
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Toshkent, O’zbekiston
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              Ijtimoiy tarmoqlar
            </h5>
            <div className="flex gap-2">
              <div className="p-[2px] cursor-pointer">
                <img src="/images/instagram.svg" alt="instagram" />
              </div>
              <div className="p-[2px] cursor-pointer">
                <img src="/images/telegram.svg" alt="instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-[900px]:row-start-1">
          <a href="#" className="flex gap-[10px] items-center mb-6">
            <img src="/images/logo-mini.svg" alt="logo" />
            <p className="font-[700] text-primary text-[18px] leading-[120%]">
              OMON TRANS
            </p>
          </a>
          <h2 className="text-primary header2">
            Sizning yukingiz – bizning mas’uliyatimiz
          </h2>
        </div>
      </div>
      <hr className="border-main max-w-[1200px] mx-auto mb-8 min-[550px]:mb-10" />
      <div className="max-w-[1200px] mx-auto flex min-[600px]:flex-row flex-col justify-between gap-4 min-[550px]:gap-6">
        <p className="paragraph-md text-secondary">
          © 2025 OMON-TRANS. Barcha huquqlar himoyalangan.
        </p>
        <p className="paragraph-md text-secondary">
          Design and developed by Creva Agenc
        </p>
      </div>
    </div>
  );
}

export default Footer;
