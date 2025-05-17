"use client"

import * as React from "react";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';

// Tipos para simular datos locales
interface AlbumType {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  songsCount: number;
}

interface SongType {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover_url: string;
}

interface ArtistType {
  name: string;
  genres?: string[];
  image_url?: string;
}

interface ArtistDetailProps {
  isLoading: boolean;
}

export function ArtistDetail({ isLoading }: ArtistDetailProps) {
  //Datos falsos
  const fallbackAlbum: AlbumType = {
    id: 1,
    title: "Un Verano Sin Ti",
    artist: "Bad Bunny",
    coverUrl: "/placeholder.svg?height=200&width=200",
    songsCount: 1,
  };

  const fallbackSong: SongType[] = [
    {
      id: 1,
      title: "Moscow Mule",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "4:05",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "Después de la Playa",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:50",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "Me Porto Bonito",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:58",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "Tití Me Preguntó",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "4:03",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      title: "Un Ratito",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:43",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      title: "Yo No Soy Celoso",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:50",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 7,
      title: "Tarot",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:57",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 8,
      title: "Neverita",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:53",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 9,
      title: "La Corriente",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:17",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 10,
      title: "Efecto",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:33",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 11,
      title: "Party",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:47",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 12,
      title: "Aguacero",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:31",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 13,
      title: "Enseñame a Bailar",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:55",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 14,
      title: "Ojitos Lindos",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "4:18",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 15,
      title: "Dos Mil 16",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:27",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 16,
      title: "El Apagón",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:50",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 17,
      title: "Otro Atardecer",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "4:03",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 18,
      title: "Un Coco",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:57",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 19,
      title: "Andrea",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "5:45",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 20,
      title: "Me Fui de Vacaciones",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:49",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 21,
      title: "Un Verano Sin Ti",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "2:29",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 22,
      title: "Agosto",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "3:22",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 23,
      title: "Callaita",
      artist: "Bad Bunny",
      album: "Un Verano Sin Ti",
      duration: "4:10",
      cover_url: "/placeholder.svg?height=80&width=80",
    },
  ];

  const fallbackArtist: ArtistType = {
    name: "Bad Bunny",
    genres: ["Reggaeton", "Trap"],
    image_url: "/placeholder.svg",
  };

   const albumInfo = {
    title: "Un Verano Sin Ti",
    genres: ["Reguetón", "Trap", "Latino", "Urbano", "Pop"],
    duration: "1h 21 minutos - 2022",
    likes: "249.081.633 Me gusta",
    views: "800.020.280 Reproducciones",
    images: ["/Bad Bunny (1).jfif"],
  };

  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  /*const albumSongs = fallbackSongs.filter(song => song.album === selectedAlbum?.title);*/

  const ArtistHeaderSkeleton = () => (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-purple-900/40 to-zinc-900/0 p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center w-full relative z-10">
        <Skeleton className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
        <div className="w-full">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-8 w-32 rounded-full" />
        </div>
      </div>
    </div>
  )

/*
  const AlbumSkeleton = () => (
    <div className="group">
      <div className="p-3 rounded-lg">
        <Skeleton className="w-full aspect-square rounded-lg mb-3" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )

  const SongSkeleton = () => (
    <div className="flex items-center p-3">
      <Skeleton className="h-8 w-8 rounded mr-3" />
      <div className="flex-1">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-3 w-10" />
    </div>
  )
*/
  return (
    <div>
      <div className="space-y-6">
        {isLoading ? (
          <ArtistHeaderSkeleton />
        ) : (
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-purple-900/40 to-zinc-900/0 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center w-full relative z-10">
              <img 
                src={selectedAlbum?.coverUrl || fallbackArtist.image_url || "/placeholder.svg"} 
                alt={selectedAlbum ? selectedAlbum.title : fallbackArtist.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white/10 shadow-xl"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {selectedAlbum ? selectedAlbum.title : fallbackArtist.name}
                </h1>
                <p className="text-zinc-300 mb-4">
                  {selectedAlbum 
                    ? `Álbum de ${fallbackArtist.name}` 
                    : fallbackArtist.genres && fallbackArtist.genres.length > 0 
                      ? `Género: ${fallbackArtist.genres.join(', ')}` 
                      : 'Artista'}
                </p>
                {selectedAlbum ? (
                  <Button
                    className="w-full flex items-center justify-start text-mauve bg-transparent hover:bg-transparent py-2 rounded-xl"
                  >
                    <CirclePlus className="bg-transparent w-[10vw] h-[10vw] max-w-[3rem] max-h-[3rem] min-w-[2rem] min-h-[2rem] mr-4" />
                    <Heart className=" w-[10vw] h-[10vw] max-w-[3rem] max-h-[3rem] min-w-[2rem] min-h-[2rem] text-mauve" />
                  </Button>
                ) : (
                <button 
                  className="bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg"
                >
                  Seguir
                </button>
                )}
              </div>
            </div>
            
            <div 
              className="absolute inset-0 bg-no-repeat bg-cover opacity-20 blur-xl" 
              style={{ 
                backgroundImage: `url(${selectedAlbum?.coverUrl || fallbackArtist.image_url || "/placeholder.svg"})`,
                backgroundPosition: 'center 30%',
                filter: 'blur(50px)'
              }}
            ></div>
          </div>
        )}

        {/* Álbumes y canciones */}
        {!selectedAlbum ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Todos los Álbums</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
              {[fallbackAlbum].map((album) => (
          <div
            key={album.id}
            className="group cursor-pointer"
            onClick={() => setSelectedAlbum(album)}
          >
            <div className="relative group-hover:bg-zinc-800 p-3 rounded-lg transition-colors">
              <img
                src={album.coverUrl || "/placeholder.svg"}
                alt={album.title}
                className="w-full aspect-square rounded-lg object-cover mb-2"
              />
              <h3 className="font-bold text-sm text-white truncate">{album.title}</h3>
              <p className="text-xs text-zinc-400 truncate">Álbum • {album.songsCount} canciones</p>
            </div>
          </div>
              ))}
            </div>
            {/*Todas las canciones del artista*/}
            <h2 className="text-2xl font-bold mb-4">Canciones del artista</h2>
            <div className="bg-zinc-900/40 rounded-md overflow-hidden">
              {fallbackSong.map((song, index) => (
          <div
            key={song.id}
            className={`flex items-center p-3 hover:bg-zinc-800 ${index % 2 === 0 ? "bg-zinc-900/60" : "bg-zinc-900/30"}`}
          >
            <div className="mr-3 text-zinc-400 w-6 text-center">{index + 1}</div>
            <img
              src={song.cover_url || "/placeholder.svg"}
              alt={song.title}
              className="h-12 w-12 rounded object-cover mr-3"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-white truncate">{song.title}</h3>
              <p className="text-xs text-zinc-400 truncate">{song.album}</p>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-zinc-400 hover:text-white mr-4 cursor-pointer" />
              <div className="text-xs text-zinc-400">{song.duration}</div>
            </div>
          </div>
              ))}
            </div>
          </div>
        ) : (
          <div className=" p-6">
            <button
              onClick={() => setSelectedAlbum(null)}
              className="mt-4 text-sm text-white hover:underline hover:text-electricViolet mb-6"
            >
              ← Volver a todos los álbumes
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/*INFORMACIÓN ALBUM*/}
              <div>
          <h1 className="text-2xl font-bold text-white mb-6">Artista</h1>
          {/*imagen artista*/}
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100 py-2">
            {albumInfo.images.map((src, index) => (
              <div key={index} className="flex flex-col items-center min-w-[12rem]">
                <img
            src={src}
            alt={`Bad Bunny ${index + 1}`}
            className="w-48 h-48 object-cover rounded-full mb-3"
                />
                <p className="text-white font-bold text-2xl mb-6">{selectedAlbum?.artist}</p>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold text-white mb-6">Géneros</h1>
          <div>
            {albumInfo.genres.map((genre, index) => (
              <button
                className="m-3 bg-purple-200 text-electricViolet font-bold py-2 px-4 rounded-xl transition-colors duration-200"
                className="m-3 bg-purple-200 text-electricViolet font-bold py-2 px-4 rounded transition-colors duration-200 rounded-xl"
              >
                {genre}
              </button>
            ))}
          </div>
          <div className="text-white mb-6 text-justify">
            <h1 className="text-2xl font-bold text-white mt-6">Duración</h1>
            <p className="mb-6">{albumInfo.duration}</p>
            <h1 className="text-2xl font-bold text-white">Likes</h1>
            <p className="mb-6">{albumInfo.likes}</p>
            <h1 className="text-2xl font-bold text-white">Reproducciones</h1>
            <p className="mb-6">{albumInfo.views}</p>
          </div>
              </div>
              {/* CANCIONES */}
              <div>
          <h2 className="text-2xl font-bold mb-4">Canciones del artista</h2>
          <div className="bg-zinc-900/40 rounded-md overflow-hidden">
            {fallbackSong.map((song, index) => (
              <div
                key={song.id}
                className={`flex items-center p-3 hover:bg-zinc-800 ${index % 2 === 0 ? "bg-zinc-900/60" : "bg-zinc-900/30"}`}
              >
                <div className="mr-3 text-zinc-400 w-6 text-center">{index + 1}</div>
                <img
            src={song.cover_url || "/placeholder.svg"}
            alt={song.title}
            className="h-12 w-12 rounded object-cover mr-3"
                />
                <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-white truncate">{song.title}</h3>
            <p className="text-xs text-zinc-400 truncate">{song.album}</p>
                </div>
                <div className="flex items-center">
            <Heart className="h-5 w-5 text-zinc-400 hover:text-white mr-4 cursor-pointer" />
            <div className="text-xs text-zinc-400">{song.duration}</div>
                </div>
              </div>
            ))}
          </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

