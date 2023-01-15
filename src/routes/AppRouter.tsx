import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/Login/Login";
import Dashboard from "../views/Dashboard/Dashboard";
import LandingPage from "../views/LandingPage/LandingPage";
import Signup from "../views/Signup/Signup";
import TaskManagement from "../views/TaskManagement/TaskManagement";
import ProgressTracking from "../views/ProgressTracking/ProgressTracking";
import Feedback from "../views/Feedback/Feedback";
import Resources from "../views/Resources/Resources";
import Mentorship from "../views/Mentorship/Mentorship";
import Reports from "../views/Reports/Reports";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/taskmanagement" element={<TaskManagement />} />
        <Route path="/progresstracker" element={<ProgressTracking />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
