import React from "react";
import "./Canteens.css";
import { Link } from "react-router-dom";

import CanteenCard from "./CanteenCard";
import testImg from "../../assets/extra.jpg";

function Canteens() {
  return (
    <div className="canteen-list">
      <Link to="purnima">
        <CanteenCard image={testImg} name="Purnima Canteen" />
      </Link>
      <Link to="fee-fa-foo">
        <CanteenCard image={testImg} name="Fee Fa Foo Canteen" />
      </Link>
      <Link>
        <CanteenCard image={testImg} name="Mech Canteen" />
      </Link>
      <Link>
        <CanteenCard image={testImg} name="Sandwich Canteen" />
      </Link>
      <Link to="nescafe">
        <CanteenCard image={testImg} name="Nescafe" />
      </Link>
      <Link>
        <CanteenCard image={testImg} name="Pizza-Sendwich Canteen" />
      </Link>
      <Link>
        <CanteenCard image={testImg} name="Ice-cream Canteen" />
      </Link>
    </div>
  );
}

export default Canteens;
