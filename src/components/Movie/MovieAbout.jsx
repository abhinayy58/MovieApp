import React from "react";

const MovieAbout = (props) => {
  return (
    <div className="container p-10  ">
      <div className="flex items-center gap-10 about">
        <p className="text-red-500 text-2xl ">{props?.data?.Title}</p>
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Genre</p>
          <p className="text-white text-l">{props?.data?.Genre}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Run time</p>
          <p className="text-white text-l">{props?.data?.Runtime}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Language</p>
          <p className="text-white text-l">{props?.data?.Language}</p>
        </div>
      </div>
      <div className="py-3 flex items-center gap-20">
        <button className="w-32 outline-none h-10 bg-red-500 text-white rounded-[10px]">
          Watch now
        </button>
      </div>
      <div className="rounded border my-5 border-gray-600">
        <p className="text-sm p-5">{props?.data?.Plot}</p>
      </div>
      <div className="flex items-center gap-10 about">
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Metascore</p>
          <p className="text-white bg-yellow-600 w-6 h-6 rounded-full pl-1 text-l">
            {props?.data?.Metascore}
          </p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Director</p>
          <p className="text-white text-l">{props?.data?.Director}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-500 text-l">Released</p>
          <p className="text-white text-l">{props?.data?.Released}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieAbout;
