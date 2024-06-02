import { User } from "@/types/User";

export type Post = {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    price: number;
    likesCount: number;
    commentsCount: number;
    tags: string[];
    user: User;
};
