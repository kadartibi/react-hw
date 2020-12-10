import React from "react";
import AgeInput from "../components/AgeInput";
import ListProducts from "../components/ListProducts";



export default function Home() {
  return (
    <div className="home">
        <h3>Welcome to my webshop!</h3>
        <AgeInput/>
        <ListProducts/>
    </div>
  );
}