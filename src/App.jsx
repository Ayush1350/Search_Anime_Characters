import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeHomePage from "./components/AnimeHomePage/AnimeHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
