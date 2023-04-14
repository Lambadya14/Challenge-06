import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import { MdStarOutline } from "react-icons/md";

function SearchedMovie() {
  const navigate = useNavigate();
  const location = useLocation();
  const { query } = location.state;
  const [searchedMovieList, setSearchedMovieList] = useState({});
  const [resultName, setResultName] = useState("");

  useEffect(() => {
    async function searchMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=117cdbfac10bbc3a44833dd1488f43f9&query=${query}`
        );
        console.log(JSON.stringify(response.data.results));
        setSearchedMovieList(response.data.results);
      } catch (error) {
        alert(error);
      }
    }
    setResultName(query);
    searchMovie();
  }, [query]);

  return (
    <>
      <NavbarPage />
      <Container className="mt-5">
        <h2 className="text-danger p-4">Search: {resultName}</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {searchedMovieList.length > 0 &&
            searchedMovieList.map((movie, i) => (
              <Card
                className="d-flex gap-3 border-2"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Img
                    variant="top"
                    style={{
                      width: "100%",
                      height: "400px",
                    }}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />

                  <Card.Title
                    onClick={() => {
                      navigate(`/movie/${movie.id}`);
                    }}
                    style={{ fontSize: "15px" }}
                  >
                    {movie.title}
                  </Card.Title>
                  <Card.Text
                    onClick={() => {
                      navigate(`/movie/${movie.id}`);
                    }}
                  >
                    <p>
                      <MdStarOutline
                        style={{ color: "yellow" }}
                        className="mx-2"
                      />
                      {movie.vote_average} / 10
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Container>
    </>
  );
}

export default SearchedMovie;
