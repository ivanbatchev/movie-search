import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage, AboutPage, AboutFilmPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="about" element={<AboutFilmPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
