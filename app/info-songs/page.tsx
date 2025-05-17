import { Sidebar } from "@/components/music-player/sidebar"
import { MusicPlayer } from "@/components/music-player/music-player"
import '@/app/globals.css'
import { CirclePlus } from 'lucide-react';

export default function InfoSongsPage() {
    const songInfo = {
    title: "El CLúB",
    description: `La canción "EL CLúB" de Bad Bunny es una introspección melancólica que se desarrolla en el 
    contexto de una noche de fiesta. A primera vista, la letra describe una escena típica de un club nocturno, 
    con música, mujeres y sustancias recreativas. Sin embargo, a medida que avanza, se revela un trasfondo emocional más 
    profundo, donde el protagonista, a pesar de estar rodeado de gente y diversión, se siente vacío y perdido.`,
    genres: ["Reguetón", "Trap", "Latino", "Urbano", "Pop"],
    duration: "3:42 minutos - 2025",
    likes: "249.081.633 Me gusta",
    views: "400.020.280 Reproducciones",
    lyrics: `Yeah, 2:00 de la mañana en el club
To'l mundo pasándola cabrón
Las mujeres encima de mí
La hookah, las pastillas y un blunt
La que yo quiera dice que sí
Bien loco cantando la canción
Después de aquí nos vamos pa-
¿Qué estará haciendo mi ex
Que hace tiempo por ahí no se ve?
¿Será que ya me superó y le va bien?
Mientras que yo, borracho, pienso
...

Fuente: Musixmatch
Compositores: Marco Daniel Borrero / Benito Antonio Martinez Ocasio / Álvaro Jerez Barranco / Scott H Dittrich / Martin Hardie Coogan / Benjamin Falik / Yuval Haim Chain / Roberto Jose Jr Rosado Torres / Aidan James Cullen / Willkar Jose Soto Figueroa
Letra de EL CLúB © Universal Music Corp., Straight From The Art Music, Songs Of Universal Inc., Cody Pablito Publishing, Howl Of The Moon Music, Six Ten Worldwide Publishing, Grass Is Greener Publishing, Howard Hues Music, Rsm Publishing Llc, Creative Park Publishing.`,
  };
  return (
    <div className="flex flex-col h-screen bg-black text-white pt-16 overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden text-white ">
                    {/*contenedor de toda la información con su titulo */}
                    <div className="relative flex-1 overflow-auto bg-gray-700/45 rounded-xl m-4 overflow-auto h-auto">
                        <div className="grid grid-cols-[1fr_2fr] gap-4 m-6">
                            <div className="flex items-center">
                                <h1 className="text-left text-7xl font-extrabold ">{songInfo.title}</h1>
                            </div>
                            <div className="flex items-center col-span-1">
                                <CirclePlus style={{ width: '25%', height: '25%' }} className=" text-purple-200 text-left " />
                            </div>
                        </div>
                        <div className="m-6">
                            <p className="text-justify w-[60%] ">{songInfo.description}</p>
                        </div>
                    

                        {/*contenedor unicamente de la información*/}
                        <div className="bg-white p-4 rounded-3xl shadow-lg w-full h-full overflow-auto">
                            <div className="grid grid-cols-2 gap-4 m-6">
                                <div>
                                    <h1 className="text-2xl font-bold text-black mb-6">Información</h1>
                                    {/* acá van los genéros*/}
                                    <div>
                                        {songInfo.genres.map((genre, index) => (
                                        <button 
                                         key={index}
                                         className="m-3 bg-purple-200 text-electricViolet font-bold py-2 px-4 rounded transition-colors duration-200 rounded-xl">
                                            {genre}
                                        </button>
                                        ))}
                                    </div>
                                    <div className="text-black mb-6 text-justify">
                                        <h1 className="text-2xl font-bold text-black mt-6">Duración</h1>
                                        <p className="mb-6"> {songInfo.duration}</p>
                                        <h1 className="text-2xl font-bold text-black ">Likes</h1>
                                        <p className="mb-6"> {songInfo.likes} </p>
                                        <h1 className="text-2xl font-bold text-black">Reproducciones</h1>
                                        <p className="mb-6"> {songInfo.views} </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h1 className="text-2xl font-bold text-black mb-6">Letra</h1>
                                    <p className="text-black">{songInfo.lyrics}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MusicPlayer />
    </div>
  );
}