import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <nav style={{ padding: "10px" }}>
        <Link to="/">Home</Link> | <Link to="/stats">Stats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
}
