import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Row, Col, Container, Image,  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home2() {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 2000);
  }, [carousel]);

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
        <Col>
          <h1>Popular Films</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="d-flex item "
            >
              {movies.map((result) => (
                <motion.div className="p-2 " key={result.id}>
                  <Image
                    style={{
                      width: 286,
                      height: 400,
                      pointerEvents: "none",
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                    alt="poster"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
