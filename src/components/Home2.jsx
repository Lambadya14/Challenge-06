import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdStarOutline } from "react-icons/md";

function Home2() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // const params = useParams();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=117cdbfac10bbc3a44833dd1488f43f9&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <Container className="d-flex flex-column gap-2 ">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <h1>Popular Films</h1>
          <p>See More Populars!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider {...settings}>
            {movies.map((image) => (
              <Card className="border-0" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    style={{ width: 286, height: 400 }}
                    src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                  />

                  <Card.Title
                    onClick={() => {
                      navigate(`/movie/${image.id}`);
                    }}
                    style={{ fontSize: "15px" }}
                  >
                    {image.title}
                  </Card.Title>
                  <Card.Text
                    onClick={() => {
                      navigate(`/movie/${image.id}`);
                    }}
                  >
                    <p>
                      <MdStarOutline
                        style={{ color: "yellow" }}
                        className="mx-2"
                      />
                      {image.vote_average} / 10
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
