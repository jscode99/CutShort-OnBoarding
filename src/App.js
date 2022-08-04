import { useState } from "react";
//Libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./pages/home";
import AppContext from "./services/AppContext";
//Antd Design StyleSheet
import "antd/dist/antd.css";
//Global StyleSheet
import "./App.css";

export default function App() {
  const [appContext, setAppContext] = useState({
    loader: true,
  });
  return (
    <>
      <AppContext.Provider
        value={{
          appContext,
          setAppContext,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}
