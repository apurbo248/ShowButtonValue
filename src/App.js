import "./App.css";

import { Routes, Route } from "react-router-dom";
import ShowButtonValue from "./Componets/ShowButtonValue";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowButtonValue />} />
      </Routes>
    </div>
  );
}

export default App;
