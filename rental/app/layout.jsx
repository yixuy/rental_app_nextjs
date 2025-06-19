import "../assets/styles/globals.css";
import "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { GlobalProvider } from "../context/GlobalContext";
export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};
import 'photoswipe/dist/photoswipe.css';


const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
};

export default MainLayout;
