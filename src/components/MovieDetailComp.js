import React, { Fragment, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import { MdStarOutline, MdMovie } from "react-icons/md";
import { getMovieDetails } from "../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";

function MovieDetailComp() {
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0)100%),
              url(https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path})`,
            }}
          >
            <span
              style={{ spanStyle, color: "White", textAlign: "start" }}
              className="mx-5"
            >
              <Row>
                <Col className="col-md-6 my-2">
                  <h1 style={{ fontSize: "80px" }}>
                    {movieDetails?.original_title}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col className="col-md-6 my-2">
                  <p>
                    {movieDetails?.genres
                      ?.map((genre) => genre.name)
                      .join(", ")}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="col-md-6 my-2">
                  <p>{movieDetails?.overview}</p>
                </Col>
              </Row>
              <Row>
                <Col className="col-md-6 my-2">
                  <h5>
                    <MdStarOutline
                      style={{ color: "yellow" }}
                      className="mx-2"
                    />
                    {movieDetails?.vote_average} / 10
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
        </Col>
      </Row>
    </Fragment>
  );
}

export default MovieDetailComp;
