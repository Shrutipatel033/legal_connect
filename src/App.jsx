import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import Home from "./Pages/Home/Home"
import FindLawyer from "./components/FindLawyer/FindLawyer";
import LawyerProfile from "./components/FindLawyer/LawyerProfile"
import Service from "./components/legal_services/Service";
import HowItWorks from "./components/HowitWorks/HowItWorks";
import Blogs from "./Pages/Blogs/Blogs"
import Contact from "./Pages/Contact/Contact";
import BlogDetails from "./Pages/Blogs/BlogDetails"
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ServiceDetails from "./components/legal_services/ServiceDetails";
import BookConsultation from "./Pages/Consultation/BookConsultation";
import ConsultationSuccess from "./Pages/Consultation/ConsultationSuccess";
import MyConsultations from "./Pages/Consultation/MyConsultation";
import AnonymousConsultation from "./Pages/Consultation/AnonymousConsultation";
import AnonymousSuccess from "./Pages/Consultation/AnonymousSuccess";
import AnonymousRequestSuccess from "./Pages/Consultation/AnonymousRequestSuccess";
import SuperAdminDashboard from "./Pages/Dashboard/superadmin/SuperAdminDashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Admins from "./Pages/Dashboard/superadmin/Admins";
import Lawyers from "./Pages/Dashboard/superadmin/Lawyers";
import Clients from "./Pages/Dashboard/superadmin/Clients";
import AdminDashboard from "./Pages/Dashboard/admin/AdminDashboard";
import LawyerDashboard from "./Pages/Dashboard/lawyer/LawyerDashboard";
import ClientDashboard from "./Pages/Dashboard/client/ClientDashboard";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lawyers" element={<FindLawyer />} />
        <Route path="lawyer/:id" element={<LawyerProfile />} />
        <Route path="services" element={<Service />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="services/:serviceName" element={<ServiceDetails />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="book-consultation/:lawyerId" element={<BookConsultation />} />
        <Route path="consultation-success" element={<ConsultationSuccess />} />
        <Route path="anonymous-request-success" element={<AnonymousRequestSuccess />} />
        <Route path="my-consultations" element={<MyConsultations />} />
        <Route path="anonymous-consultation" element={<AnonymousConsultation />} />
        <Route path="anonymous-success" element={<AnonymousSuccess />} />

        <Route path="*" element={<NotFound />} />
      </Route>


      <Route element={<DashboardLayout />}>
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
        <Route path="/superadmin/admins" element={<Admins />} />
        <Route path="/superadmin/lawyers" element={<Lawyers />} />
        <Route path="/superadmin/clients" element={<Clients />} />

        <Route path="/admin" element={<AdminDashboard />} />

        {/* Lawyer */}
        <Route path="/lawyer" element={<LawyerDashboard />} />

        {/* Client */}
        <Route path="/client" element={<ClientDashboard />} />

      </Route>
    </Routes>
  );
}

export default App;