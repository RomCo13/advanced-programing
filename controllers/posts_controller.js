import Post from "../models/posts_model.js";
export async function addPost(post) {
    return await Post.create(post);
}

export async function getPosts(filters) {
    const query = {};

    if (filters.sender) {
        query.sender = filters.sender.toString();
    }

    return await Post.find(query);
}
