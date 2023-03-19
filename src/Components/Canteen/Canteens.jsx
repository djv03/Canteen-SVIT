import React from "react";
import "./Canteens.css";

import CanteenCard from "./CanteenCard";
import testImg from "../../assets/extra.jpg";

function Canteens() {
  return (
    <div className="canteen-list">
      <CanteenCard image={testImg} name="Purnima Canteen" />
      <CanteenCard image={testImg} name="Fee Fa Foo Canteen" />
      <CanteenCard image={testImg} name="Mech Canteen" />
      <CanteenCard image={testImg} name="Sandwich Canteen" />
      <CanteenCard image={testImg} name="Nescafe" />
      <CanteenCard image={testImg} name="Pizza-Sendwich Canteen" />
      <CanteenCard image={testImg} name="Ice-cream Canteen" />
    </div>
  );
}

export default Canteens;
