"use client";

import { FC, useEffect, useState } from "react";
import { ReviewsList } from "@/components/reviews-profile/reviews-list";

// Datos de ejemplo para las reseñas
const sampleReviews = [
  {
    authId: "auth123",
    reviewId: "review1",
    reviewTitle: "Gran experiencia con esta canción",
    reviewBody: "Una de las mejores canciones que he escuchado, excelente producción y letras profundas.",
    reviewRating: 5,
    reviewDateCreation: "2024-05-15T18:25:43.511Z",
    reviewDateUpdate: "2024-05-15T18:25:43.511Z",
    reviewStatus: "active",
    reviewType: "song",
    username: "MariaMusic22",
    profileImage: "/placeholder-user.jpg"
  },
  {
    authId: "auth456",
    reviewId: "review2",
    reviewTitle: "Buen álbum pero esperaba más",
    reviewBody: "El álbum tiene buenos momentos pero le falta consistencia. Las primeras canciones son excelentes pero decae al final.",
    reviewRating: 3,
    reviewDateCreation: "2024-05-10T14:30:22.000Z",
    reviewDateUpdate: "2024-05-11T09:15:10.000Z",
    reviewStatus: "active",
    reviewType: "album",
    username: "JuanRock",
    profileImage: "/placeholder-user.jpg"
  },
  {
    authId: "auth789",
    reviewId: "review3",
    reviewTitle: "Artista revelación del año",
    reviewBody: "Este artista demuestra un talento increíble, su evolución musical es impresionante y su último trabajo es una obra maestra.",
    reviewRating: 5,
    reviewDateCreation: "2024-05-01T10:12:33.000Z",
    reviewDateUpdate: "2024-05-01T10:12:33.000Z",
    reviewStatus: "active",
    reviewType: "artist",
    username: "CarlosJazz",
    profileImage: "/placeholder-user.jpg"
  }
];

const ReviewsPage: FC = () => {
  const [reviews, setReviews] = useState(sampleReviews);

  // En un caso real, podrías cargar los datos desde una API
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch('/api/reviews');
  //       const data = await response.json();
  //       setReviews(data);
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };
  //
  //   fetchReviews();
  // }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Reseñas recientes</h1>
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;
