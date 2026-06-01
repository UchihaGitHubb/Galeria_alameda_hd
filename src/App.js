import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

import Splash from "./pages/Splash";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding4 from "./pages/Onboarding4";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import CheckEmail from "./pages/CheckEmail";
import NewPassword from "./pages/NewPassword";
import UpdatePassword from "./pages/UpdatePassword";
import CreateProfileName from "./pages/CreateProfileName";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Zones from "./pages/Zones";
import VendorDetail from "./pages/VendorDetail";
import Favorites from "./pages/Favorites";
import Menu from "./pages/Menu";
import Settings from "./pages/Settings";
import Search from "./pages/Search";
import CategorySearch from "./pages/CategorySearch";
import RoutesPage from "./pages/RoutesPage";
import HelpHub from "./pages/HelpHub";
import HelpFaq from "./pages/HelpFaq";
import HelpContact from "./pages/HelpContact";
import HelpReport from "./pages/HelpReport";
import HelpSuggestion from "./pages/HelpSuggestion";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />

            <Route path="/onboarding-1" element={<Onboarding1 />} />
            <Route path="/onboarding-2" element={<Onboarding2 />} />
            <Route path="/onboarding-3" element={<Onboarding3 />} />
            <Route path="/onboarding-4" element={<Onboarding4 />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} />

            <Route
              path="/create-profile-name"
              element={<CreateProfileName />}
            />

            <Route path="/home" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/vendor/:id" element={<VendorDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:mode" element={<CategorySearch />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/help" element={<HelpHub />} />
            <Route path="/help/faq" element={<HelpFaq />} />
            <Route path="/help/contact" element={<HelpContact />} />
            <Route path="/help/report" element={<HelpReport />} />
            <Route path="/help/suggestion" element={<HelpSuggestion />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
