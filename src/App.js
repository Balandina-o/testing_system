import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import TestListPage from "./pages/TestListPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage";
import RegistrationPage from "./pages/RegistrationPage";
import TestEditPage from "./pages/TestEditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/tests" element={<TestListPage />} />
          <Route path="/tests/:id" element={<TestPage />} />
          <Route path="/testsedit/:id" element={<TestEditPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<TestListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
