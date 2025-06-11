import Heros from "../components/Heros";
import InfoBoxes from "../components/InfoBoxes";
import HomeProperties from "../components/HomeProperties";
const HomePage = () => {
  console.log(process.env.MONGODB_URI);
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
