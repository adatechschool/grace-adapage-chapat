import { useState } from "react";
import type { CardProps } from "../type/interfaces";

const Card = ({ title, subtitle, description, image }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col">
      {image && (
        <img
          src={image}
          alt={title ?? "illustration"}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-500 mb-2">{subtitle}</p>}

      <p
        className={`
          text-base
          font-HarryP
          first-letter:text-3xl
          first-letter:mr-1
          first-letter:-mt-1
          first-letter:font-stretch-50%
          first-letter:text-yellow-500
          ${isExpanded ? "line-clamp-none" : "line-clamp-10"}
        `}
      >
        {description}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 self-start text-sm text-red-800 hover:underline font-semibold"
      >
        {isExpanded ? "Réduire" : "Lire plus"}
      </button>
    </div>
  );
};

export default Card;
