import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import notFound from "../assets/Image_not_available.png";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data.filter((player) =>
            player.name.toLowerCase().includes(search.trim().toLowerCase())
          ).length > 0 ? (
            data
              .filter((player) =>
                player.name.toLowerCase().includes(search.trim().toLowerCase())
              )
              .map((player, i) => (
                <Col md={6} l={4} xl={3} key={i}>
                  <PlayerCard {...player} />
                </Col>
              ))
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={notFound} />
          )}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
