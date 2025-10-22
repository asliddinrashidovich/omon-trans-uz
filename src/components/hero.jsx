function Hero({header, text, img}) {
  return (
    <div className="flex px-5 min-[550px]:px-10 pt-[150px] pb-15">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 max-[1100px]:grid-rows-2 min-[1100px]:grid-cols-2 gap-6">
        <div className="rounded-[8px] p-5 min-[600px]:p-10 bg-secondary flex items-center justify-center">
          <div>
            <h1 className="text-primary header1 mb-6">
              {header}
            </h1>
            <p className="text-secondary paragraph-lg">
              {text}
            </p>
          </div>
        </div>
        <div className="max-[600px]:h-[360px] max-[1100px]:h-[500px] rounded-[12px] overflow-hidden">
          <img src={img} alt={header} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
