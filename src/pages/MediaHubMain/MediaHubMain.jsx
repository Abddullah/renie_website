import React, { useEffect, useState } from "react";
import HeroMdMain from "./components/HeroMdMain";
import HeroMain1 from "./components/HeroMain1";
import HeroFirst from "./components/HeroFirst";
import MediaHubDynamic from "./components/MediaHubDynamic";

const MediaHubMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Media Hub";
  }, []);
  const getIndex = (i) => {
    setIndex(i);
  };
  return (
    <div>
      {isOpen ? "" : <HeroFirst />}
      <HeroMdMain isOpen={isOpen} index={index} />
      {!isOpen ? (
        <HeroMain1
          getIndex={getIndex}
          isOpen={isOpen}
          handleClick={(item) => setIsOpen(item)}
        />
      ) : (
        <MediaHubDynamic />
      )}

      {/*  */}
    </div>
  );
};

export default MediaHubMain;
