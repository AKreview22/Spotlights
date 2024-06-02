// favLocalStorage.ts
import { Post } from '@/types/Post';

// Function to get all favorite posts from local storage
export const getFavoritePosts = (): Post[] => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.map((fav: string) => JSON.parse(fav));
};

// Function to check if a post is in favorites
export const isFavoritePost = (postId: number): boolean => {
    const favoritePosts = getFavoritePosts();
    return favoritePosts.some((favoritePost: Post) => favoritePost.id === postId);
};

// Function to add a post to favorites
export const addFavoritePost = (post: Post): void => {
    const favoritePosts = getFavoritePosts();
    favoritePosts.push(post);
    localStorage.setItem('favorites', JSON.stringify(favoritePosts.map((post: Post) => JSON.stringify(post))));
};

// Function to remove a post from favorites
export const removeFavoritePost = (postId: number): void => {
    const favoritePosts = getFavoritePosts();
    const newFavorites = favoritePosts.filter((favoritePost: Post) => favoritePost.id !== postId);
    localStorage.setItem('favorites', JSON.stringify(newFavorites.map((post: Post) => JSON.stringify(post))));
};
