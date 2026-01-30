import { useEffect, useRef, useState } from "react";
import type { CardProps } from "../type/interfaces";

const Card = ({ title, subtitle, description, image }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const el = textRef.current;
    setHasOverflow(el.scrollHeight > el.clientHeight);
  }, [description, isExpanded]);

  return (
    <div className="
      bg-white rounded-xl shadow-md overflow-hidden
      transition hover:scale-105 hover:shadow-lg
      flex flex-col md:flex-row gap-4 
    ">
      {/* IMAGE */}
      {image && (

  <img
    src={image}
    alt={title ?? "illustration"}
    className="
      w-full h-40 object-cover 
      md:w-1/3 md:h-auto"
        />)}
      

      {/* CONTENU */}
      <div className="p- flex flex-col justify-between gap-3 md:p-6">
        <div>
          {title && (
            <h3 className="text-base md:text-xl font-semibold leading-tight">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <p
          ref={textRef}
          className={`
            text-sm md:text-base leading-relaxed font-HarryP
            ${isExpanded ? "line-clamp-none text-xs" : "line-clamp-6 md:line-clamp-6"} 

            /* Lettrine desktop uniquement */
            md:first-letter:text-2xl
            md:first-letter:float-top
            md:first-letter:mr-1
            md:first-letter:text-yellow-500
          `}
        >
          {description}
        </p>

        {hasOverflow && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="
              self-start text-sm font-semibold
              text-red-800 hover:underline
              md:text-xs
            "
          >
            {isExpanded ? "Réduire" : "Lire plus"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
