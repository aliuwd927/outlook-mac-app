import { useState } from "react";
import "./App.css";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import RightSection from "./components/rightSection";

function App() {
  const [showTable, toggleTable] = useState(false);

  return (
    <div className="App">
      <LeftSection />
      <MiddleSection showTable={showTable} />
      <RightSection />
    </div>
  );
}

export default App;
