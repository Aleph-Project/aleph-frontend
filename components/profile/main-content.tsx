"use client";

import { Search, X, ArrowLeft, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export function MainContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [urlImg, setUrlImg] = useState("/cat.jpg");
  const [nom_profile, setNom_profile] = useState("Catalina_Gmz");

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex-1 flex flex-col h-full rounded-lg bg-gradient-to-b from-zinc-800 to-black overflow-y-auto">
      <div className="p-6 pb-0 flex-shrink-0">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca canciones, artistas o albums"
            className="w-full py-3 pl-10 pr-10 bg-zinc-900 rounded-full text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <X className="h-5 w-5 text-zinc-400 hover:text-white" />
            </button>
          )}
        </div>

        {/* Contenedor fondo de perfil */}
          <div className="bg-green-50 rounded-lg shadow-md
			">
					Fondo
					</div>
        {/* Contenedor imagen y nombre*/}
        <div className="rounded-lg shadow-md p-6 pt-40 relative flex">
        
          {/* Contenedor icono y nombre (encima del fondo) */}
          <div className="relative z-20 flex flex-col w-full">
            {/* Contenedor imagen perfil*/}
            <div className="flex items-center p-6 ml-6">
              <img
                className="w-50 h-50 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white/10 shadow-xl"
                src={urlImg}
              ></img>
              {/* Contenedor nombre */}
              <div className="flex items-center ml-6">
                <h2 className="text-red-500 text-2xl font-bold">{nom_profile}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor datos */}

        <div className="bg-white rounded-lg shadow-md p-6 h-[100%] -mt-20 hrelative z-10" >
          <p className="text-black">Contenedor 2</p>
        </div>
      </div>
    </div>
  );
}
