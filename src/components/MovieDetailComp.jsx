import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarPage from "../components/NavbarPage";
import { MdStarOutline, MdMovie } from "react-icons/md";

function MovieDetailComp() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=3f5a55bd4c41a28d6071f4375ca61211&language=en-US`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }

    if (params?.id) {
      fetchPost();
    }
  }, [params]);
  const divStyle = {
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    backgroundSize: "cover",
  };
  const spanStyle = {
    background: "#efefef",
    color: "#000000",
    flex: "1",
  };
  return (
    <Fragment>
      <Row>
        <Col>
          <NavbarPage />
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <h1 className="text-center">Loading ...</h1>
          ) : (
            <>
              <div
                style={{
                  ...divStyle,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: "grid",
                  placeItems: "center",
                  width: "100%",
                  height: "910px",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0)100%),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                }}
              >
                <span
                  style={{ spanStyle, color: "White", textAlign: "start" }}
                  className="mx-5"
                >
                  <Row>
                    <Col className="col-md-6 my-2">
                      <h1 style={{ fontSize: "80px" }}>
                        {movie.original_title}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6 my-2">
                      <p>
                        {movie?.genres?.map((genre) => genre.name).join(", ")}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6 my-2">
                      <p>{movie.overview}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6 my-2">
                      <h5>
                        <MdStarOutline
                          style={{ color: "yellow" }}
                          className="mx-2"
                        />
                        {movie.vote_average} / 10
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6 my-3">
                      <Button className="bg-danger border-0 rounded-5">
                        <h6 className="mx-1 my-2">
                          <MdMovie /> Watch Trailer
                        </h6>
                      </Button>
                    </Col>
                  </Row>
                </span>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Fragment>
  );
}

export default MovieDetailComp;
