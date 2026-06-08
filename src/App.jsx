import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import Home from "./components/home/Home"
import FindLawyer from "./components/FindLawyer/FindLawyer";
import LawyerProfile from "./components/FindLawyer/LawyerProfile"
import Service from "./components/legal_services/Service";
import HowItWorks from "./components/HowitWorks/HowItWorks";
import Blogs from "./Pages/Blogs/Blogs"
import Contact from "./Pages/Contact/Contact";
import BlogDetails from "./Pages/Blogs/BlogDetails"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lawyers" element={<FindLawyer />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
        <Route path="/services" element={<Service />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
}

export default App;