import { create } from 'zustand';
import { fetchPosts } from '@/api/postApi';
import { Post as PostType } from '@/types/Post';


interface PostState {
  posts: PostType[];
  filteredPosts: PostType[];
  status: 'loading' | 'refreshing' | 'idle';
  loadPosts: () => Promise<void>;
  setFilteredPosts: (query: string) => void;
  sortPosts: (order: 'unsorted' | 'asc' | 'desc') => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  filteredPosts: [],
  status: 'loading',
  loadPosts: async () => {
    set({ status: 'loading' });
    const response = await fetchPosts();
    if (response.status === 200 && response.data) {
      set({ posts: response.data, filteredPosts: response.data, status: 'idle' });
    } else {
      set({ status: 'idle' });
    }
  },
  setFilteredPosts: (query: string) => {
    set((state) => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = state.posts.filter(post =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.body.toLowerCase().includes(lowerCaseQuery)
      );
      return { filteredPosts: filtered };
    });
  },
  sortPosts: (order: 'unsorted' | 'asc' | 'desc') => {
    set((state) => {
      let sortedPosts = [...state.posts];
      if (order === 'asc') {
        sortedPosts.sort((a, b) => a.price - b.price);
      } else if (order === 'desc') {
        sortedPosts.sort((a, b) => b.price - a.price);
      }
      return { filteredPosts: sortedPosts };
    });
  },
}));
