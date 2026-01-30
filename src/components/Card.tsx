import { useEffect, useRef, useState } from "react";
import type { CardProps } from "../type/interfaces";

const Card = ({ title, subtitle, description, image }: CardProps) => {
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  // Détecte si le texte dépasse (pour afficher le bouton Lire)
  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    setHasOverflow(el.scrollHeight > el.clientHeight);
  }, [description]);

  return (
    <>
      {/* ================= CARD ================= */}
      <article
        className="
          bg-white rounded-xl shadow-md overflow-hidden
          flex flex-row
          h-44 md:h-64
        "
      >
        {/* IMAGE — toujours paysage */}
        {image && (
          <img
            src={image}
            alt={title ?? "illustration"}
            className="
              w-1/3 md:w-2/5
              h-full
              object-cover
            "
          />
        )}

        {/* CONTENU */}
        <div
          className="
            flex flex-col
            justify-start
            gap-3
            p-3 md:p-6
            w-2/3 md:w-3/5
          "
        >
          {/* TITRE */}
          <div>
            {title && (
              <h3 className="text-sm md:text-xl font-semibold leading-tight">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* TEXTE CLAMPÉ */}
          <p
            ref={textRef}
            className="
              text-xs md:text-base leading-relaxed
              line-clamp-3 md:line-clamp-4
            "
          >
            {description}
          </p>

          {/* CTA */}
          {hasOverflow && (
            <button
              onClick={() => setIsOpen(true)}
              className="
                self-start
                text-xs md:text-sm
                font-semibold
                text-red-800
                hover:underline
              "
            >
              Lire plus...
            </button>
          )}
        </div>
      </article>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              bg-white rounded-xl shadow-xl
              max-w-2xl w-full
              mx-4 p-6
              max-h-[80vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
              <div>
                {title && (
                  <h2 className="text-xl font-bold">
                    {title}
                  </h2>
                )}

                {subtitle && (
                  <p className="text-sm text-gray-500">
                    {subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  text-sm font-semibold
                  text-red-800
                  hover:underline
                "
              >
                Fermer
              </button>
            </div>

            {/* IMAGE */}
            {image && (
              <img
                src={image}
                alt={title ?? "illustration"}
                className="
                  w-full h-60
                  object-cover
                  rounded-lg
                  mb-4
                "
              />
            )}

            {/* TEXTE COMPLET */}
            <p className="text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
