import Home from "./pages/Home";
import { ToastContainer } from "react-bootstrap";
import MovieDetail from "./pages/MovieDetail";
import SearchMovie from "./pages/SearchMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search/:query" element={<SearchMovie />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
