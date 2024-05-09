import React, { useContext } from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousal";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Testimonials from "../common/Testimonals";
import Parallax2 from "../common/Parallax2";
import Parallax3 from "../common/Parallax3";



const Home = () => {
  const location = useLocation();

  const message = location.state && location.state.message;
  const currentUser = localStorage.getItem("userId");
  return (
    <section>
      {message && <p className="text-warning px-5 text-center">{message}</p>}
      {currentUser && (
        <h6 className="text-success text-center">
          {" "}
          You are logged-In as {currentUser}
        </h6>
      )}
      <MainHeader />
      <div className="container">
        <RoomSearch />
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax2 />
        <Testimonials/>
        <Parallax3/>
      </div>
    </section>
  );
};

export default Home;
