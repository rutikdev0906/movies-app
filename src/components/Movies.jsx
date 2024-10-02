import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import { WatchListContext } from "../context/WatchListContext";
import paginationSlice from "../redux/paginationSlice";
import { useSelector, useDispatch } from "react-redux";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const context_data = useContext(WatchListContext) 
  const {pageNo} = useSelector((state)=>state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {}, [
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=813f694b354085a78e5ece16b9e81c96&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error)),
  ]);

  const handleNext = () => {
    dispatch(paginationSlice.actions.handleNext());
  };

  const handlePrevious = () => {
   dispatch(paginationSlice.actions.handlePrevious());
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5 ">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj, index) => (
          <MovieCard movieObj={movieObj} key={index} addToWatchList={context_data.addToWatchList} watchList={context_data.watchList} removeFromWatchList={context_data.removeFromWatchList} />
        ))}
      </div>
      <Pagination next={handleNext} previous={handlePrevious} pageNo={pageNo} />
    </div>
  );
};

export default Movies;
