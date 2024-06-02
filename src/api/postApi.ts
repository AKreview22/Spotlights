import posts from '@/data/posts'
import { Post } from '@/types/Post';

interface ApiResponse<T> {
    status: number;
    message: string;
    data?: T;
}

// Function to fetch all posts
export const fetchPosts = async (): Promise<ApiResponse<Post[]>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                message: 'Posts fetched successfully',
                data: posts
            });
        }, 1500);
    });
};

// Function to fetch a post by ID
export const fetchPostById = async (id: number): Promise<ApiResponse<Post>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = posts.find(post => post.id === id);
            if (post) {
                resolve({
                    status: 200,
                    message: 'Post fetched successfully',
                    data: post
                });
            } else {
                resolve({
                    status: 404,
                    message: 'Post not found'
                });
            }
        }, 1000);
    });
};

// Function to add a new post
export const addPost = async (newPost: Post): Promise<ApiResponse<null>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(newPost);
            resolve({
                status: 201,
                message: 'Post added successfully'
            });
        }, 1000);
    });
};

// Function to update a post by ID
export const updatePost = async (updatedPost: Post): Promise<ApiResponse<null>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = posts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                posts[index] = updatedPost;
                resolve({
                    status: 200,
                    message: 'Post updated successfully'
                });
            } else {
                resolve({
                    status: 404,
                    message: 'Post not found'
                });
            }
        }, 1000);
    });
};

// Function to delete a post by ID
export const deletePost = async (id: number): Promise<ApiResponse<null>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = posts.findIndex(post => post.id === id);
            if (index !== -1) {
                posts.splice(index, 1);
                resolve({
                    status: 200,
                    message: 'Post deleted successfully'
                });
            } else {
                resolve({
                    status: 404,
                    message: 'Post not found'
                });
            }
        }, 1000);
    });
};
