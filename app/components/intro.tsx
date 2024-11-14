const Intro = () => {
    return (
      <div className="grid grid-rows-6 h-full">
        <div className="row-span-1"></div>
        <div className="row-span-1 text-center flex flex-col items-end text-stone-800">
          <div className="text-9xl font-bold mr-32">
            <span className="text-xl">Hey👋, I am</span> Maciej
          </div>
          <div className="text-9xl font-bold mr-32">Kasztelanic</div>
          <div className="text-xl font-bold mr-32">Data Science | Business Analytics | Pricing</div>
        </div>
        <div className="row-span-1"></div>
        <div className="row-span-1 font-bold flex flex-col items-end text-stone-800 mr-32">
          <div>I am a last year Masters student in Data Science and Business Analytics on University of Warsaw.</div>
          <div>I try learing each day to become the best data scientist I can, utlizing Python, SQL, R, and Cloud Solutions.</div>
          <div>I have about 1 year of business analytical experience, Bachelors in Finance, and interest in pricing.</div>
        </div>
        <div className="row-span-1"></div>
      </div>
    );
  };
  
  export default Intro;