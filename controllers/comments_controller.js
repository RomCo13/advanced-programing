import {getPostById} from "./posts_controller";
import Comment from "models/comment_model";


export async function addComment(comment) {

    const post = await getPostById(comment.post);
    if (!post) {
        throw new Error("Post not found");
    }

    return await Comment.create(comment);
}
