function BlogInfo() {
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto pt-[50px]">
        <h2 className="header3 mb-8 text-primary">
          Issiqlik mehnat unumdorligiga salbiy ta’sir qiladi: ijtimoiy himoya
          bunga tayyormi?
        </h2>
        <div className="flex gap-2 items-center mb-8">
          <img src="/images/blog/calendar.svg" alt="calendar" />
          <p className="text-primary paragraph-lg">2023-2025</p>
        </div>
        <div className="w-full mb-8">
          <img src="/images/blog/big-card.png" alt="big-card" />
        </div>
        <p>
          2030-yilga borib, issiqlik tufayli 80 millionga yaqin ish o‘rni
          yo‘qolishi mumkin. Bu ayniqsa qishloq xo‘jaligi va qurilishda
          ishlovchi, himoyasiz ishchilarga ta’sir qiladi. Issiqdan norasmiy
          ishchilar, issiq mintaqalardagi kambag‘al aholi, ayollar va yoshi
          katta ishchilar eng ko‘p jabr ko‘radi. <br />
          <br />
          Shu sababli, mehnatga oid qonunlarda issiqlikka nisbatan minimal
          xavfsizlik standartlari (maksimal harorat, majburiy tanaffuslar,
          suvdan foydalanish imkoniyati) kiritilishi kerak. <br />
          <br />
          Ish sharoitlari ishlab chiqarish samaradorligidangina emas, balki
          inson salomatligi va farovonligidan kelib chiqib baholanishi lozim.{" "}
          <br />
          <br />
          Ijtimoiy sug‘urta tizimlari ishchilar ekstremal iqlim sharoitida
          ishlash imkoniyati bo‘lmaganda ham daromadsiz qolib ketmasligini
          inobatga olib muvofiqlashtirilishi kerak. <br />
          <br />
          Issiqlik to‘lqinlari tobora ko‘payayotgan bir davrda, bu
          chora-tadbirlar nafaqat ishchilarni himoya qiladi, balki butun
          iqtisodiyotni barqarorlashtiradi.
        </p>
      </div>
    </div>
  );
}

export default BlogInfo;
