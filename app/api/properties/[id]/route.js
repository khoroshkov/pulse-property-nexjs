import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response('Property not found', { status: 404 });
    }

    return Response.json(property);
    // return new Response(JSON.stringify({ message: 'Hello World!' }), {
    //   status: 200
    // });
  } catch (error) {
    return new Response('Something went wrong', {
      status: 500
    });
  }
};
