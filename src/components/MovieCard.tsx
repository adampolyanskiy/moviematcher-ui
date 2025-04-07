"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { MovieDto } from "@/types";
import MovieDetails from "./MovieDetails";

interface MovieCardProps {
  movie: MovieDto;
  onSwipe: (isLiked: boolean) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onSwipe }) => {
  return (
    <div className="h-full p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-900 mx-auto">
      {/* Reusing MovieDetails component */}
      <div className="h-[600px]">
        <MovieDetails movie={movie} />
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-around">
        <Button variant="destructive" onClick={() => onSwipe(false)}>
          Dislike
        </Button>
        <Button variant="default" onClick={() => onSwipe(true)}>
          Like
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
