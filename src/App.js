import { useState } from "react";
import "./App.css";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import RightSection from "./components/rightSection";
import InboxComponent from "./components/sub components/inbox";

function App() {
  const [showTable, toggleTable] = useState(false);
  const [showEmail, emailClicked] = useState(0);
  return (
    <div className="App">
      <LeftSection toggleTable={toggleTable} />
      <MiddleSection showTable={showTable} emailClicked={emailClicked} />
      <RightSection showEmail={showEmail} />
    </div>
  );
}

export default App;

// Target rightSection from the middleSection
