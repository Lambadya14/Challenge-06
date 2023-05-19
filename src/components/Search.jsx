import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MdStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedMovies } from "../redux/actions/movieActions";

function Search() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { searchedMovies } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getSearchedMovies(params));
  }, [dispatch, params]);
  return (
    <>
      <Container className="d-flex flex-column gap-2 ">
        <Row className="mt-5">
          <Col>
            <h1>Search results for "{params.name}"</h1>
          </Col>
        </Row>
        <Row className="mb-5 ">
          {searchedMovies &&
            searchedMovies?.length > 0 &&
            searchedMovies.map((image) => (
              <Col>
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original/${image?.poster_path}`}
                    onClick={() => {
                      navigate(`/movie/${image?.id}`);
                    }}
                  />

                  <Card.Title
                    className="mx-3 mt-3"
                    onClick={() => {
                      navigate(`/movie/${image?.id}`);
                    }}
                    style={{ fontSize: "15px" }}
                  >
                    {image?.title}
                  </Card.Title>
                  <Card.Text
                    onClick={() => {
                      navigate(`/movie/${image?.id}`);
                    }}
                  >
                    <p>
                      <MdStarOutline
                        style={{ color: "yellow" }}
                        className="mx-2"
                      />
                      {image?.vote_average} / 10
                    </p>
                  </Card.Text>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Search;
