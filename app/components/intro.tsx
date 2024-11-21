import { useState } from "react"; // Import useState to manage state
import Education from "./education";
import Work from "./work";

const Intro = () => {
    const [showWork, setShowWork] = useState(true); // State to toggle between Work and Education

    return (
      <div className="grid grid-rows-6 grid-cols-3 h-full"> {/* Added grid-cols-3 */}
        <div className="row-span-1 col-span-3"></div>
        <div className="row-span-1 col-span-3 text-center flex flex-col items-end text-stone-800">
          <div className="text-9xl font-bold mr-32">
            <span className="text-xl">Hey👋, I am</span> Maciej
          </div>
          <div className="text-9xl font-bold mr-32">Kasztelanic</div>
          <div className="text-xl font-bold mr-32">Data Science | Business Analytics | Pricing</div>
        </div>
        <div className="row-span-1 col-span-3"></div>
        <div className="row-span-2 col-start-2 col-span-2 flex flex-col items-center text-stone-800 mr-32 border-2 border-black rounded-xl overflow-auto">
          <div className="flex justify-center w-full">
          <div className={`flex-1 flex justify-center ${showWork ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>
              <div 
                className={`p-2 cursor-pointer font-bold`} 
                onClick={() => setShowWork(true)}
              >
                Work
              </div>
            </div>
            <div className={`flex-1 flex justify-center ${!showWork ? 'bg-gray-300' : 'hover:bg-gray-200'}`}>
              <div 
                className={`p-2 cursor-pointer font-bold`} 
                onClick={() => setShowWork(false)}
              >
                Education
              </div>
            </div>
          </div>
          <div className="mt-4 overflow-auto max-h-96 w-full"> 
            {showWork ? <Work /> : <Education />}
          </div>
        </div>
      </div>
    );
};

export default Intro;