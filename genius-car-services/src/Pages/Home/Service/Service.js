import React from "react";
import "./Service.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>Name : {name} </h2>
      <h3>Price : {price} </h3>
      <p>Description : {description} </p>
    </div>
  );
};

export default Service;
