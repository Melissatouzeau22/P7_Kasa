import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Logements from "./pages/Logements/Logements";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="Logements/:id" element={<Logements />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
export default App;
