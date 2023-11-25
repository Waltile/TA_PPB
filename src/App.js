import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from "./pages/LandingPage";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ChampionPageV60 from "./pages/ChampionPageV60";
import ChampionPageAeropress from "./pages/ChampionPageAeropress";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
function App() {
return (
<div className="App">
<Header />
<Router>
<Routes>
<Route exact path="/" element={<AboutPage/>} />
<Route exact path="/Home" element={<LandingPage/>} />
<Route exact path="/ChampionPageV60" element={<ChampionPageV60/>} />
<Route exact path="/ChampionPageAeropress" element={<ChampionPageAeropress/>} />
<Route exact path="/DetailPage" element={<DetailPage/>} />
<Route exact path="/ProfilePage" element={<ProfilePage/>} />
</Routes>
</Router>
<Footer />
</div>
);
}
export default App;