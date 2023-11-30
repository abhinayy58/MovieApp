import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCarousal from "./MovieCarousal";
import MovieAbout from "./MovieAbout";

const Movie = () => {
  const title = useParams().title;
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      await fetch("/VideoJson.json")
        .then((response) => response.json())
        .then((data) => setData(data.find((movie) => movie.Title === title)))
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchData();
  }, []);

  return (
    <div className="text-white">
      <div>
        <MovieCarousal image={data} />
      </div>
     <div>
     <MovieAbout data={data} />
     </div>
    </div>
  );
};

export default Movie;
