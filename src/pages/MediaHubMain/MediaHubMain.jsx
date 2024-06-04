import React, { useEffect, useState } from "react";
import HeroMdMain from "./components/HeroMdMain";
import HeroMain1 from "./components/HeroMain1";
import HeroFirst from "./components/HeroFirst";
import MediaHubDynamic from "./components/MediaHubDynamic";

const MediaHubMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      {isOpen ? "" : <HeroFirst />}
      <HeroMdMain isOpen={isOpen} />
      {!isOpen ? (
        <HeroMain1 isOpen={isOpen} handleClick={(item) => setIsOpen(item)} />
      ) : (
        <MediaHubDynamic />
      )}

      {/*  */}
    </div>
  );
};

export default MediaHubMain;
