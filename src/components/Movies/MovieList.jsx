// VideoList.js
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({type,videos}) => {


  return (
    <div className="container mt-4">
      <div>
        <p className="text-2xl py-2 font-bold text-white">{type}</p>
      </div>
      <div className="flex py-2 gap-4 overflow-x-scroll example">
        {videos &&
          videos?.map((video, i) => (
               <MovieCard type={type} key={i} video={video} />
          ))}
      </div>
    </div>
  );
};
export default MovieList;
