import React, { useEffect, useState } from "react";
import MovieList from "../components/Movies/MovieList";
const MoviePage = () => {
  const [videoData, setVideoData] = useState(null);

  let Popular = []
  let Trending = []
  let commingUp = []

  const filterPopular = videoData?.filter(item => item.Status === 'Popular' && Popular.push(item));
  const filterTrending = videoData?.filter(item => item.Status === 'Trending' && Trending.push(item));
  const filterComingUp = videoData?.filter(item => item.ComingSoon === true && commingUp.push(item));

  useEffect(() => {
    fetch("/VideoJson.json")
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-black h-[100%] min-h-[1320px] max-h-full  w-full">
      <div className="container float-right movie_list">
        <div>
          <MovieList type="Trending" videos={filterTrending} />
          <MovieList type="Popular" videos={filterPopular} />
          <MovieList type="Coming Soon" videos={filterComingUp} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
