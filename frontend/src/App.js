import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TvShowPage from "./pages/TvShowPage";
import MoviesPage from "./pages/MoviesPage";
import BlogsPage from "./pages/BlogsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./components/MovieDetail/MovieDetails";
import MovieFrame from "./components/MovieFrame/MovieFrame";
import ViewAllMovie from "./components/ViewAllMovie/ViewAllMovie";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SearchPage from "./pages/SearchPage";
import "./App.scss";
import TvShowDetails from "./components/TvShows/TvShowDetails";
import TvShowFrame from "./components/TvShows/TvShowFrame";
import ViewAllShow from "./components/TvShows/ViewAllShow";
import SeasonsFrame from "./components/TvShows/SeasonsFrame";
import MyProfile from "./pages/MyProfile";
import BlogDetail from "./components/Blog/BlogDetail";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (
      localStorage.getItem("UserToken") &&
      JSON.parse(localStorage.getItem("User"))
    ) {
      setToken(localStorage.getItem("UserToken"));
      setUser(JSON.parse(localStorage.getItem("User")));
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar setUser={setUser} setToken={setToken} />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvShows" element={<TvShowPage />} />
          <Route
            path="/myProfile"
            element={
              user ? <MyProfile user={user} /> : <Navigate to="/login" />
            }
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/searchPage/:data" element={<SearchPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route
            path="/signUp"
            element={token ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route
            path="/login"
            element={
              token ? (
                <Navigate to="/" />
              ) : (
                <LoginPage setToken={setToken} setUser={setUser} />
              )
            }
          />
          <Route
            path="/movies/movieDetails/:movie_id"
            element={<MovieDetails />}
          />
          <Route
            path="/movies/movieFrame/:movie_id"
            element={token ? <MovieFrame /> : <Navigate to="/login" />}
          />
          <Route
            path="/movies/viewAllMovies/:category"
            element={<ViewAllMovie />}
          />
          <Route
            path="/tvShows/tvShowDetails/:tvShow_id"
            element={<TvShowDetails />}
          />
          <Route
            path="/tvShows/tvShowFrame/:tvShow_id"
            element={token ? <TvShowFrame /> : <Navigate to="/login" />}
          />
          <Route
            path="/tvShows/viewAllShows/:category"
            element={<ViewAllShow />}
          />
          <Route
            path="/seasons/seasonsFrame/:season_id"
            element={token ? <SeasonsFrame /> : <Navigate to="/login" />}
          />
          <Route path="/blogs/blogDetails/:blog_id" element={<BlogDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
