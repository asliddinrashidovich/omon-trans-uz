import Button from "../ui/button";

function Services() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex justify-between flex-col min-[700px]:flex-row min-[700px]:gap-[185px] mb-10">
        <div className="flex  items-start  ">
          <div className="flex items-center gap-2 max-[700px]:mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">Xizmatlar</h6>
          </div>
        </div>
        <div className="max-w-[792px]  w-full">
          <h2 className="text-primary header2 mb-6">
            Biz yetkazib berish xizmatlarida ustunmiz
          </h2>
          <p className="paragraph-lg text-secondary ">
            Har bir ajoyib sayohat ilhom uchqunlari bilan boshlanadi va bizning
            sayohatimiz gavjum logistika sanoatining markazida yonadi. Omon
            Trans hikoyasi bizni yetakchi logistika hamkoriga aylantirgan
            ishtiyoq, qat'iyat va tinimsiz mukammallikka intilishdan biridir.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
        <div className="p-6 min-[700px]:p-10 rounded-[12px] bg-white grid grid-cols-1 min-[700px]:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="header3 text-primary mb-6">
              Shaharlararo yuk tashish
            </h3>
            <p className="paragraph-lg text-secondary mb-8">
              Yurt ichidagi barcha yo‘nalishlar bo‘ylab yuklaringizni xavfsiz va
              o‘z vaqtida yetkazamiz. Har bir jarayon puxta rejalashtirilib,
              sizga eng qulay logistika yechimini taqdim etamiz.
            </p>
            <Button>To’liq ma’lumot</Button>
          </div>
          <img
            src="/images/services/service-1.png"
            alt="services1"
            className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
          />
        </div>
        <div className="p-6 min-[700px]:p-10 rounded-[12px] bg-white flex flex-col-reverse min-[700px]:grid  min-[700px]:grid-cols-2 items-center gap-6">
          <img
            src="/images/services/service-2.png"
            alt="services1"
            className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
          />
          <div>
            <h3 className="header3 text-primary mb-6">Xalqaro yuk tashish</h3>
            <p className="paragraph-lg text-secondary mb-8">
              Chegara orti ham endi muammo emas — biz yuklaringizni xalqaro
              standartlarga muvofiq tashib, bojxona jarayonlarini
              soddalashtiramiz. Global hamkorlarimiz orqali tez va ishonchli
              xizmatni kafolatlaymiz.
            </p>
            <Button>To’liq ma’lumot</Button>
          </div>
        </div>
        <div className="p-6 min-[700px]:p-10 rounded-[12px] bg-white grid grid-cols-1 min-[700px]:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="header3 text-primary mb-6">
              Tezkor yetkazib berish
            </h3>
            <p className="paragraph-lg text-secondary mb-8">
              Zudlik bilan yetkazilishi kerak bo‘lgan yuklar uchun maxsus tezkor
              xizmatni taklif etamiz. Professional jamoamiz va
              optimallashtirilgan yo‘nalishlar orqali vaqtni tejang.
            </p>
            <Button>To’liq ma’lumot</Button>
          </div>
          <img
            src="/images/services/service-3.png"
            alt="services3"
            className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
          />
        </div>
        <div className="p-6 min-[700px]:p-10 rounded-[12px] bg-white flex flex-col-reverse min-[700px]:grid min-[700px]:grid-cols-2 items-center gap-6">
          <img
            src="/images/services/services-41.png"
            alt="services4"
            className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
          />
          <div>
            <h3 className="header3 text-primary mb-6">Maxsus yuk tashish</h3>
            <p className="paragraph-lg text-secondary mb-8">
              Noan’anaviy o‘lchamdagi yoki e’tibor talab qiluvchi yuklar uchun
              individual transport yechimlarini ishlab chiqamiz. Har bir yuk
              uchun xavfsizlik va mos texnik sharoitlar ta’minlanadi.
            </p>
            <Button>To’liq ma’lumot</Button>
          </div>
        </div>
        <div className="p-6 min-[700px]:p-10 rounded-[12px] bg-white grid grid-cols-1 min-[700px]:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="header3 text-primary mb-6">
              Sklad va saqlash xizmati
            </h3>
            <p className="paragraph-lg text-secondary mb-8">
              Yuklaringizni zamonaviy, xavfsizlik tizimlari bilan jihozlangan
              omborlarda saqlaymiz. Har bir mahsulot harorat, joylashuv va vaqt
              nazorati ostida bo‘ladi.
            </p>
            <Button>To’liq ma’lumot</Button>
          </div>
          <img
            src="/images/services/service-5.png"
            alt="services5"
            className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
