import React from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

const DefaultTemplete = (match) => {
  let pageName = match.id.url.slice(1);
  return <MenuBar page={pageName} />;
};

export default DefaultTemplete;
