import React from 'react';
import Nav from "./components/nav";
import Header from "./components/header";
import { Boxes } from "./components/boxes";
import Benefits from "./components/benefits";
import { Tasks } from "./components/tasks";
import People from "./components/people";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Fathom from "./components/fathom";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Boxes />
      <Benefits />
      <Tasks />
      <People />
      <Contact />
      <Footer />
      <Fathom />
    </div>
  );
}

export default App;
