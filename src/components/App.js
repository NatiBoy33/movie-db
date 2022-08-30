import { Routes, Route } from "react-router-dom";
import Actors from "./Actors/Actors";
import MovieInfo from "./MovieInfo/MovieInfo";
import Movies from "./Movies/Movies";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/approved" element={<Movies />} />
            <Route exact path="/movie/:id" element={<MovieInfo />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
