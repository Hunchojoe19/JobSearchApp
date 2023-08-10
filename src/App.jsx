import "./App.css";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Organization from "./pages/Organization";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import OrganizationSignUp from "./pages/OrganizationSignUp";
import OrganizationHome from "./pages/OrganizationHome";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import RequireAuthUser from "./components/RequireAuthUser";
import RequireAuthOrg from "./components/RequireAuthOrg";
import Settings from "./pages/Settings";
import { useDispatch } from "react-redux";
import { saveUser } from "./redux/features/userSlice";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import JobSuccess from "./pages/JobSuccess";
import HomePage from "./pages/HomePage";
import MyJob from "./pages/MyJob";
import OrgSettings from "./pages/OrgSettings";
import OrganizationDetails from "./pages/OrganizationDetails";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) return;

    dispatch(saveUser(JSON.parse(user)));
  }, []);
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/layout" element={<Layout />} />
        {/* public routes */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/organization" element={<OrganizationSignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/applied_jobs" element={<MyJob />} />
        <Route path="/login" element={<Organization />} />
        {/* protected routes */}
        <Route element={<RequireAuthUser />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/success" element={<ApplicationSuccess />} />
        </Route>

        {/* protected routes organization */}
        <Route element={<RequireAuthOrg />}>
          <Route path="/organization_home" element={<OrganizationHome />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job_success" element={<JobSuccess />} />
          <Route path="/setting" element={<OrgSettings />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/org_detail/:id" element={<OrganizationDetails />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
