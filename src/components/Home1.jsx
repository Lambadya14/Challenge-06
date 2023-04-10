import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "../styles/Home1.css";
import NavbarPage from "./NavbarPage";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

function Home1() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=117cdbfac10bbc3a44833dd1488f43f9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        );
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetchAPI();
  }, []);

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };
  const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#000000",
  };
  return (
    <Fragment>
      <Row>
        <Col>
          <NavbarPage />
        </Col>
      </Row>
      <div className="slide-container">
        <Fade>
          {movies.map((image, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: "grid",
                  placeItems: "center",
                  width: "100%",
                  height: "500px",
                  marginBottom: "5px",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0)100%),url(https://image.tmdb.org/t/p/original/${image.backdrop_path})`,
                }}
              >
                <span style={{ spanStyle, color: "White" }}>
                  <h1>{image.title}</h1> {image.overview}
                </span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      {/* {movies.map((result, index) => (
        <>
          <Row
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0)100%),url(https://image.tmdb.org/t/p/original/${result.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "grid",
              placeItems: "center",
              height: "500px",
              marginBottom: "5px",
            }}
            className="img-fluid"
          >
            <Col className="imageDesc" style={{ width: "800px" }}>
              <h1 className="text-light">
                <strong>{result.title}</strong>
              </h1>
              <p className="text-light">{result.overview}</p>
            </Col>
          </Row>
        </>
      ))} */}
    </Fragment>
  );
}

export default Home1;
