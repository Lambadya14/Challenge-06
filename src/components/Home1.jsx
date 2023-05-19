import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/Home1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPage from "./NavbarPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdMovie } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieActions";

function Home1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.movies);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#000000",
  };
  return (
    <>
      <Row>
        <Col>
          <NavbarPage />
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider {...settings}>
            {movies &&
              movies?.length > 0 &&
              movies.map((image, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      display: "grid",
                      placeItems: "bottom",
                      width: "100%",
                      height: "600px",
                      marginBottom: "5px",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0)100%),url(https://image.tmdb.org/t/p/original/${image.backdrop_path})`,
                    }}
                  >
                    <span
                      onClick={() => {
                        navigate(`/movie/${image.id}`);
                      }}
                      style={{
                        spanStyle,
                        color: "White",
                        marginTop: "150px",
                        marginLeft: "15px",
                        marginRight: "700px",
                        marginBottom: "100px",
                      }}
                      className="mx-5"
                    >
                      <Row>
                        <Col className="col-md-8 ">
                          <h1 style={{ fontSize: "80px" }} className="my-2">
                            {image.title}
                          </h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col-md-6 ">
                          <div className="my-2">{image.overview}</div>
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col-md-6">
                          <Button className="bg-danger border-0 rounded-5 my-2">
                            <h6 className="mx-1 my-2">
                              <MdMovie /> Watch Trailer
                            </h6>
                          </Button>
                        </Col>
                      </Row>
                    </span>
                  </div>
                </div>
              ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
}

export default Home1;
