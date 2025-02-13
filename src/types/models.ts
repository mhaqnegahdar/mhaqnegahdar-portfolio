export type User = {
  id: string;
  email: string;
  displayName: string;
  role: string;
  image: string;
  Posts: Post[];
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  id: string;
  userId: string;
  title: string;
  image: string;
  content: string;
  status: "draft" | "published";
  isFeatured: boolean;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Favorite = {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Bookmark = {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Comment = {
  id: string;
  parentId: string | null;
  userId: string;
  postId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PostCategory = {
  id: string;
  postId: string;
  categoryId: string;
};


// Fetched Data
export type FetchedPost = {
    id: string;
    userId: string;
    title: string;
    image: string;
    content: string;
    status: "draft" | "published";
    isFeatured: boolean;
    readTime: string;
    createdAt: Date;
    updatedAt: Date;
    categories: { id: string; title: string }[];
  };