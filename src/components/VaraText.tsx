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
          fontSize: 65,
          strokeWidth: 2.25,
          color: "black",
          duration:4000,
          delay:800,
          x:1,
	        y:22,
        },
      ]
    );
  }, []);

  return (
    <div
      id="vara-container"
      className="w-[650px] whitespace-nowrap overflow-visible inline-block"
    />
  );
};

export default VaraText;
