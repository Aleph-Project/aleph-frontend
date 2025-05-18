"use client";

import { useState } from "react";
interface EditProfileProps {
  onBackClick: () => void;
}

export function EditProfile({ onBackClick }: EditProfileProps) {
  const [urlImg, setUrlImg] = useState("/cat.jpg");
  const [urlWallpaper, setUrlWallpaper] = useState("/wallpaper.jpg");
  const [nom_profile, setNom_profile] = useState("Catalina_Gmz");
  const [bio, setBio] = useState(
    "Soy una amante de la música y la cultura. Me encanta descubrir nuevos artistas y compartir mis descubrimientos con los demás. Siempre estoy buscando nuevas melodías que me inspiren y me hagan sentir viva."
  );

  const handleSubmit = (e: FormDataEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Formulario enviado");
  };
  return (
    <div className="flex flex-col h-screen text-white p-5 overflow-visible">
      <form onSubmit={handleSubmit}>
        {/* Secciones de imagenes */}
        <div>
          <div className="grid grid-cols-4 grid-rows-[auto_auto_min-content_auto_auto_auto_auto_auto_auto_auto] gap-4">
            <div className="col-span-4">
              <h3 className="text-base font-medium">Imagen de perfil</h3>
            </div>
            <div className="col-span-3 col-start-2 row-start-2">
              <div className="max-w-sm">
                <label htmlFor="file-input" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="profile-img-input"
                  id="profile-img-input"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                ></input>
              </div>
            </div>
            <div className="col-span-3 col-start-2 row-start-3">
              <p
                className="text-sm text-gray-200 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className="col-span-3 col-start-2 row-start-4 flex gap-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subir imagen
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Eliminar imagen
              </button>
            </div>
            <div className="row-span-3 col-start-1 row-start-2 flex items-center justify-center">
              <img
                className="w-28 h-28 rounded-full object-cover md:mb-0 md:mr-6 border-4 border-white/10 shadow-xl"
                src={urlImg}
                alt="Perfil"
              />
            </div>
            <div className="col-span-4 row-start-5">
              <h3 className="text-base font-medium">Imagen de portada</h3>
            </div>
            <div className="col-span-4 row-start-6">
              <img
                className="w-full h-48 rounded-lg object-cover md:mb-0 md:mr-6 border-4 border-white/10 shadow-xl"
                src={urlWallpaper}
                alt="Portada"
              />
            </div>
            <div className="col-span-4 row-start-7">
              <div className="w-full">
                <label htmlFor="file-input" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="profile-wallpaper-input"
                  id="profile-wallpaper-input"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                ></input>
              </div>
            </div>
            <div className="col-span-4 row-start-8">
              <p
                className="text-sm text-gray-200 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className="col-span-4 row-start-9 flex gap-4 justify-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subir imagen
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Eliminar imagen
              </button>
            </div>
          </div>
        </div>

        {/* Seccion de datos */}

        <div>
          <div className="col-span-4 mb-4">
            <h3 className="text-base font-medium">Nombre de usuario</h3>
            <div className="w-full space-y-3 mt-4">
              <input
                type="text"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 w-full"
                placeholder={nom_profile}
              ></input>
            </div>
          </div>

          <div className="col-span-4 mb-4">
            <h3 className="text-base font-medium">Biografía</h3>
            <div className="w-full space-y-3 mt-4">
              <textarea
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 h-[150px]"
                placeholder={bio}
              ></textarea>
            </div>
          </div>

          <div className="col-span-4 mb-4">
            <h3>Fecha de nacimiento</h3>
            <div className="w-full space-y-3 mt-4">
              <input
                class="hs-datepicker py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-600 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-neutral-500"
                type="text"
                placeholder="Select day"
                readOnly=""
                data-hs-datepicker='{
    "type": "default",
    "dateMax": "2050-12-31",
    "styles": {
      "week": "vc-week flex pb-1.5",
      "weekDay": "vc-week__day m-px w-10 block font-normal text-center text-sm text-gray-500 focus:outline-hidden dark:text-neutral-500",
      "dates": "vc-dates grid grid-cols-7 gap-y-0.5",
      "date": "vc-date relative size-10.5 flex justify-center items-center text-sm text-gray-800 rounded-full hover:text-blue-600 [&>button]:relative [&>button]:size-full [&>button]:rounded-full nth-[7n]:rounded-r-full nth-[7n+1]:rounded-l-full before:absolute before:inset-0 before:size-full before:border before:border-transparent before:rounded-full hover:before:border-blue-600 hs-vc-date-selected:text-white hs-vc-date-today:bg-blue-600 hs-vc-date-today:text-white hs-vc-date-selected:hs-vc-date-month-prev:text-white hs-vc-date-selected:hs-vc-date-month-next:text-white hs-vc-date-selected:hs-vc-date-month-prev:hover:before:border-blue-600 hs-vc-date-selected:hs-vc-date-month-next:hover:before:border-blue-600 hs-vc-calendar-selected-middle:text-gray-800 hs-vc-calendar-selected-middle:hover:text-blue-600 hs-vc-calendar-selected-first:bg-gray-100 hs-vc-calendar-selected-first:rounded-l-full hs-vc-calendar-selected-first:rounded-r-none hs-vc-date-selected:before:bg-blue-600 hs-vc-calendar-selected-middle:bg-gray-100 hs-vc-calendar-selected-middle:before:bg-gray-100 hs-vc-calendar-selected-middle:rounded-none hs-vc-calendar-selected-last:bg-gray-100 hs-vc-calendar-selected-last:rounded-r-full hs-vc-calendar-selected-last:rounded-l-none hs-vc-date-selected:before:bg-blue-600 hs-vc-date-month-prev:text-gray-400 hs-vc-date-month-next:text-gray-400 hs-vc-date-month-prev:before:hover:border-gray-200 hs-vc-date-month-next:before:hover:border-gray-200 hs-vc-date-month-prev:hs-vc-calendar-selected-middle:text-gray-400 hs-vc-date-month-next:hs-vc-calendar-selected-middle:text-gray-400 hs-vc-date-month-prev:hs-vc-calendar-selected-middle:before:hover:border-gray-200 hs-vc-date-month-next:hs-vc-calendar-selected-middle:before:hover:border-gray-200 hs-vc-date-selected-first:hs-vc-date-month-prev:bg-transparent hs-vc-date-selected-first:hs-vc-date-month-next:bg-transparent hs-vc-date-selected-last:hs-vc-date-month-prev:bg-transparent hs-vc-date-selected-last:hs-vc-date-month-next:bg-transparent dark:text-neutral-200 dark:hover:text-blue-500 dark:hover:before:border-blue-500 dark:hs-vc-date-selected:text-white dark:hs-vc-date-selected:hs-vc-date-month-prev:text-white dark:hs-vc-date-selected:hs-vc-date-month-next:text-white dark:hs-vc-date-today:bg-blue-500 dark:hs-vc-date-today:text-white dark:hs-vc-date-selected:hs-vc-date-month-prev:hover:before:border-blue-500 dark:hs-vc-date-selected:hs-vc-date-month-next:hover:before:border-blue-500 dark:hs-vc-calendar-selected-middle:text-neutral-200 dark:hs-vc-calendar-selected-middle:hover:text-blue-500 dark:hs-vc-calendar-selected-first:bg-neutral-800 dark:hs-vc-date-selected:before:bg-blue-500 dark:hs-vc-calendar-selected-middle:bg-neutral-800 dark:hs-vc-calendar-selected-middle:before:bg-neutral-800 dark:hs-vc-calendar-selected-last:bg-neutral-800 dark:hs-vc-date-selected:before:bg-blue-500 dark:hs-vc-date-month-prev:text-neutral-600 dark:hs-vc-date-month-next:text-neutral-600 dark:hs-vc-date-month-prev:before:hover:border-neutral-700 dark:hs-vc-date-month-next:before:hover:border-neutral-700 dark:hs-vc-date-month-prev:hs-vc-calendar-selected-middle:text-neutral-600 dark:hs-vc-date-month-next:hs-vc-calendar-selected-middle:text-neutral-600 dark:hs-vc-date-month-prev:hs-vc-calendar-selected-middle:before:hover:border-neutral-700 dark:hs-vc-date-month-next:hs-vc-calendar-selected-middle:before:hover:border-neutral-700",
      "arrowPrev": "vc-arrow vc-arrow_prev size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
      "arrowNext": "vc-arrow vc-arrow_next size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
    },
    "mode": "custom-select",
    "templates": {
      "arrowPrev": "<button data-vc-arrow=\"prev\"><svg class=\"shrink-0 size-4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15 18-6-6 6-6\"></path></svg></button>",
      "arrowNext": "<button data-vc-arrow=\"next\"><svg class=\"shrink-0 size-4\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9 18 6-6-6-6\"></path></svg></button>"
    }
  }'
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
