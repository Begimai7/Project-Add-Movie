import { useState } from 'react';
import './App.css';
import { MovieHeader } from './components/movieHeader/MovieHeader';
import { MovieList } from './components/movieList/MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random().toString(),
      title: 'Rapunsel',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrpIbn-68XllCeKc6PugDpQRCEfoJveEJDw&usqp=CAU",
      raiting: 5/5
    },
    {
      id: Math.random().toString(),
      title: 'Grinch',
      url: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e3163c1e-f5cc-431f-b5e6-a9d65ae45b2f/300x450",
      raiting: 5/5
    },
    {
      id: Math.random().toString(),
      title: 'Home Alone',
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/2/a/f6f2848e9b05a47e157a207cd8ee11.jpg/234x360/?q=60",
      raiting: 5/5
    }
  ])
  
  const addNewMovie = (renderMovie) => {
    setMovies((prevState) => [
    ...prevState, 
    {
      ...renderMovie
    }
   ]);
  
  }

  return (
    <div className="App">
    <MovieHeader addNewMovie={addNewMovie}/>
    <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
