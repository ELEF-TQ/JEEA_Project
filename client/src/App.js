import { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import BureauPage from "./pages/BureauPage/BureauPage";
import RecrutePage from "./pages/RecrutePage/RecrutePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AdminPage from "./pages/AdminPage/AdminPage";

import "./App.scss";

//Theme context
import { ThemeModeContext } from "./contexts/ThemeModeContext";

function App() {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "App dark" : "App light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Teams" element={<TeamsPage />} />
        <Route path="/Bureau" element={<BureauPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Activities" element={<ActivitiesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Recrutement" element={<RecrutePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;