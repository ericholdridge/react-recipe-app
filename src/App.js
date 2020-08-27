import React from "react";
import "./App.css";
import { RecipeProvider } from "./components/Context/Context";

// Components
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <Hero />
      </div>
    </RecipeProvider>
  );
}

export default App;
