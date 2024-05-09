import React, { useEffect, useState } from "react";
import { getAllRooms } from "../utils/ApiFunctions";
import { Link } from "react-router-dom";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./RoomCarousal.css"

const RoomCarousel = () => {
  const [rooms, setRooms] = useState([
    { id: "", roomType: "", roomPrice: "", photo: "" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setRooms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="mt-5">Loading rooms....</div>;
  }
  if (errorMessage) {
    return <div className=" text-danger mb-5 mt-5">Error : {errorMessage}</div>;
  }

  return (
    <section className="bg-light mb-5 mt-5 shadow">

      <Container>
        <Carousel indicators={false} >
          {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <Row>
                {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                  <Col key={room.id} className="mb-4" xs={12} md={6} lg={3}>
                    <Card>
                      <Link to={`/book-room/${room.id}`}>
                        <Card.Img
                          variant="top"
                          src={`data:image/png;base64, ${room.photo}`}
                          alt="Room Photo"
                          className="w-100"
                          style={{ height: "200px" }}
                        />
                      </Link>
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                          <Card.Title className="hotel-color text-center mb-0">
                            {room.roomType}
                          </Card.Title>
                          <br></br>
                          <Card.Title className="room-price text-center">
                            ${room.roomPrice}/night
                          </Card.Title>
                          <div className="mt-3">
                            <Link
                              to={`/book-room/${room.id}`}
                              className="btn btn-hotel btn-sm"
                            >
                              Book Now
                            </Link>
                          </div>
                        </Card.Body>

                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <div className="text-center mt-2 mb-2">
          <Link to={"/browse-all-rooms"} className="hotel-color browse-link">
            Browse all rooms
          </Link>
        </div>
  <br></br>

    </section>
  );
};

export default RoomCarousel;
