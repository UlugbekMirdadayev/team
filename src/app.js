import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { LoginAuntification } from "./adminComponent/login";
import "./assets/style/main.scss";
import Home from "./components/home";
import Rate from "./components/rate";

function App() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/admin/*" element={<>AdminPanel</>} />
        <Route path="/auth/*" element={<LoginAuth />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
      <Footer />
    </>
  );
}

function LoginAuth() {
  return (
    <Routes>
      <Route path="/login" element={<LoginAuntification />} />
    </Routes>
  );
}

export default App;
