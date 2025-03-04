import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Login from './pages/Login';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import ServicesGrid from "./components/ServicesGrid";
import LandingPage from './pages/LandingPage';
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Benifit from "./pages/Benifit";
import More from "./pages/More";
import NewRegistration from "./pages/New";
import HandicapRegistration from "./pages/Handicap";
import UpdateRegistration from "./pages/Update";
import VerifiedRegistration from "./pages/Verified";
import SearchMarriageProfiles from "./pages/Search";
import RegistrationForm from "./pages/Forms/NewRegistration";
import HandicapRegistrationForm from "./pages/Forms/HandicapRegistrationForm";

function App() {
  return (
    <>
      {/* Show login page if user is not signed in */}
      <SignedOut>
        {/* <Login /> */}
        <LandingPage />
      </SignedOut>

      {/* Show entire content only if the user is signed in */}
      <SignedIn>
        <Header />
        <Navbar />
        
        {/* Add User Profile Button
        <div className="flex justify-end p-4">
          <UserButton afterSignOutUrl="/" />
        </div> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <ServicesGrid />
              </>
            }
          />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        
        <Route path="/benifit" element={<Benifit />} />
        <Route path="/new" element={<NewRegistration />} />
        <Route path="/handicap" element={<HandicapRegistration />} />
        <Route path="/update" element={<UpdateRegistration />} />
        <Route path="/search" element={<SearchMarriageProfiles />} />
        <Route path="/verified" element={<VerifiedRegistration />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/hregister" element={<HandicapRegistrationForm />} />
        </Routes>
      </SignedIn>
    </>
  );
}

export default App;
