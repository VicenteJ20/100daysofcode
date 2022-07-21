import React from "react";
import Aside from "./components/aside";
import ButtonsSection from "./components/buttons";

export default function App(){
  return (
    <div className="root_div row container-fluid">
      <Aside />
      <ButtonsSection />
    </div>
  );
}