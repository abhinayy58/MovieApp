import React from "react";
import MovieAbout from "../components/Movie/MovieAbout";
import MovieImg from "../components/Movie/MovieImg";

const Movie = () => {
  return (
    <div className="bg-black h-[100%] w-full">
      <div className="px-2">
        <MovieImg />
      </div>
    </div>
  );
};

export default Movie;
