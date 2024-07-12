import React from "react";
import Card from "../Components/Card";
import Spade from "../Assets/Spade.png";
import Diamond from "../Assets/Diamond.png";
import Club from "../Assets/Club.png";
import Heart from "../Assets/Heart.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full">
        <Card title="Hours" className="z-10" src={Spade}>
          New opening hours:{" "}
          <ul>
            <li>Sunday: 10AM - 11PM</li>
            <li>Mon-Thurs: 11AM - 11PM</li>
            <li>Fri: 11AM - midnight</li>
            <li>Sat: 10AM - midnight</li>
          </ul>
          <br />
          <span className="font-semibold">
            Our kitchen closes 2.5-3 hours before we close!
          </span>
        </Card>
        <Card
          title="Reservations Are Open For Any Party Size"
          className="z-0 top-3"
          src={Diamond}
        >
          For large parties (9+ or more people), please email us at{" "}
          <span className="font-bold">sipnplaynyc@gmail.com</span> to inquire
          about a reservation.
        </Card>
        <Card title="How It Works" className="-z-10" src={Club}>
          Come on in with your friends and family and play boardgames from our
          collection of over 500+ games! Just $10 a person for 3 hours of
          gameplay. ($12 a person Friday-Sunday and Holidays) Play while
          enjoying bubble tea, coffee, beer sandwiches or salads and have a
          great time! If you want to guarantee a table, you can make a
          reservation which is $15 a person for 3 hours of gameplay.{" "}
        </Card>
        <Card title="Location and Contact" src={Heart}>
          471 5th Ave. <br /> Brooklyn, NY 11215 <br /> sipnplaynyc@gmail.com{" "}
          <br /> (718) 971 - 1684
        </Card>
      </div>
    </div>
  );
};

export default Home;
