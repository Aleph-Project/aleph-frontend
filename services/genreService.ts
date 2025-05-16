import { Artist, Album, Song } from './songService';

// Interface para la información detallada de un género
export interface GenreDetails {
  genre: {
    id: string;
    name: string;
    slug: string;
    category: string;
    count: number;
  };
  artists: Artist[];
  albums: Album[];
  songs: Song[];
}

// URL base del microservicio
const MUSIC_API_URL = '/api/music';

// Función para obtener los detalles de un género
export async function getGenreDetails(genreSlug: string): Promise<GenreDetails> {
  try {
    console.log(`Obteniendo detalles completos del género con slug: ${genreSlug}`);
    
    // Utilizar el endpoint del backend que devuelve todos los detalles del género en una sola llamada
    const response = await fetch(`${MUSIC_API_URL}/genres/${genreSlug}/details`);
    
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }
    
    // Si la respuesta es exitosa, devolver los datos directamente
    const genreDetails = await response.json();
    console.log(`Detalles completos del género cargados en una sola petición.`);
    
    // Procesamos los álbumes para asegurarnos de que todos tengan artista asignado correctamente
    const processedAlbums = (genreDetails.albums || []).map((album: Album) => {
      // Si el álbum no tiene artista o el artista es "Desconocido"
      if (!album.artist || album.artist === "Desconocido") {
        // Buscar una canción del mismo álbum para obtener el artista
        const songWithSameAlbum = (genreDetails.songs || []).find(
          (song: Song) => song.album === album.title && song.artist && song.artist !== "Desconocido"
        );
        
        if (songWithSameAlbum) {
          return {
            ...album,
            artist: songWithSameAlbum.artist
          };
        }
        
        // Si no encontramos una canción con el mismo título exacto, busquemos coincidencias parciales
        if (!songWithSameAlbum) {
          // Intentar buscar una canción donde el título del álbum sea parte del álbum de la canción
          const songWithSimilarAlbum = (genreDetails.songs || []).find(
            (song: Song) => 
              song.album && 
              album.title && 
              (song.album.includes(album.title) || album.title.includes(song.album)) && 
              song.artist && 
              song.artist !== "Desconocido"
          );
          
          if (songWithSimilarAlbum) {
            return {
              ...album,
              artist: songWithSimilarAlbum.artist
            };
          }
        }
        
        // Intentemos buscar por artista usando los artistas del género
        const genreArtist = (genreDetails.artists || []).find(
          (artist: Artist) => artist.albums && artist.albums.some(
            (artistAlbum: any) => artistAlbum.title === album.title || 
            (artistAlbum.id && album.id && artistAlbum.id === album.id)
          )
        );
        
        if (genreArtist) {
          return {
            ...album,
            artist: genreArtist.name
          };
        }
      }
      return album;
    });
    
    // Verificar el resultado de procesamiento
    const albumsWithMissingArtist = processedAlbums.filter((album: Album) => !album.artist || album.artist === "Desconocido").length;
    if (albumsWithMissingArtist > 0) {
      console.log(`Después del procesamiento, aún quedan ${albumsWithMissingArtist} álbumes sin artista definido`);
    }

    // Asegurarse de que todas las propiedades existan para evitar errores
    return {
      genre: genreDetails.genre || {},
      artists: genreDetails.artists || [],
      albums: processedAlbums,
      songs: genreDetails.songs || []
    };
    
  } catch (error) {
    console.error(`Error obteniendo detalles completos del género ${genreSlug}:`, error);
    throw error;
  }
}
