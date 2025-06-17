import Properties from "@/components/Properties";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const data = await fetchProperties();

  data.properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return <Properties />;
};

export default PropertiesPage;
