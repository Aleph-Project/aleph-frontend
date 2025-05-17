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
        {isEditingProfile ? (
          <EditProfile onBackClick={handleBackClick} />
        ) : (
          <MainContent onEditClick={handleEditClick} />
        )}
      </div>
      <MusicPlayer />
    </div>
  );
}