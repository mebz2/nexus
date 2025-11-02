import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Homepage</h1>;
}

function About() {
  return <h1>About page</h1>;
}

function Contact() {
  return <h1>Contacts Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home" className="font-bold">
          Home
        </Link>{" "}
        | <Link to="/home/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
