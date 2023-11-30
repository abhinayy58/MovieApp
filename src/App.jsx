import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./pages/MoviePage";
import Movie from "./pages/Movie";
import MoviePage from "./pages/MoviePage";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<MoviePage />}  />
      <Route path="/movie/:title" element={<Movie />}  />
    </Routes>
   
    </>
  );
}

export default App;
