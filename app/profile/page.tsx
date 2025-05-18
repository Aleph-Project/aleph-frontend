"use client";

import { useState } from "react";
import { MusicPlayer } from "@/components/music-player/music-player";
import { Sidebar } from "@/components/music-player/sidebar";
import { MainContent } from "@/components/profile-page/main-content";
import { EditProfile } from "@/components/profile-page/edit-profile";

export default function Profile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleEditClick = () => {
    console.log("Botón de editar clickeado");
    setIsEditingProfile(true);
  };

  const handleBackClick = () => {
    console.log("Botón de volver clickeado");
    setIsEditingProfile(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white pt-16 overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent onEditClick={handleEditClick} />
        {/* Modal de edición de perfil */}
        {isEditingProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-zinc-800  text-white rounded-lg shadow-xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Editar Perfil</h2>
                <button 
                  onClick={handleBackClick}
                  className="text-white hover:text-mauve"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <EditProfile onBackClick={handleBackClick} />
              </div>
            </div>
          </div>
        )}
      </div>
      <MusicPlayer />
    </div>
  );
}