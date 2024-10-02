import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {},[
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=813f694b354085a78e5ece16b9e81c96&language=en-US&page=1")
    .then((response)=>{
    const firstMovie = response.data.results[0];
    const firstMovieTitle = firstMovie.title;
    const firstMoviePoster = firstMovie.poster_path;
    setBannerImage(`https://image.tmdb.org/t/p/original${firstMoviePoster}`);
    setTitle(firstMovieTitle);      
    })
  ])

  return (
    <div
      className="h-[20vh] md:h-[100vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">{title}</div>
    </div>
  );
};

export default Banner;
