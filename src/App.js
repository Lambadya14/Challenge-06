import { ToastContainer } from "react-bootstrap";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
