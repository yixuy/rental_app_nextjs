import Heros from "../components/Heros";
import InfoBoxes from "../components/InfoBoxes";
import HomeProperties from "../components/HomeProperties";
// import connectDB from "../assets/config/database";
import FeaturedProperties from "../components/FeaturedProperties";
export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <html lang="en">
      <body>
        <Heros />
        <InfoBoxes />
        <FeaturedProperties />
        <HomeProperties />
      </body>
    </html>
  );
};

export default HomePage;
