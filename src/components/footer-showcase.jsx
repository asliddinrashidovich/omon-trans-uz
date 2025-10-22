import Button from "./ui/button";

function FooterShowcase() {
  return (
    <div className="py-10 min-[600px]:py-20 px-5 footer-showcase h-[600px] min-[600px]:px-10 ">
      <div className="max-w-[1200px] mx-auto flex items-center h-full">
        <div className="max-w-[500px]">
          <h2 className="header2 text-white mb-6">
            Sizning yukingiz – bizning mas’uliyatimiz.
          </h2>
          <p className="paragraph-lg text-white/80 mb-8">
            Biz bilan bog‘laning va biznesingiz uchun eng qulay logistika
            yechimini toping. Tezkor, ishonchli va doim aloqadamiz.
          </p>
          <Button>Hamkorlikni boshlash</Button>
        </div>
      </div>
    </div>
  );
}

export default FooterShowcase;
