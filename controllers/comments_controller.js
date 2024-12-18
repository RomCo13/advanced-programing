import {getPostById} from "./posts_controller.js";
import Comment from "../models/comment_model.js";
import mongoose from "mongoose";


export async function addComment(comment) {

    const post = await getPostById(comment.post);
    if (!post) {
        throw new Error("Post not found");
    }

    return await Comment.create(comment);
}

export async function getComments(filters) {
    const query = {};

    if (filters.post) {
        query.post = filters.post.toString();
    }

    if (filters.sender) {
        query.sender = filters.sender.toString();
    }

    return await Comment.find(query).populate('post', 'message sender');
}

export async function getCommentById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }

    return await Comment.findById(id).populate('post', 'message sender');
}

export async function updateCommentById(id, { message }) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }

    const comment = await Comment.findById(id);

    if (comment) {
        comment.message = message;
        await comment.save();
    }

    return comment;
}

export async function deleteCommentById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }

    return await Comment.findByIdAndDelete(id);
}
