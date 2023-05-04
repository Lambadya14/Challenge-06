import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdStarOutline } from "react-icons/md";

function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=3f5a55bd4c41a28d6071f4375ca61211&query=${params.name}`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }

    if (params?.name) {
      fetchPost();
    }
  }, [params]);
  return (
    <>
      <Container className="d-flex flex-column gap-2 ">
        <Row className="mt-5">
          <Col>
            <h1>Search results for "{params.name}"</h1>
          </Col>
        </Row>
        <Row className="mb-5 ">
          {loading ? (
            <h1 className="text-center">Loading ...</h1>
          ) : (
            movies.map((image) => (
              <Col>
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                    onClick={() => {
                      navigate(`/movie/${image.id}`);
                    }}
                  />

                  <Card.Title
                    className="mx-3 mt-3"
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
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default Search;
