import { useEffect } from "react";
import Vara from "vara";

type VaraTextProps = {
  text: string;
};

const VaraText = ({ text }: VaraTextProps) => {
  useEffect(() => {
    // Clear existing content inside the container
    const container = document.getElementById("vara-container");
    if (container) container.innerHTML = "";

    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 48,
          strokeWidth: 2.5,
          color: "black",
          duration:4000,
          delay:750,
          x:3,
	        y:5,
        },
      ]
    );
  }, []);

  return <div id="vara-container" className="w-full"></div>;
};

export default VaraText;
