import Home from "./pages/Home";
import { ToastContainer } from "react-bootstrap";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import NoTokenAccess from "./components/NoTokenAccess";
import Protected from "./components/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie/:id"
            element={
              <Protected>
                <MovieDetail />
              </Protected>
            }
          />
          <Route
            path="/login"
            element={
              <NoTokenAccess>
                <Login />
              </NoTokenAccess>
            }
          />
          <Route path="/search/:name" element={<SearchPage />} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
