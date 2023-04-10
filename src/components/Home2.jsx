import React from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home2() {
  const [movies, setMovies] = useState([]);
  // const params = useParams();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=117cdbfac10bbc3a44833dd1488f43f9&language=en-US&page=1`
        );
        console.log(response.data.results);
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
      {movies.map((result, index) => (
        <>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Image
                  style={{ width: 286, height: 400 }}
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt="poster"
                />
                <Card.Body>
                  <Card.Title>
                    <strong>{result.title}</strong>
                  </Card.Title>
                  <Card.Text>
                    Rating: {result.vote_average} ({result.vote_count})
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ))}
    </Container>
  );
}

export default Home2;
