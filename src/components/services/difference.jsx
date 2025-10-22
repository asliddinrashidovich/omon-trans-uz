
function Difference() {
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex gap-6 items-start mb-10">
        <div className="flex flex-row min-[900px]:flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="header6">Nima bizni farqlaydi</h3>
          </div>
          <h2 className="header1 text-primary">
            Bizning afzalliklar — ishonchli hamkorlik asosi
          </h2>
        </div>
        <div className="max-w-[486px] grid grid-cols-2 gap-6">
          <div className="rounded-[12px] bg-secondary p-4">
            <h5 className="header5 text-primary mb-2">24/7 mijozlarni qo‘llab-quvvatlash</h5>
            <p className="paragraph-md text-secondary">Biz bilan bog‘lanish har doim oson — jamoamiz kun-u tun yordam berishga tayyor.</p>
          </div>
          <div className="rounded-[12px] bg-secondary p-4">
            <h5 className="header5 text-primary mb-2">Tez va aniqlik bilan yetkazish</h5>
            <p className="paragraph-md text-secondary">Har bir buyurtma puxta rejalashtiriladi va manzilga o‘z vaqtida yetkaziladi.</p>
          </div>
          <div className="rounded-[12px] bg-secondary p-4">
            <h5 className="header5 text-primary mb-2">Xavfsiz tashish tizimi</h5>
            <p className="paragraph-md text-secondary">Har bir yuk monitoring ostida bo‘ladi, yo‘lda to‘liq nazorat kafolatlanadi.</p>
          </div>
          <div className="rounded-[12px] bg-secondary p-4">
            <h5 className="header5 text-primary mb-2">Moslashuvchan tariflar</h5>
            <p className="paragraph-md text-secondary">Mijoz ehtiyojiga mos narx va shartlar — shaffof va qulay hamkorlik uchun.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Difference;
