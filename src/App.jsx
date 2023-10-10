import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import OneUser from "./components/ModalOkno/ModalOkno";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<OneUser />} />
      </Routes>
    </div>
  );
}

export default App;
