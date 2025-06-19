import Properties from "@/components/Properties";
import { fetchProperties } from "@/utils/requests";
export const dynamic = "force-dynamic";

const PropertiesPage = async () => {
  let properties = [];

  try {
    const data = await fetchProperties();

    if (data && Array.isArray(data.properties)) {
      properties = data.properties.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else {
      console.error("data.properties is not an array:", data?.properties);
    }
  } catch (err) {
    console.error("Error fetching properties:", err);
  }

  return <Properties />;
};

export default PropertiesPage;
