import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
// import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
