import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: "Cultural",
      description:
        "Cultural activities of Karigor in various years. Major event for Karigor is annual Bengali New year celebration.",
    },
    {
      name: "Children Section",
      description:
        "Today's childrens are our future, who will uphold the Bengali culture in future in USA",
    },
    {
      name: "Social Activities",
      description:
        "Besides organizing annual cultural activities and events, Karigor is comitted to assist organizing social activities of other Bangladeshi organizarions in USA.",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav>
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
      </Nav>
      <main>
        <Gallery></Gallery>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
