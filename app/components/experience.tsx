import { useState } from "react";
import Work from "./experience/work";
import Education from "./experience/education";

const Experience = () => {
    const [showWork, setShowWork] = useState(true);

    return (
        <>
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
        </>
    );
};

export default Experience;