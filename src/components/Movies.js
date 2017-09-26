import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        { movies.map((movie, index) => 
          <div key={index}>
            <p>Title: { movie.title }</p>
            <p>Time: { movie.time }</p>
            <ul>Genres: { movie.genres.map((genre,index) =>
                <li key={ index }>{genre}</li>
              )}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;
