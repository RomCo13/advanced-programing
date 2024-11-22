import Post from "../models/posts_model.js";
export async function addPost(post) {
    return await Post.create(post);
}