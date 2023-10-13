import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import { Boxes } from "./components/boxes";
import Benefits from "./components/benefits";
import { Tasks } from "./components/tasks";
import People from "./components/people";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";
import Payouts from "./components/payouts";
import Tiers from "./components/tiers";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Boxes />
      <Benefits />
      <Payouts />
      <Tiers />
      <Tasks />
      <People />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
