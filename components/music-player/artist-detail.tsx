"use client"

import { Heart } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Song as SongType, Album as AlbumType, Artist as ArtistType } from "@/services/songService"

interface ArtistDetailProps {
  artist: ArtistType;
  albums: AlbumType[];
  songs: SongType[];
  isLoading: boolean;
}

export function ArtistDetail({ artist, albums, songs, isLoading }: ArtistDetailProps) {
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

  return (
    <div className="space-y-6">
      {/* Cabecera del artista */}
      {isLoading ? (
        <ArtistHeaderSkeleton />
      ) : (
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-purple-900/40 to-zinc-900/0 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center w-full relative z-10">
            <img 
              src={artist.image_url || "/placeholder.svg"} 
              alt={artist.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white/10 shadow-xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{artist.name}</h1>
              <p className="text-zinc-300 mb-4">
                {artist.genres && artist.genres.length > 0 ? `Género: ${artist.genres.join(', ')}` : 'Artista'}
              </p>
              <button 
                className="bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg"
              >
                Seguir
              </button>
            </div>
          </div>
          
          {/* Fondo con efecto blur de la imagen del artista */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover opacity-20 blur-xl" 
            style={{ 
              backgroundImage: `url(${artist.image_url || "/placeholder.svg"})`,
              backgroundPosition: 'center 30%',
              filter: 'blur(50px)'
            }}
          ></div>
        </div>
      )}
      
      {/* Sección de álbumes del artista */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Todos los Álbums</h2>
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <AlbumSkeleton key={index} />
            ))}
          </div>
        ) : albums && albums.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {albums.map((album) => (
              <div key={album.id} className="group cursor-pointer">
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
        ) : (
          <div className="text-center py-6 bg-zinc-900/40 rounded-lg">
            <p className="text-zinc-400">No hay álbumes disponibles para este artista.</p>
          </div>
        )}
      </div>
      
      {/* Sección de canciones del artista */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Canciones del artista</h2>
        {isLoading ? (
          <div className="bg-zinc-900/40 rounded-md overflow-hidden">
            {[...Array(5)].map((_, index) => (
              <SongSkeleton key={index} />
            ))}
          </div>
        ) : songs && songs.length > 0 ? (
          <div className="bg-zinc-900/40 rounded-md overflow-hidden">
            {songs.map((song, index) => (
              <div
                key={song._id || index}
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
        ) : (
          <div className="text-center py-6 bg-zinc-900/40 rounded-lg">
            <p className="text-zinc-400">No hay canciones disponibles para este artista.</p>
          </div>
        )}
      </div>
    </div>
  );
}
