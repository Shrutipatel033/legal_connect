import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import Home from "./components/home/Home"
import FindLawyer from "./components/FindLawyer/FindLawyer";
import LawyerProfile from "./components/FindLawyer/LawyerProfile"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lawyers" element={<FindLawyer />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
      </Route>
    </Routes>
  );
}

export default App;