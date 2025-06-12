import Heros from "../components/Heros";
import InfoBoxes from "../components/InfoBoxes";
import HomeProperties from "../components/HomeProperties";
// import connectDB from "../assets/config/database";

const HomePage = () => {
  console.log(process.env.MONGODB_URI);
  // await connectDB();
  return (
    <html lang="en">
      <body>
        <Heros />
        <InfoBoxes />
        <HomeProperties />
      </body>
    </html>
  );
};

export default HomePage;
