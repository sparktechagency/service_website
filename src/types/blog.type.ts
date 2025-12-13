

export type TBlog = {
  _id: string;
  title: string;
  category: string; 
  descriptions: string;
  image: string; 
  createdAt: string; 
  updatedAt: string;
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
