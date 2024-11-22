const Intro = () => {
    return (
      <div className="grid grid-rows-6 grid-cols-3 h-full">
        <div className="row-span-1 col-span-3"></div>
        <div className="row-span-1 col-span-3 text-center flex flex-col items-end sm:items-center md:items-end text-stone-800">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mr-8 sm:mr-16 md:mr-24 lg:mr-32">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Hey👋, I am</span> Maciej
          </div>
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mr-8 sm:mr-16 md:mr-24 lg:mr-32">Kasztelanic</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mr-8 sm:mr-16 md:mr-24 lg:mr-32">
            Data Science | Software Development | Pricing
          </div>
        </div>
        <div className="row-span-1 col-span-3"></div>
      </div>
    );
};

export default Intro;