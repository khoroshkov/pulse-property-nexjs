import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({});
    return Response.json(properties);
    // return new Response(JSON.stringify({ message: 'Hello World!' }), {
    //   status: 200
    // });
  } catch (error) {
    return new Response('Something went wrong', {
      status: 500
    });
  }
};
