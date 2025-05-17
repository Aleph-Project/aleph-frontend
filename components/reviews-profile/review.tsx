"use client";
import { FC } from "react";

// Definimos una interfaz para las propiedades de la reseña
interface ReviewProps {
  authId: string;
  reviewId: string;
  reviewTitle: string;
  reviewBody: string;
  reviewRating: number;
  reviewDateCreation: string;
  reviewDateUpdate: string;
  reviewStatus: string;
  reviewType: string;
  username?: string; // Nombre de usuario opcional
  profileImage?: string; // Imagen de perfil opcional
}

export const Review: FC<ReviewProps> = ({
  authId,
  reviewId,
  reviewTitle,
  reviewBody,
  reviewRating,
  reviewDateCreation,
  reviewDateUpdate,
  reviewStatus,
  reviewType,
  username = "Usuario",
  profileImage = "/cat.jpg",
}) => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-lg p-6 mb-4">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        {/* Parte Titulo */}
        <div className="col-span-5 col-start-2 row-start-2">
          <h3 className="text-black font-bold text-2xl">{reviewTitle}</h3>
        </div>

        {/* Parte Botones */}
        <div className="col-start-6 row-start-1">
          <div>
            <a>
              <svg
                class="w-[30px] h-[30px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div></div>
        </div>

        {/* Parte Username */}
        <div className="col-span-3 col-start-1 row-start-1 flex items-center">
          <span className="text-zinc-700 font-medium">{username}</span>
        </div>

        {/* Parte Rating */}
        <div className="col-span-2 col-start-4 row-start-1 flex items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < reviewRating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">
              ({reviewRating}/5)
            </span>
          </div>
        </div>

        {/* Parte Foto Perfil */}
        <div className="row-span-2 col-start-1 row-start-2 flex items-start justify-center">
          <img
            src={profileImage}
            alt={`${username} profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Parte Review Body */}
        <div className="col-span-5 col-start-2 row-start-3 text-gray-600">
          <p>{reviewBody}</p>
        </div>

        {/* Parte Fecha de creacion */}
        <div className="col-span-3 row-start-4 text-sm text-gray-500">
          <p>Creado: {new Date(reviewDateCreation).toLocaleString()}</p>
        </div>

        {/* Parte Fecha de actualizacion */}
        <div className="col-span-3 col-start-4 row-start-4 text-sm text-gray-500 text-right">
          <p>Actualizado: {new Date(reviewDateUpdate).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
