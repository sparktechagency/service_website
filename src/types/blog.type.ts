export type IBlog = {
  id: number;
  title: string;
  date: string; // You can use Date if you parse it from string
  comments: number;
  image: string;
  excerpt: string;
};

export interface IRecentBlog {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}


export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  content: string;
}
