import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/Home";
import Blogs from "./page/Blogs";
import Contact from "./page/Contact";
import NoPage from "./page/NoPage";
import HomeState from "./context/HomeState";

export default function App() {
  return (
    <HomeState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HomeState>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);