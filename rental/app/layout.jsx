import "../assets/styles/globals.css";
import "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
