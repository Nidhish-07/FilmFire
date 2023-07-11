import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MovieInfo from "./components/MovieInfo";
import Profile from "./components/Profile";
import Actors from "./components/Actors";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/movie/:id" element={<MovieInfo />}></Route>
          <Route path="/actors/:id" element={<Actors />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
