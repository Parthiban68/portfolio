
import React from 'react'
import { useEffect, useState } from 'react';
import { BallCanvas} from "../canvas"
import { technologies } from "../../constants"

const Technology = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(technologies); 
    }, 200); 
    return () => clearTimeout(timer);
  }, [technologies]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 pb-20 md:pb-4">
      <h1 className="text-2xl font-bold text-center mb-8 md:mb-6">Technology</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 w-full max-w-[80%] mx-auto">
        {visibleItems.map((technology) => (
          <div
            key={technology.name}
            className="w-28 h-28 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology