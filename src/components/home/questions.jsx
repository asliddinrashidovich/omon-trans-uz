import Button from "../ui/button";

function QuestionsSection() {
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex min-[600px]:flex-row flex-col justify-between gap-5 min-[600px]:gap-[185px] mb-10">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 ">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px]">Savollar</h3>
          </div>
        </div>
        <div className="max-w-[792px] w-full">
          <h2 className="text-primary text-[32px] min-[600px]:text-[48px] font-[500] leading-[120%] mb-6">
            Sizni qiziqtirgan savollarga aniq va qisqa javoblar.
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[1000px]:grid-cols-2 gap-[24px]">
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
