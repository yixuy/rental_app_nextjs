import "../assets/styles/globals.css";
import "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>

          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
