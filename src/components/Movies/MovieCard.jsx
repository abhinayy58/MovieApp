import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";

const MovieCard = ({ video }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      video,
    });
  };
  const RemoveToCartHandler = (id) => {
    cartCtx.removeItem({
      id,
    });
  };
  // console.log(cartCtx)
const isSaved = (movie) => {
  return cartCtx.item.some(name => name.Title === movie)
}
  return (
    <div className="w-35 h-25 movie_card">
      <img
        src={video.Poster}
        className="w-100 max-w-none w-[265px] h-[300px]"
        loading="lazy"
        alt={video.Title}
        rel="noopener noreferrer"
      />

      <div className="overlay p-5">
        <div className="text-white desc">
          <p className="text-2xl font-bold">{video.Title}</p>
          <p className="text-l">{video.Plot}</p>
        </div>
        <div className="p-3 flex items-center gap-20">
          <Link to={`/movie/${video.Title}`}>
            <button className="w-20 outline-none h-10 bg-red-500 text-white rounded-full">
              Watch
            </button>
          </Link>
          {isSaved(video.Title) ? 
         <button className="w-20 outline-none h-10 bg-transparent text-white rounded-full" onClick={() => RemoveToCartHandler(video.Title)}>
        <span>&#10003;Saved</span>
       </button>
       :
       <button  onClick={addToCartHandler} className="w-20 outline-none h-10 bg-transparent border text-white rounded-full">
      +Save
     </button>  
        }
          {/* <div className="text-white cursor-pointer" onClick={addToCartHandler}>
            {isSaved(video.Title) ? (<span>&#10003;Saved</span>) :'+Save'}
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
