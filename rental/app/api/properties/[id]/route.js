import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id`
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const properties = await Property.findById(params.id);
    if (!properties) {
      return new Response("Property Not Found", { status: 404 });
    }
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", {
      status: 500,
    });
  }
};
