import React from "react";
import ProductCard from "../components/custom/ProductCard";
import { useLocation, useParams } from "react-router-dom";

export default function ExploreSingleProductPage() {
  const { state } = useLocation();
  const { id } = useParams();

  if (state === null) {
    return <div>Mal namaite hoibeo: Serial {id}</div>;
  }
  if (state.pdata) {
    return <div>Mal oise: {state.pdata?.title}</div>;
  }
}
