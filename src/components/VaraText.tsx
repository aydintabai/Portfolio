// src/components/VaraText.tsx
import { useEffect, useMemo, useState } from "react";
import Vara from "vara";

type VaraTextProps = {
  text: string;
};

const MOBILE_QUERY = "(max-width: 640px)";
const FONT_URL = "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json";

const VaraText = ({ text }: VaraTextProps) => {
  // Split name into first + last
  const [first, last] = useMemo(() => {
    const parts = text.trim().split(/\s+/);
    if (parts.length <= 1) return [text.trim(), ""];
    return [parts[0], parts.slice(1).join(" ")];
  }, [text]);

  // Track if we're in a narrow/mobile layout
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MOBILE_QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as MediaQueryList).matches);

    // modern + fallback
    if ("addEventListener" in mql) mql.addEventListener("change", handler as any);
    else (mql as any).addListener(handler);

    return () => {
      if ("removeEventListener" in mql) mql.removeEventListener("change", handler as any);
      else (mql as any).removeListener(handler);
    };
  }, []);

  // (Re)initialize Vara whenever layout mode changes or text changes
  useEffect(() => {
    const el = document.getElementById("vara-container");
    if (!el) return;

    // Clear previous SVG
    el.innerHTML = "";

    const lines =
      isMobile && last
        ? [
            {
              text: first,
              fontSize: 52,
              strokeWidth: 2.25,
              color: "currentColor",
              duration: 1500,
              delay: 800,
              x: 130,
              y: 22,
            },
            {
              text: last,
              fontSize: 52,
              strokeWidth: 2.25,
              color: "currentColor",
              duration: 2000,
              delay: 200,
              x: 70,
              y: -6,
            },
          ]
        : [
            {
              text,
              fontSize: 65,
              strokeWidth: 2.25,
              color: "currentColor",
              duration: 4000,
              delay: 800,
              x: 1,
              y: 22,
            },
          ];

    new Vara("#vara-container", FONT_URL, lines);
  }, [text, first, last, isMobile]);

  return (
    <div
      id="vara-container"
      className="w-full sm:w-[650px] whitespace-nowrap overflow-visible inline-block text-black dark:text-white transition-colors duration-300"
    />
  );
};

export default VaraText;
