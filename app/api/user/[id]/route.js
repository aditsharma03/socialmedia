import User from "@lib/models/User";
import { connectMongoDB } from "@lib/mongodb/mongoose";

export const GET = async ( req, {params} ) => {
    try {
        await connectMongoDB();

        // const user = User.findOne( { clerkId: params.id } ).populate("posts savedPosts likedPosts followers following").exec();
        const user = User.findOne( { clerkId: params.id } ).populate("followers following").exec();

        return new Response( JSON.stringify(user), {
            status: 200,
        })
    } catch (error) {
        console.error(error);
        return new Response( "Failed to get user", {
            status: 500,
        });
    }
}