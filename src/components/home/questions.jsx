import Button from "../ui/button";

function QuestionsSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex min-[600px]:flex-row flex-col justify-between gap-5 min-[600px]:gap-[185px] mb-10">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 ">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="text-primary header6">Savollar</h6>
          </div>
        </div>
        <div className="max-w-[792px] w-full">
          <h2 className="text-primary header2 text-primary mb-6">
            Sizni qiziqtirgan savollarga aniq va qisqa javoblar.
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[1000px]:grid-cols-2 gap-6">
        <div className="p-6 rounded-[12px]  bg-secondary flex justify-between items-center">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">Yukni qayerdan kuzatishim mumkin?</h3>
          <div>
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
        <div className="p-6 rounded-[12px]  bg-secondary flex justify-between items-center">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">Yuk yo‘qolsa yoki shikastlansa-chi?</h3>
          <div>
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
        <div className="p-6 rounded-[12px]  bg-secondary flex justify-between items-center">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">Yetkazib berish muddati qancha?</h3>
          <div>
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
        <div className="p-6 rounded-[12px]  bg-secondary flex justify-between items-center">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">Maxsus yuklarni tashiy olasizlarmi?</h3>
          <div>
            <img src="/images/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsSection;
