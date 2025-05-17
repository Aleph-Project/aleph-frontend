"use client"

import { Sidebar } from "@/components/music-player/sidebar"
import { MainContent } from "@/components/profile-page/main-content"

export default function Profile() {
    return(
        <div className="flex flex-col h-screen bg-black text-white pt-16 overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 p-4">
                    <MainContent />
                </div>
            </div>
        </div>
    )
}