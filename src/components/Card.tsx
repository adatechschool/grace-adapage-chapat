import type { CardProps } from "../type/interfaces";

const Card = ({ title, subtitle, description, image }: CardProps) => {
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

      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
